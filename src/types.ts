export interface FinancialYearData {
  year: number;
  label: string;
  seedCapEx: number; // £M
  operationalCost: number; // £M
  g20CoFunding: number; // £M (negative cost / inflow)
  odaGrantAllocation: number; // £M (negative cost / inflow)
  netPublicTreasuryCost: number; // £M
  aerospaceSpinoffs: number; // £M
  roboticMillingLicensing: number; // £M
  spatialTwinRevenue: number; // £M
  grossSpinoffRevenue: number; // £M
  avoidedLegalInsurance: number; // £M
  avoidedHighSecStorage: number; // £M
  netAnnualEconomicImpact: number; // £M
  highTechFteJobs: number;
}

export interface CostComparisonItem {
  costComponent: string;
  legacyPhysicalRetention: string;
  legacyAmountNum: number;
  replicateRepatriate: string;
  replicateAmountNum: number;
  notes: string;
}

export interface TrlHorizon {
  horizon: string;
  timeline: string;
  targetTrl: string;
  technicalFocusArea: string;
  primaryDeliverables: string[];
}

export interface C2paManifest {
  manifestVersion: string;
  title: string;
  claimGenerator: string;
  assertionTimestamp: string;
  hardwareSecurityModule: {
    deviceId: string;
    model: string;
    fipsCompliance: string;
    pkiCertFingerprint: string;
  };
  cryptographicSignature: {
    algorithm: string;
    signatureValue: string;
    sha256RootHash: string;
    timeStampingAuthority: string;
  };
  provenanceChain: Array<{
    step: string;
    actor: string;
    facility: string;
    hash: string;
    timestamp: string;
  }>;
  spatialAssertions: {
    meshResolution: string;
    pointCloudCount: number;
    colorDepth: string;
    spectroscopyData: string;
    openUsdVersion: string;
    gltfVersion: string;
    openAccessLicense: string;
  };
}

export interface ReferenceCitation {
  id: number;
  title: string;
  url: string;
  category: 'Statutory' | 'Metrology' | 'Manufacturing' | 'Diplomacy & Ethics';
}
