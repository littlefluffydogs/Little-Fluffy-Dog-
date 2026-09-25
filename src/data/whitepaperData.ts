import { FinancialYearData, CostComparisonItem, TrlHorizon, C2paManifest, ReferenceCitation } from '../types';

export const WHITEPAPER_META = {
  title: "Strategic Feasibility Study: Establishing a UK-Led \"Replicate & Repatriate\" National Capability Framework",
  subtitle: "Transitioning Physical Artifact Hoarding to Dynamic Technological Stewardship & High-Value Domestic Advanced Manufacturing",
  author: "Adam Cowie · Replicate & Repatriate Policy Working Group",
  petitioner: "Adam Cowie",
  date: "Spring 2026",
  domainUrl: "https://www.littlefluffydog.com/repatriate",
  tagline: "Return the Original. Keep the Twin. Build the Future.",
  petitionUrl: "https://petition.parliament.uk/petitions/782957/sponsors/new?token=kPx2FGXEu7VrfruHU8SM",
  petitionId: "782957",
  petitionTitle: "Mandate 3D metrology & robotic replication standards for UK museum restitution.",
  petitionAction: "Drive UK advanced manufacturing and sovereign R&D by mandating 3D digital twinning for museum restitution. Amend the British Museum Act 1963 to allow de-accessioning contingent on retaining sub-micron scans and 7-axis robotic replicas. Builds high-tech jobs while returning physical originals.",
  petitionBackground: "By amending the British Museum Act 1963, we can turn museum restitution into an industrial strategy for the UK. Rather than wasting millions on legal disputes, public funds will seed domestic R&D in 7-axis robotics, sub-micron 3D scanning, and secure digital twins. Museums keep material-identical 3D replicas for display, while physical originals return to origin states at zero cost to them. This creates thousands of high-tech manufacturing jobs and establishes UK tech leadership.",
  version: "1.0-Formal",
  targetLegislation: "Cultural Heritage Restitution and Advanced Manufacturing Bill",
  amendments: [
    "British Museum Act 1963 (Section 5A)",
    "National Heritage Act 1983 (Section 6A)"
  ]
};

export const FINANCIAL_MODEL_10_YEAR: FinancialYearData[] = [
  {
    year: 1,
    label: "Year 1",
    seedCapEx: 15.0,
    operationalCost: 2.0,
    g20CoFunding: 1.0,
    odaGrantAllocation: 2.0,
    netPublicTreasuryCost: 14.0,
    aerospaceSpinoffs: 0.5,
    roboticMillingLicensing: 0.2,
    spatialTwinRevenue: 0.1,
    grossSpinoffRevenue: 0.8,
    avoidedLegalInsurance: 1.5,
    avoidedHighSecStorage: 0.5,
    netAnnualEconomicImpact: -11.2,
    highTechFteJobs: 45
  },
  {
    year: 2,
    label: "Year 2",
    seedCapEx: 20.0,
    operationalCost: 5.0,
    g20CoFunding: 3.5,
    odaGrantAllocation: 4.0,
    netPublicTreasuryCost: 17.5,
    aerospaceSpinoffs: 3.0,
    roboticMillingLicensing: 1.5,
    spatialTwinRevenue: 0.8,
    grossSpinoffRevenue: 5.3,
    avoidedLegalInsurance: 3.0,
    avoidedHighSecStorage: 1.2,
    netAnnualEconomicImpact: -8.0,
    highTechFteJobs: 120
  },
  {
    year: 3,
    label: "Year 3",
    seedCapEx: 25.0,
    operationalCost: 8.0,
    g20CoFunding: 6.0,
    odaGrantAllocation: 6.0,
    netPublicTreasuryCost: 21.0,
    aerospaceSpinoffs: 8.5,
    roboticMillingLicensing: 4.0,
    spatialTwinRevenue: 2.5,
    grossSpinoffRevenue: 15.0,
    avoidedLegalInsurance: 5.0,
    avoidedHighSecStorage: 2.5,
    netAnnualEconomicImpact: 1.5,
    highTechFteJobs: 280
  },
  {
    year: 4,
    label: "Year 4",
    seedCapEx: 10.0,
    operationalCost: 12.0,
    g20CoFunding: 8.5,
    odaGrantAllocation: 8.0,
    netPublicTreasuryCost: 5.5,
    aerospaceSpinoffs: 18.0,
    roboticMillingLicensing: 10.0,
    spatialTwinRevenue: 6.0,
    grossSpinoffRevenue: 34.0,
    avoidedLegalInsurance: 8.0,
    avoidedHighSecStorage: 4.0,
    netAnnualEconomicImpact: 40.5,
    highTechFteJobs: 550
  },
  {
    year: 5,
    label: "Year 5",
    seedCapEx: 5.0,
    operationalCost: 15.0,
    g20CoFunding: 10.0,
    odaGrantAllocation: 8.0,
    netPublicTreasuryCost: 2.0,
    aerospaceSpinoffs: 35.0,
    roboticMillingLicensing: 22.0,
    spatialTwinRevenue: 14.0,
    grossSpinoffRevenue: 71.0,
    avoidedLegalInsurance: 12.0,
    avoidedHighSecStorage: 6.0,
    netAnnualEconomicImpact: 87.0,
    highTechFteJobs: 920
  },
  {
    year: 6,
    label: "Year 6",
    seedCapEx: 5.0,
    operationalCost: 15.0,
    g20CoFunding: 10.0,
    odaGrantAllocation: 8.0,
    netPublicTreasuryCost: 2.0,
    aerospaceSpinoffs: 50.0,
    roboticMillingLicensing: 35.0,
    spatialTwinRevenue: 25.0,
    grossSpinoffRevenue: 110.0,
    avoidedLegalInsurance: 15.0,
    avoidedHighSecStorage: 8.0,
    netAnnualEconomicImpact: 131.0,
    highTechFteJobs: 1400
  },
  {
    year: 7,
    label: "Year 7",
    seedCapEx: 5.0,
    operationalCost: 15.0,
    g20CoFunding: 10.0,
    odaGrantAllocation: 8.0,
    netPublicTreasuryCost: 2.0,
    aerospaceSpinoffs: 70.0,
    roboticMillingLicensing: 45.0,
    spatialTwinRevenue: 40.0,
    grossSpinoffRevenue: 155.0,
    avoidedLegalInsurance: 15.0,
    avoidedHighSecStorage: 10.0,
    netAnnualEconomicImpact: 178.0,
    highTechFteJobs: 1850
  },
  {
    year: 8,
    label: "Year 8",
    seedCapEx: 5.0,
    operationalCost: 15.0,
    g20CoFunding: 10.0,
    odaGrantAllocation: 8.0,
    netPublicTreasuryCost: 2.0,
    aerospaceSpinoffs: 90.0,
    roboticMillingLicensing: 60.0,
    spatialTwinRevenue: 55.0,
    grossSpinoffRevenue: 205.0,
    avoidedLegalInsurance: 15.0,
    avoidedHighSecStorage: 12.0,
    netAnnualEconomicImpact: 230.0,
    highTechFteJobs: 2300
  },
  {
    year: 10,
    label: "Year 10",
    seedCapEx: 5.0,
    operationalCost: 15.0,
    g20CoFunding: 10.0,
    odaGrantAllocation: 8.0,
    netPublicTreasuryCost: 2.0,
    aerospaceSpinoffs: 120.0,
    roboticMillingLicensing: 80.0,
    spatialTwinRevenue: 75.0,
    grossSpinoffRevenue: 275.0,
    avoidedLegalInsurance: 15.0,
    avoidedHighSecStorage: 15.0,
    netAnnualEconomicImpact: 303.0,
    highTechFteJobs: 3100
  }
];

export const COST_BENEFIT_30_YEAR: CostComparisonItem[] = [
  {
    costComponent: "Upfront Scanning & Synthesis CapEx",
    legacyPhysicalRetention: "£0",
    legacyAmountNum: 0,
    replicateRepatriate: "£850,000",
    replicateAmountNum: 850000,
    notes: "One-time operational expenditure for sub-micron laser, micro-CT, and 7-axis robotic milling."
  },
  {
    costComponent: "Climate Storage & Environmental Control",
    legacyPhysicalRetention: "£1,500,000",
    legacyAmountNum: 1500000,
    replicateRepatriate: "£150,000",
    replicateAmountNum: 150000,
    notes: "Reduced micro-climate stabilization requirements for synthetic stone display replica."
  },
  {
    costComponent: "High-Security Infrastructure & Anti-Theft",
    legacyPhysicalRetention: "£3,000,000",
    legacyAmountNum: 3000000,
    replicateRepatriate: "£300,000",
    replicateAmountNum: 300000,
    notes: "Minimal black-market heist incentive for material-identical certified replica."
  },
  {
    costComponent: "Legal Representation & Dispute Defense",
    legacyPhysicalRetention: "£4,500,000",
    legacyAmountNum: 4500000,
    replicateRepatriate: "£50,000",
    replicateAmountNum: 50000,
    notes: "Variable multi-jurisdictional defense replaced by single final treaty & title transfer."
  },
  {
    costComponent: "Indemnity & Commercial Insurance",
    legacyPhysicalRetention: "£6,000,000",
    legacyAmountNum: 6000000,
    replicateRepatriate: "£150,000",
    replicateAmountNum: 150000,
    notes: "Standard commercial exhibition policy replaces multi-million-pound sovereign indemnity."
  },
  {
    costComponent: "Diplomatic & Trade Friction Penalties",
    legacyPhysicalRetention: "Unquantifiable foreign policy penalty",
    legacyAmountNum: 0,
    replicateRepatriate: "Sustained soft-power dividend",
    replicateAmountNum: 0,
    notes: "Unlocks strategic bilateral treaties in Mediterranean, West Africa, and South Asia."
  }
];

export const TRL_ROADMAP_DATA: TrlHorizon[] = [
  {
    horizon: "Horizon 1",
    timeline: "Year 1",
    targetTrl: "TRL 4 → TRL 5",
    technicalFocusArea: "Multi-Sensor Fusion & Lab-Scale Milling",
    primaryDeliverables: [
      "Integration of optical sub-micron laser scanning with pXRF elemental mapping.",
      "Pilot 7-axis robotic carving of medium-scale stone assets achieving sub-millimeter tolerances.",
      "Software pipeline for manual C2PA cryptographic manifest signing on 3D mesh files."
    ]
  },
  {
    horizon: "Horizon 2",
    timeline: "Year 3",
    targetTrl: "TRL 6 → TRL 7",
    technicalFocusArea: "Automated Toolpathing & Metal Additive Integration",
    primaryDeliverables: [
      "Automated registration of micro-CT, HSI, and photogrammetric datasets into unified OpenUSD digital twins.",
      "Metal binder jetting of complex foundry molds for bronze investment casting matching trace alloys.",
      "On-scanner HSM hardware signing generating real-time, tamper-proof C2PA credentials."
    ]
  },
  {
    horizon: "Horizon 3",
    timeline: "Year 5",
    targetTrl: "TRL 8 → TRL 9",
    technicalFocusArea: "Industrialized Closed-Loop Execution",
    primaryDeliverables: [
      "Fully automated, closed-loop 7-axis robotic milling with real-time laser interferometric toolpath correction.",
      "Automated micro-dispensing pigment cells and laser-assisted patina aging.",
      "Enterprise National Spatial Registry delivering high-throughput streaming of verified digital twins."
    ]
  }
];

export const C2PA_SAMPLE_MANIFEST: C2paManifest = {
  manifestVersion: "C2PA-v1.4-Spatial",
  title: "Digital Twin: Selene Horse Head (Parthenon East Pediment)",
  claimGenerator: "UK-Catapult-AMRC-Metrology-Suite/2026.3",
  assertionTimestamp: "2026-03-14T09:41:22.842Z",
  hardwareSecurityModule: {
    deviceId: "HSM-AMRC-UK-METRO-00918",
    model: "Thales Luna PCIe HSM Gen4",
    fipsCompliance: "FIPS 140-3 Level 4 Certified",
    pkiCertFingerprint: "SHA256:7B:4E:99:A1:C2:5F:88:D1:43:09:BE:8A:F7:12:33:90:5E:21:44:AC"
  },
  cryptographicSignature: {
    algorithm: "Ed25519-SHA512",
    signatureValue: "MEYCIQC+5nJ87bJ92h...781xXk923LqPw==",
    sha256RootHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    timeStampingAuthority: "National Physical Laboratory (NPL) UK / RFC 3161 Qualified"
  },
  provenanceChain: [
    {
      step: "01. Raw Optical Sensor Capture (450nm Blue Light)",
      actor: "AMRC High-Value Manufacturing Catapult",
      facility: "Advanced Manufacturing Park, Rotherham, UK",
      hash: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad",
      timestamp: "2026-03-14T08:15:00Z"
    },
    {
      step: "02. Volumetric Micro-CT Internal Structural Registration",
      actor: "Warwick Manufacturing Group (WMG)",
      facility: "University of Warwick Heritage Metrology Center",
      hash: "88d4266fd4e6338d13b845fcf289579d209c897823b9217da3e161936f031589",
      timestamp: "2026-03-14T11:30:00Z"
    },
    {
      step: "03. Hyperspectral & MA-XRF Elemental Mapping",
      actor: "Science and Technology Facilities Council (STFC)",
      facility: "Harwell Science and Innovation Campus",
      hash: "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb",
      timestamp: "2026-03-14T14:45:00Z"
    },
    {
      step: "04. 7-Axis CNC Closed-Loop Toolpath Synthesis Verification",
      actor: "Robotor Automated Carving Cell",
      facility: "High Value Manufacturing Catapult Testbed",
      hash: "4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a",
      timestamp: "2026-03-15T09:00:00Z"
    }
  ],
  spatialAssertions: {
    meshResolution: "< 8.5 microns (Point spacing: 0.0085mm)",
    pointCloudCount: 148200000,
    colorDepth: "32-bit floating point HDR Linear sRGB",
    spectroscopyData: "FORS (350-2500nm) + MA-XRF Cu-Sn-Pb ratio verification",
    openUsdVersion: "OpenUSD 24.03 compliant",
    gltfVersion: "glTF 2.0 with KHR_materials_sheen & KHR_materials_transmission",
    openAccessLicense: "CC0 1.0 Universal (Public Domain Dedication)"
  }
};

export const REFERENCES_LIST: ReferenceCitation[] = [
  { id: 1, title: "Elgin Marbles: UK government assessment of loaning the sculptures", url: "https://lordslibrary.parliament.uk/elgin-marbles-uk-government-assessment-of-loaning-the-sculptures-to-greece/", category: "Statutory" },
  { id: 2, title: "Elgin Marbles - Wikipedia", url: "https://en.wikipedia.org/wiki/Elgin_Marbles", category: "Statutory" },
  { id: 3, title: "The Stupa Amaravati of India: Where British Common Law Controls", url: "https://lawecommons.luc.edu/cgi/viewcontent.cgi?article=1268&context=lucilr", category: "Statutory" },
  { id: 4, title: "Museums and deaccessioning during the Covid-19 pandemic", url: "https://www.artatlaw.com/museums-and-deaccessioning-during-the-covid-19-pandemic/", category: "Statutory" },
  { id: 5, title: "Looted art and restitution: a changing cultural climate | Mishcon News", url: "https://www.mishcon.com/news/looted-art-and-restitution-a-changing-cultural-climate", category: "Diplomacy & Ethics" },
  { id: 6, title: "Whose Art is it Anyway? Guidelines for Returning Cultural Property", url: "https://digitalcommons.law.buffalo.edu/cgi/viewcontent.cgi?article=5077&context=buffalolawreview", category: "Diplomacy & Ethics" },
  { id: 7, title: "Elgin Marbles - The Institute for Digital Archaeology", url: "http://digitalarchaeology.org.uk/elginmarbles", category: "Metrology" },
  { id: 8, title: "HVM Catapult: Bridging Innovation to Market", url: "https://www.scribd.com/document/860576015/HVM-Catapult-brochure", category: "Manufacturing" },
  { id: 9, title: "Content Credentials - C2PA Specification", url: "https://en.wikipedia.org/wiki/Content_Credentials", category: "Metrology" },
  { id: 10, title: "Twenty Years of Advances in Material Identification of Polychrome", url: "https://www.mdpi.com/2079-6412/16/2/156", category: "Metrology" },
  { id: 11, title: "Dealing with UK Museum Collections: Law, Ethics and the Public", url: "https://www.cambridge.org/core/journals/international-journal-of-cultural-property/article/dealing-with-uk-museum-collections-law-ethics-and-the-publicprivate-divide/9277BC2F5C1F1C18489118F29552A101", category: "Statutory" },
  { id: 12, title: "Public Domain: Duration | CopyrightUser", url: "https://www.copyrightuser.org/trending/duration/", category: "Statutory" },
  { id: 13, title: "A world-class centre for advanced manufacturing | AMRC", url: "https://www.amrc.co.uk/files/document/296/1557395558_AMRCOverviewDec18.pdf", category: "Manufacturing" },
  { id: 14, title: "Centre for Polymers and Composites (CPC) | WMG", url: "https://warwick.ac.uk/fac/sci/wmg/research/research-areas/centre-for-polymers-and-composites/", category: "Manufacturing" },
  { id: 15, title: "Three-Dimensional Surveying with Optical Sensors in Heritage", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13120460/", category: "Metrology" },
  { id: 16, title: "Into the Future - In his own image", url: "https://inhisownimage.magd.ox.ac.uk/into-the-future/", category: "Diplomacy & Ethics" },
  { id: 17, title: "Binder-Jet Metal Printing Encyclopedia", url: "https://skyjems.ca/pages/encyclopedia-binder-jet-metal-printing", category: "Manufacturing" },
  { id: 18, title: "X-ray fluorescence analysis of bronze sculptures", url: "https://www.researchgate.net/publication/377548857_X-ray_fluorescence_analysis_of_bronze_sculptures_by_Giuseppe_Renda", category: "Metrology" },
  { id: 19, title: "Applications of Imaging Spectroscopy to Cultural Heritage", url: "https://www.research.unipd.it/retrieve/e14fb26f-dd37-3de1-e053-1705fe0ac030/ElenaPazRebolloSanMiguel_tesi.pdf", category: "Metrology" },
  { id: 20, title: "Laser-Induced Breakdown Spectroscopy for In Situ Analysis", url: "https://www.at-spectrosc.com/as/article/pdf/20260012", category: "Metrology" },
  { id: 21, title: "Imaging Cultural Heritage at Different Scales: The Micro", url: "https://sfera.unife.it/retrieve/bf62777c-487b-4fce-9ff5-3b551c896f1b/remotesensing-15-02586-with-cover.pdf", category: "Metrology" },
  { id: 22, title: "What Is Binder Jetting 3D Printing and Where Is It Used?", url: "https://jlc3dp.com/blog/binder-jetting-basics", category: "Manufacturing" },
  { id: 23, title: "Greece's Own Mount Rushmore—Made with Parthenon Sculptures", url: "https://www.tovima.com/culture/greeces-own-mount-rushmore-made-with-parthenon-sculptures/", category: "Diplomacy & Ethics" },
  { id: 24, title: "A Pentelic Marble Copy of the Selene Horse - Freud Museum", url: "https://www.freud.org.uk/2022/11/01/a-pentelic-marble-copy-of-the-selene-horse/", category: "Manufacturing" },
  { id: 25, title: "Introduction to the Binder Jetting Process - Desktop Metal", url: "https://www.desktopmetal.com/resources/intro-binder-jet-3dprinting-process", category: "Manufacturing" },
  { id: 26, title: "Real Photo vs AI-Generated Art: A New Standard (C2PA) Uses PKI", url: "https://www.thesslstore.com/blog/real-photo-vs-ai-generated-art-a-new-standard-c2pa-uses-pki-to-show-an-images-history/", category: "Metrology" },
  { id: 27, title: "Sony Camera Authenticity Solution", url: "https://authenticity.sony.net/camera/en-us/", category: "Metrology" },
  { id: 28, title: "Google Pixel C2PA Hardware Support", url: "https://android.gadgethacks.com/news/google-pixel-10-adds-c2pa-support-to-fight-ai-fakes/", category: "Metrology" },
  { id: 29, title: "ODA Eligibility and Conditions | OECD", url: "https://www.oecd.org/en/topics/sub-issues/oda-eligibility-and-conditions.html", category: "Diplomacy & Ethics" },
  { id: 30, title: "Official Development Assistance (ODA) - OECD Guidelines", url: "https://www.oecd.org/en/topics/policy-issues/official-development-assistance-oda.html", category: "Diplomacy & Ethics" },
  { id: 31, title: "British Museum Act 1963 Section 5 - Legislation.gov.uk", url: "https://www.legislation.gov.uk/ukpga/1963/24/section/5", category: "Statutory" },
  { id: 32, title: "Colonial-Looted Cultural Objects in England", url: "https://www.researchgate.net/publication/370269584_Colonial-Looted_Cultural_Objects_in_England", category: "Statutory" },
  { id: 33, title: "Science Museum Group Collection Development Policy", url: "https://www.sciencemuseumgroup.org.uk/sites/default/files/2026-05/SMGCollectionDevelopmentPolicy_MAR26.pdf", category: "Statutory" },
  { id: 34, title: "Archives Development Policy - Royal Armouries", url: "https://royalarmouries.org/sites/default/files/2026-09/Archives_Development_Policy.pdf", category: "Statutory" },
  { id: 35, title: "Originality in UK Copyright Law: The Old 'Skill and Labour' Doctrine", url: "https://www.researchgate.net/publication/257810543_Originality_in_UK_Copyright_Law_The_Old_Skill_and_Labour_Doctrine_Under_Pressure", category: "Statutory" },
  { id: 36, title: "Digitising Cultural Heritage - OAPEN Library", url: "https://library.oapen.org/bitstream/handle/20.500.12657/117361/9781509959303.pdf?sequence=1&isAllowed=y", category: "Diplomacy & Ethics" },
  { id: 37, title: "Open Licensing Models in the Cultural Heritage Sector", url: "https://creativecommons.org/wp-content/uploads/2025/06/Open-Licensing-Models-Report_CREATe_CC.pdf", category: "Statutory" },
  { id: 38, title: "Human body parts for sale, on display and in collections - House of Lords Library", url: "https://lordslibrary.parliament.uk/human-body-parts-for-sale-on-display-and-in-collections-law-policy-and-campaigns-for-repatriation/", category: "Statutory" },
  { id: 39, title: "Reconstruction and Repatriation of Looted Cultural Heritage", url: "https://digitalcommons.pepperdine.edu/cgi/viewcontent.cgi?article=1234&context=ppr", category: "Diplomacy & Ethics" },
  { id: 40, title: "Perfect replica of Parthenon Marbles supports 'sensible deal' for return", url: "https://www.thenationalnews.com/world/uk-news/2022/11/01/perfect-replica-of-parthenon-marbles-supports-sensible-deal-for-their-return-to-greece/", category: "Manufacturing" }
];

export const DRAFT_BILL_FULL_TEXT = `A BILL TO
Grant boards of trustees of national museums and heritage institutions explicit authority to de-accession and transfer legal title of contested cultural artifacts contingent upon the creation of accredited physical replicas and cryptographic digital twins; to amend the British Museum Act 1963 and the National Heritage Act 1983; and for connected purposes.

Be it enacted by the King's most Excellent Majesty, by and with the advice and consent of the Lords Spiritual and Temporal, and Commons, in this present Parliament assembled, and by the authority of the same, as follows:—

1. Statutory Amendment 1: Amendment to the British Museum Act 1963
Insertion of Section 5A (De-accessioning under the National Capability Framework):
(1) Notwithstanding section 3(4) and section 5(1) of this Act, the Trustees of the British Museum may divest, transfer, or permanently de-accession any object vested in them and contained within the collections of the Museum if the conditions set out in subsection (2) are satisfied.
(2) The conditions referred to in subsection (1) are that—
    (a) A formal request for the return of the object has been submitted by a recognized sovereign state or cultural representative body;
    (b) The Trustees are satisfied that the object has undergone full sub-micron 3D metrological capture, volumetric micro-CT analysis, and non-destructive elemental characterization in accordance with National Capability Standards;
    (c) A verified, C2PA-compliant cryptographic digital twin asset has been registered within the National Heritage Spatial Registry; and
    (d) A material-identical physical replica has been fabricated and certified by an accredited manufacturing body as suitable for public display in place of the original object.
(3) Upon completion of the conditions in subsection (2), legal title to the physical original shall transfer unconditionally to the designated recipient authority. The Board of Trustees shall retain a non-exclusive, perpetual right to utilize the generated digital twin asset for public display, education, and academic research.

2. Statutory Amendment 2: Amendment to the National Heritage Act 1983
Insertion of Section 6A (Powers of Trustees of V&A, Science Museum, and Royal Armouries):
(1) The Board of Trustees of the Victoria and Albert Museum, the Science Museum Group, and the Royal Armouries shall have power to dispose of any object vested in them if such disposal is executed pursuant to an accredited Replicate & Repatriate Agreement.
(2) An Agreement under subsection (1) must mandate that—
    (a) The full operational cost of scanning, digital twin generation, robotic fabrication, and transport is absorbed by the institutional capability framework or allocated grant funding streams; and
    (b) The physical original is transferred free of all custody fees, storage indemnities, or purchase demands.

3. Explanatory Notes and Fiduciary Protections
The proposed statutory amendments resolve the legal impasses that currently restrict national museum trustees. By explicitly defining sub-micron scanning and high-fidelity physical replication as statutory prerequisites for disposal, the legislation ensures that de-accessioning cannot occur arbitrarily or result in the loss of educational value.
Furthermore, the Act clarifies that transferring physical originals under an accredited capability agreement—while securing material-identical display replicas and open-access digital twins—fully satisfies the statutory duty of trustees to care for, preserve, and exhibit public collections. Finally, the statutory text explicitly incorporates the legal standards established in THJ Systems v Sheridan [2023] EWCA Civ 1354, ensuring raw scanning data remains unencumbered in the public domain while securing commercial derivative rights.

4. Short Title, Commencement, and Extent
(1) This Act may be cited as the Cultural Heritage Restitution and Advanced Manufacturing Act 2026.
(2) This Act comes into force on the day on which it is passed.
(3) This Act extends to England and Wales, Scotland, and Northern Ireland.`;
