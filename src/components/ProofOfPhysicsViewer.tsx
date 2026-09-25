import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  ShieldCheck, 
  RotateCw, 
  Layers, 
  FileCode, 
  Maximize2, 
  Download, 
  Check, 
  Activity, 
  Crosshair, 
  Eye, 
  Info,
  Sliders,
  ChevronRight
} from 'lucide-react';
import { C2PA_SAMPLE_MANIFEST } from '../data/whitepaperData';

type RenderMode = 'pointcloud' | 'mesh' | 'microct' | 'toolpath';
type ArtifactModel = 'selene' | 'benin' | 'rosetta';

export const ProofOfPhysicsViewer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [modelType, setModelType] = useState<ArtifactModel>('selene');
  const [renderMode, setRenderMode] = useState<RenderMode>('pointcloud');
  const [showManifest, setShowManifest] = useState(false);
  const [scanLaserActive, setScanLaserActive] = useState(true);
  const [sliceDepth, setSliceDepth] = useState(50); // 0 to 100
  const [copiedHash, setCopiedHash] = useState(false);
  const [isRotating, setIsRotating] = useState(true);

  // Scene references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const currentObjectGroup = useRef<THREE.Group | null>(null);
  const laserPlaneRef = useRef<THREE.Mesh | null>(null);

  // Build Procedural High-Fidelity Geometry for the Artifacts
  const generateArtifactGeometry = (type: ArtifactModel) => {
    let geom: THREE.BufferGeometry;

    if (type === 'selene') {
      // Equine sculpted head using combination of parametric toruses and distorted spheres
      geom = new THREE.TorusKnotGeometry(2.4, 0.9, 128, 48, 2, 3);
      const pos = geom.attributes.position;
      // Sculpt into horse head muzzle profile
      for (let i = 0; i < pos.count; i++) {
        let x = pos.getX(i);
        let y = pos.getY(i);
        let z = pos.getZ(i);
        // Taper muzzle downwards and elongate
        if (y < 0) {
          x *= 0.7;
          z *= 0.6;
        }
        // Micro-abrasions noise
        const noise = Math.sin(x * 6) * Math.cos(y * 6) * 0.04;
        pos.setXYZ(i, x + noise, y * 1.2, z + noise);
      }
      geom.computeVertexNormals();
    } else if (type === 'benin') {
      // High-relief cylinder & head form with beaded collar
      geom = new THREE.CylinderGeometry(1.8, 2.2, 5.0, 64, 48);
      const pos = geom.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        let x = pos.getX(i);
        let y = pos.getY(i);
        let z = pos.getZ(i);
        // Beaded collar ridges near bottom
        if (y < -0.8) {
          const collarWave = Math.sin(y * 18) * 0.25;
          x += (x * collarWave) * 0.3;
          z += (z * collarWave) * 0.3;
        }
        // Crown protrusion
        if (y > 1.5) {
          x *= 0.85;
          z *= 0.85;
        }
        pos.setXYZ(i, x, y, z);
      }
      geom.computeVertexNormals();
    } else {
      // Rosetta Inscription Slab (irregular stone stela)
      geom = new THREE.BoxGeometry(3.6, 5.2, 0.9, 64, 64, 16);
      const pos = geom.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        let x = pos.getX(i);
        let y = pos.getY(i);
        let z = pos.getZ(i);
        // Broken top fracture
        if (y > 1.8 && x < 0) {
          y -= (Math.abs(x) * 0.6);
        }
        // Surface inscriptions micro-relief on front face
        if (z > 0.4) {
          const textGrid = Math.sin(y * 42) * Math.cos(x * 32) * 0.035;
          z += textGrid;
        }
        pos.setXYZ(i, x, y, z);
      }
      geom.computeVertexNormals();
    }

    return geom;
  };

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0c0a09); // Deep warm stone-950
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 8.5);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfef3c7, 1.4); // Warm museum gallery light
    dirLight1.position.set(5, 8, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.8); // 450nm Blue Metrology Rim
    dirLight2.position.set(-6, -2, -4);
    scene.add(dirLight2);

    // Laser scanning horizontal plane
    const laserGeom = new THREE.PlaneGeometry(10, 10);
    const laserMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide
    });
    const laserMesh = new THREE.Mesh(laserGeom, laserMat);
    laserMesh.rotation.x = Math.PI / 2;
    scene.add(laserMesh);
    laserPlaneRef.current = laserMesh;

    // Interactive mouse rotation handlers
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !currentObjectGroup.current) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      currentObjectGroup.current.rotation.y += deltaX * 0.008;
      currentObjectGroup.current.rotation.x += deltaY * 0.008;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!cameraRef.current) return;
      cameraRef.current.position.z = THREE.MathUtils.clamp(
        cameraRef.current.position.z + e.deltaY * 0.005,
        4.0,
        14.0
      );
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElement.addEventListener('wheel', onWheel, { passive: false });

    // Window resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0 && cameraRef.current && rendererRef.current) {
          cameraRef.current.aspect = newWidth / newHeight;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Slow passive rotation if enabled and not currently dragging
      if (currentObjectGroup.current && isRotating && !isDragging) {
        currentObjectGroup.current.rotation.y += 0.005;
      }

      // Laser sweep animation
      if (laserPlaneRef.current) {
        if (scanLaserActive) {
          laserPlaneRef.current.visible = true;
          laserPlaneRef.current.position.y = Math.sin(elapsed * 1.5) * 2.8;
        } else {
          laserPlaneRef.current.visible = false;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('wheel', onWheel);
      renderer.dispose();
    };
  }, []);

  // Update object when modelType, renderMode, or sliceDepth changes
  useEffect(() => {
    if (!sceneRef.current) return;
    const scene = sceneRef.current;

    // Remove old group
    if (currentObjectGroup.current) {
      scene.remove(currentObjectGroup.current);
      currentObjectGroup.current.traverse((child) => {
        if (child instanceof THREE.Mesh || child instanceof THREE.Points || child instanceof THREE.LineSegments) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach(m => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    }

    const group = new THREE.Group();
    const baseGeom = generateArtifactGeometry(modelType);

    if (renderMode === 'pointcloud') {
      // Sub-micron Point Cloud
      const count = baseGeom.attributes.position.count;
      const colors = new Float32Array(count * 3);
      const positions = baseGeom.attributes.position;

      for (let i = 0; i < count; i++) {
        const y = positions.getY(i);
        const z = positions.getZ(i);

        // Gradient coloring: warm marble highlights with blue metrology fringe
        if (modelType === 'selene') {
          // Marble: Alabaster to soft ivory with blue metrology scan line
          const t = (y + 3) / 6;
          colors[i * 3] = 0.95 - t * 0.15;
          colors[i * 3 + 1] = 0.92 - t * 0.2;
          colors[i * 3 + 2] = 0.85 + (z > 0 ? 0.15 : 0.0);
        } else if (modelType === 'benin') {
          // Antique Benin Bronze
          colors[i * 3] = 0.82;
          colors[i * 3 + 1] = 0.58;
          colors[i * 3 + 2] = 0.28;
        } else {
          // Dark granodiorite stone
          colors[i * 3] = 0.55;
          colors[i * 3 + 1] = 0.58;
          colors[i * 3 + 2] = 0.62;
        }
      }

      baseGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const pointsMaterial = new THREE.PointsMaterial({
        size: 0.038,
        vertexColors: true,
        transparent: true,
        opacity: 0.92
      });

      const points = new THREE.Points(baseGeom, pointsMaterial);
      group.add(points);

    } else if (renderMode === 'mesh') {
      // Photogrammetric Surface Mesh
      let material: THREE.Material;
      if (modelType === 'selene') {
        material = new THREE.MeshStandardMaterial({
          color: 0xFAF6EE,
          roughness: 0.35,
          metalness: 0.05
        });
      } else if (modelType === 'benin') {
        material = new THREE.MeshStandardMaterial({
          color: 0x92613B,
          roughness: 0.45,
          metalness: 0.75
        });
      } else {
        material = new THREE.MeshStandardMaterial({
          color: 0x333333,
          roughness: 0.85,
          metalness: 0.15
        });
      }

      const mesh = new THREE.Mesh(baseGeom, material);
      group.add(mesh);

      // Fine wireframe overlay for topological validation
      const wireframeGeom = new THREE.WireframeGeometry(baseGeom);
      const wireframeMat = new THREE.LineBasicMaterial({
        color: 0xa8a29e,
        transparent: true,
        opacity: 0.12
      });
      const wireframe = new THREE.LineSegments(wireframeGeom, wireframeMat);
      group.add(wireframe);

    } else if (renderMode === 'microct') {
      // Micro-CT Volumetric Scan with Internal Density & Restoration Pin
      const meshMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      });
      const outerMesh = new THREE.Mesh(baseGeom, meshMat);
      group.add(outerMesh);

      // Internal metal restoration pin (historical 1930s copper/steel rod)
      const pinGeom = new THREE.CylinderGeometry(0.12, 0.12, 3.5, 16);
      const pinMat = new THREE.MeshStandardMaterial({
        color: 0xef4444,
        emissive: 0x7f1d1d,
        metalness: 0.9,
        roughness: 0.2
      });
      const pinMesh = new THREE.Mesh(pinGeom, pinMat);
      pinMesh.rotation.z = Math.PI / 5;
      group.add(pinMesh);

      // Internal micro-CT density slice plane
      const sliceY = ((sliceDepth - 50) / 50) * 2.5;
      const sliceGeom = new THREE.RingGeometry(0.2, 2.8, 32);
      const sliceMat = new THREE.MeshBasicMaterial({
        color: 0x10b981,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.65
      });
      const sliceMesh = new THREE.Mesh(sliceGeom, sliceMat);
      sliceMesh.rotation.x = Math.PI / 2;
      sliceMesh.position.y = sliceY;
      group.add(sliceMesh);

    } else if (renderMode === 'toolpath') {
      // 7-Axis Robotic Milling Toolpaths
      const meshMat = new THREE.MeshStandardMaterial({
        color: 0x292524,
        roughness: 0.9,
        transparent: true,
        opacity: 0.4
      });
      const coreMesh = new THREE.Mesh(baseGeom, meshMat);
      group.add(coreMesh);

      // Concentric multi-axis CNC cutter toolpaths
      const toolpathCurves: THREE.Vector3[][] = [];
      for (let y = -2.5; y <= 2.5; y += 0.35) {
        const points: THREE.Vector3[] = [];
        const radius = 2.2 * Math.cos(y * 0.4);
        for (let a = 0; a <= Math.PI * 2; a += Math.PI / 16) {
          const r = radius + (Math.sin(a * 4) * 0.15);
          points.push(new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r));
        }
        toolpathCurves.push(points);
      }

      toolpathCurves.forEach((curvePoints, idx) => {
        const lineGeom = new THREE.BufferGeometry().setFromPoints(curvePoints);
        const lineMat = new THREE.LineBasicMaterial({
          color: idx % 2 === 0 ? 0xf59e0b : 0x06b6d4, // Alternating roughing & finishing passes
          linewidth: 1.5,
          transparent: true,
          opacity: 0.85
        });
        const line = new THREE.Line(lineGeom, lineMat);
        group.add(line);
      });
    }

    scene.add(group);
    currentObjectGroup.current = group;
  }, [modelType, renderMode, sliceDepth]);

  const handleCopyHash = () => {
    navigator.clipboard.writeText(C2PA_SAMPLE_MANIFEST.cryptographicSignature.sha256RootHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const handleDownloadManifestJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(C2PA_SAMPLE_MANIFEST, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `c2pa_manifest_${modelType}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <section id="proof-of-physics" className="py-16 md:py-24 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-stone-800 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              <Crosshair className="w-3.5 h-3.5" />
              <span>Interactive Proof-of-Physics Viewer</span>
              <span aria-hidden="true" className="text-stone-700">/</span>
              <span className="text-stone-400">Sub-Micron Metrology &amp; C2PA Integrity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-100 text-balance">
              Zero-Friction Physical Synthesis &amp; Digital Twin Authentication.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-400 font-light max-w-2xl text-pretty">
              Rotate, zoom, and inspect real-time sub-micron optical point clouds, internal micro-CT volumetric slices, and 7-axis robotic toolpath vectors cryptographically bound to hardware HSM certificates.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => setShowManifest(!showManifest)}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-mono rounded-md border transition-colors cursor-pointer ${
                showManifest 
                  ? 'bg-amber-400/20 text-amber-300 border-amber-400/50' 
                  : 'bg-stone-900 text-stone-300 border-stone-700 hover:bg-stone-800'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>C2PA Manifest {showManifest ? 'Hide' : 'Inspect'}</span>
            </button>
          </div>
        </div>

        {/* 3D Canvas + Control HUD Container */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main 3D Viewport Column */}
          <div className="lg:col-span-8 relative rounded-xl border border-stone-800 bg-black overflow-hidden shadow-2xl">
            
            {/* Viewport Top Bar Controls */}
            <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
              
              {/* Artifact Selector */}
              <div className="pointer-events-auto flex items-center gap-1 p-1 bg-stone-900/90 backdrop-blur-md rounded-lg border border-stone-800 text-xs">
                <button
                  onClick={() => setModelType('selene')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    modelType === 'selene'
                      ? 'bg-stone-800 text-amber-300 font-medium'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  Selene Horse (Parthenon)
                </button>
                <button
                  onClick={() => setModelType('benin')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    modelType === 'benin'
                      ? 'bg-stone-800 text-amber-300 font-medium'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  Benin Bronze Royal Head
                </button>
                <button
                  onClick={() => setModelType('rosetta')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    modelType === 'rosetta'
                      ? 'bg-stone-800 text-amber-300 font-medium'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  Rosetta Inscription Slab
                </button>
              </div>

              {/* Utility Toggles */}
              <div className="pointer-events-auto flex items-center gap-2">
                <button
                  onClick={() => setScanLaserActive(!scanLaserActive)}
                  className={`px-2.5 py-1 text-xs font-mono rounded-md border backdrop-blur-md transition-colors cursor-pointer ${
                    scanLaserActive 
                      ? 'bg-sky-950/80 text-sky-300 border-sky-600/50' 
                      : 'bg-stone-900/80 text-stone-400 border-stone-800 hover:text-stone-200'
                  }`}
                  title="Toggle 450nm Laser Triangulation Sweep"
                >
                  450nm Laser: {scanLaserActive ? 'ON' : 'OFF'}
                </button>

                <button
                  onClick={() => setIsRotating(!isRotating)}
                  className={`p-1.5 rounded-md border backdrop-blur-md transition-colors cursor-pointer ${
                    isRotating
                      ? 'bg-stone-800 text-amber-300 border-stone-700'
                      : 'bg-stone-900/80 text-stone-500 border-stone-800'
                  }`}
                  title="Toggle Auto Orbit"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Interactive Three.js Container */}
            <div 
              ref={mountRef} 
              className="w-full h-[480px] sm:h-[560px] cursor-grab active:cursor-grabbing"
              title="Click and drag to rotate; scroll to zoom"
            />

            {/* Viewport Bottom Overlay Status Ribbon */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono bg-stone-950/85 backdrop-blur-md p-3 rounded-lg border border-stone-800 pointer-events-auto">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Metrology Stream
                </span>
                <span className="text-stone-600">|</span>
                <span className="text-stone-400">
                  Resolution: <strong className="text-stone-200 font-normal">&lt; 8.5 µm</strong>
                </span>
                <span className="hidden sm:inline text-stone-600">|</span>
                <span className="hidden sm:inline text-stone-400">
                  Data Density: <strong className="text-stone-200 font-normal">148.2M pts</strong>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-stone-400">Rotate: Left-Click · Zoom: Scroll</span>
              </div>
            </div>
          </div>

          {/* Right Inspection Controls Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Sensor & Pipeline Mode Selector */}
            <div className="rounded-xl border border-stone-800 bg-stone-900/90 p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <h3 className="text-sm font-semibold text-stone-200 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  Metrology Pipeline Mode
                </h3>
                <span className="text-xs font-mono text-stone-400">HVMC Standard</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <button
                  onClick={() => setRenderMode('pointcloud')}
                  className={`p-3 rounded-lg border text-left transition-colors cursor-pointer ${
                    renderMode === 'pointcloud'
                      ? 'bg-stone-800 border-amber-400/60 text-stone-100 shadow-sm'
                      : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <div className="font-semibold text-amber-300">01. Point Cloud</div>
                  <div className="text-[11px] text-stone-400 mt-1">Sub-micron blue structured laser</div>
                </button>

                <button
                  onClick={() => setRenderMode('mesh')}
                  className={`p-3 rounded-lg border text-left transition-colors cursor-pointer ${
                    renderMode === 'mesh'
                      ? 'bg-stone-800 border-amber-400/60 text-stone-100 shadow-sm'
                      : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <div className="font-semibold text-amber-300">02. Surface Mesh</div>
                  <div className="text-[11px] text-stone-400 mt-1">Photogrammetry + BRDF shaders</div>
                </button>

                <button
                  onClick={() => setRenderMode('microct')}
                  className={`p-3 rounded-lg border text-left transition-colors cursor-pointer ${
                    renderMode === 'microct'
                      ? 'bg-stone-800 border-amber-400/60 text-stone-100 shadow-sm'
                      : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <div className="font-semibold text-amber-300">03. Micro-CT Slice</div>
                  <div className="text-[11px] text-stone-400 mt-1">Subsurface fracture &amp; pin check</div>
                </button>

                <button
                  onClick={() => setRenderMode('toolpath')}
                  className={`p-3 rounded-lg border text-left transition-colors cursor-pointer ${
                    renderMode === 'toolpath'
                      ? 'bg-stone-800 border-amber-400/60 text-stone-100 shadow-sm'
                      : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <div className="font-semibold text-amber-300">04. 7-Axis Milling</div>
                  <div className="text-[11px] text-stone-400 mt-1">Robotor diamond toolpath vector</div>
                </button>
              </div>

              {/* Mode-specific secondary parameter controls */}
              {renderMode === 'microct' && (
                <div className="pt-3 border-t border-stone-800 space-y-2">
                  <div className="flex items-center justify-between text-xs text-stone-400">
                    <span>Micro-CT Tomography Slice Plane:</span>
                    <span className="font-mono text-emerald-400">{sliceDepth}% Depth</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliceDepth}
                    onChange={(e) => setSliceDepth(Number(e.target.value))}
                    className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="text-[11px] text-stone-500 italic">
                    Reveals internal iron armature pins and micro-porosity without intrusive sampling.
                  </div>
                </div>
              )}

              {renderMode === 'toolpath' && (
                <div className="pt-3 border-t border-stone-800 text-xs text-stone-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Tooling Substrate:</span>
                    <span className="text-stone-200 font-mono">Mount Pentelicus Marble</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Milling Kinematics:</span>
                    <span className="text-stone-200 font-mono">7-Axis Robotor KUKA Spindle</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Surface Tolerance:</span>
                    <span className="text-amber-400 font-mono">&lt; 0.05 mm geometric limit</span>
                  </div>
                </div>
              )}
            </div>

            {/* Cryptographic Manifest Quick Summary */}
            <div className="rounded-xl border border-stone-800 bg-stone-900/90 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-stone-200 font-mono">C2PA Cryptographic Signature</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  VALIDATED
                </span>
              </div>

              <div className="space-y-2 text-xs font-mono text-stone-400">
                <div className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-500">Signing Authority:</span>
                  <span className="text-stone-300">National Physical Laboratory UK</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-500">Hardware HSM:</span>
                  <span className="text-stone-300">Thales Luna FIPS 140-3 L4</span>
                </div>
                <div>
                  <div className="text-stone-500 mb-1 flex items-center justify-between">
                    <span>SHA-256 Root Hash:</span>
                    <button
                      onClick={handleCopyHash}
                      className="text-[11px] text-amber-400 hover:text-amber-300 cursor-pointer flex items-center gap-1"
                    >
                      {copiedHash ? <Check className="w-3 h-3 text-emerald-400" /> : null}
                      <span>{copiedHash ? 'Copied' : 'Copy Hash'}</span>
                    </button>
                  </div>
                  <div className="p-2 bg-black/60 rounded text-[10px] text-stone-400 break-all select-all font-mono border border-stone-800">
                    {C2PA_SAMPLE_MANIFEST.cryptographicSignature.sha256RootHash}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => setShowManifest(true)}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-stone-900 bg-amber-300 hover:bg-amber-200 rounded-md transition-colors cursor-pointer"
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>Open Full C2PA Manifest Tree</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed C2PA Manifest Modal / Expansion Drawer */}
        {showManifest && (
          <div className="mt-8 rounded-xl border border-amber-400/40 bg-stone-900 p-6 shadow-2xl space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-medium text-stone-100">
                    C2PA Provenance Manifest Specification
                  </h3>
                  <p className="text-xs text-stone-400 font-mono mt-0.5">
                    Standard: {C2PA_SAMPLE_MANIFEST.manifestVersion} · RFC 3161 PKI Qualified Timestamp
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownloadManifestJson}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-stone-200 bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-md transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-amber-300" />
                  <span>Download .JSON</span>
                </button>

                <button
                  onClick={() => setShowManifest(false)}
                  className="px-3 py-1.5 text-xs font-mono text-stone-400 hover:text-stone-200 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Manifest Provenance Steps Chain */}
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-amber-400 mb-3">
                Signed Provenance Pipeline Chain
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {C2PA_SAMPLE_MANIFEST.provenanceChain.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-black/60 border border-stone-800 space-y-2">
                    <div className="text-xs font-semibold text-stone-200">
                      {step.step}
                    </div>
                    <div className="text-[11px] text-stone-400 font-sans">
                      {step.actor}
                    </div>
                    <div className="text-[10px] text-stone-500 font-sans">
                      {step.facility}
                    </div>
                    <div className="pt-2 border-t border-stone-800 text-[9px] font-mono text-amber-300/80 truncate" title={step.hash}>
                      SHA: {step.hash.slice(0, 18)}...
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Spatial Assertions & JSON Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-black/40 border border-stone-800 space-y-2 text-xs font-mono">
                <div className="font-semibold text-stone-300 pb-2 border-b border-stone-800">
                  Spatial Assertions &amp; Standards
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">Surface Mesh Resolution:</span>
                  <span className="text-stone-300">{C2PA_SAMPLE_MANIFEST.spatialAssertions.meshResolution}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">Volumetric Data Format:</span>
                  <span className="text-stone-300">{C2PA_SAMPLE_MANIFEST.spatialAssertions.openUsdVersion}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">Transmission Geometry:</span>
                  <span className="text-stone-300">{C2PA_SAMPLE_MANIFEST.spatialAssertions.gltfVersion}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">Open Governance License:</span>
                  <span className="text-amber-400 font-semibold">{C2PA_SAMPLE_MANIFEST.spatialAssertions.openAccessLicense}</span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-black border border-stone-800 text-[11px] font-mono text-stone-300 overflow-x-auto max-h-48">
                <pre>{JSON.stringify(C2PA_SAMPLE_MANIFEST, null, 2)}</pre>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
