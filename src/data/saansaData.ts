import serviceMachineryImg from '../assets/images/service_machinery_supply_1795057427148.jpg';
import serviceMepImg from '../assets/images/service_mep_cad_1795057427266.jpg';
import serviceSupervisionImg from '../assets/images/service_supervision_site_1795057426955.jpg';
import serviceValuationImg from '../assets/images/service_valuation_survey_1795057427133.jpg';

export type ServiceCategory = 'all' | 'valuation' | 'design' | 'supervision';

export interface ServiceItem {
  id: string;
  number: string;
  category: Exclude<ServiceCategory, 'all'>;
  title: string;
  shortLabel: string;
  description: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
  featuredSpan?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
}

export interface WorkCase {
  id: string;
  sector: string;
  category: 'valuation' | 'procurement' | 'insurance' | 'mep';
  title: string;
  outcome: string;
  description: string;
  image: string;
  imageAlt: string;
  location: string;
}

export interface ClientSectorStat {
  count: string;
  label: string;
  context: string;
}

export const COMPANY_INFO = {
  brandShort: 'Saansa Engineering',
  legalName: 'Saansa Engineering & Tech Solution Pvt. Ltd.',
  locationShort: 'Pokhara-08, Kaski · Gandaki Province, Nepal',
  address: 'Pokhara-08, Kaski, Gandaki Province, Nepal',
  landmark: 'Near Pokhara Engineering College, Phirke',
  phone: '+977-9846285132',
  phoneHref: 'tel:+9779846285132',
  email: 'saansaengineering@gmail.com',
  hours: '10:00 – 17:00',
  hoursNote: 'Sunday to Friday · Saturday closed',
  managingDirector: 'Saroj Chalise',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Pokhara+Engineering+College,+Phirke,+Pokhara,+Nepal&z=16&output=embed',
  mapDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Pokhara+Engineering+College+Phirke+Pokhara+Nepal',
};

export const HERO_METRICS = [
  { value: '3+', label: 'Years of Practice' },
  { value: '30+', label: 'Projects Completed' },
  { value: '5', label: 'In-House Engineers' },
  { value: '20+', label: 'Institutional Clients' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'property-valuation',
    number: '01',
    category: 'valuation',
    title: 'Property Valuation',
    shortLabel: 'Property Valuation',
    description:
      'Independent physical inspection and technical valuation of land parcels, commercial buildings, vehicles, and plant assets, compiled into audit-ready banking and collateral reports.',
    deliverables: [
      'Building structural details',
      'Land area, zoning & access',
      'Vehicles & machinery assets',
      'Bank-compliant valuation report',
    ],
    image: serviceValuationImg,
    imageAlt:
      'Valuation engineer in a safety vest holding rolled blueprints and a tablet while inspecting a commercial building exterior',
    featuredSpan: true,
  },
  {
    id: 'engineering-design-procurement',
    number: '02',
    category: 'design',
    title: 'Engineering Design & Procurement Support',
    shortLabel: 'Design & Procurement Support',
    description:
      'Detailed engineering drawings, itemized bills of quantities (BoQ), cost estimation, and bid documentation prepared in compliance with prevailing public procurement laws.',
    deliverables: [
      'Cost estimation & BoQ',
      'Detail engineering & drawings',
      'Bid document preparation',
      'Statutory procurement support',
    ],
    image: serviceMepImg,
    imageAlt:
      'Engineering workstation showing CAD schematics, floor plans, and technical blueprint rolls',
  },
  {
    id: 'insurance-loss-assessment',
    number: '03',
    category: 'valuation',
    title: 'Loss Assessment for Insurance Survey',
    shortLabel: 'Insurance Loss Assessment',
    description:
      'Rapid on-site damage verification, photographic evidence logging, itemized repair BoQ costing, and impartial surveyor reports to support non-life insurance claim settlements.',
    deliverables: [
      'Site inspection & photography',
      'Damage & repair BoQ',
      'Root-cause site analysis',
      'Claim surveyor report',
    ],
    image: serviceValuationImg,
    imageAlt:
      'Field surveyor conducting on-site engineering inspection with technical drawings and digital checklist',
  },
  {
    id: 'construction-supervision',
    number: '04',
    category: 'supervision',
    title: 'Construction & Installation Supervision',
    shortLabel: 'Construction Supervision',
    description:
      'Continuous on-site quality assurance, verifying civil works and electro-mechanical installations against approved drawings from ground-breaking through commissioning and final billing.',
    deliverables: [
      'Construction QA supervision',
      'Equipment installation checks',
      'Drawing & specification audits',
      'Measurement & final billing',
    ],
    image: serviceSupervisionImg,
    imageAlt:
      'Two engineers in hard hats reviewing structural installation blueprints inside a concrete and steel facility',
  },
  {
    id: 'mep-architectural-hvac',
    number: '05',
    category: 'design',
    title: 'MEP, Architectural & HVAC Design',
    shortLabel: 'MEP, Architectural & HVAC Design',
    description:
      'Coordinated building engineering spanning spatial architectural layouts and integrated mechanical, electrical, plumbing, fire-safety, and HVAC system specifications.',
    deliverables: [
      'Architectural space planning',
      'Mechanical & electrical layouts',
      'Plumbing & fire protection',
      'HVAC load & ducting design',
    ],
    image: serviceMepImg,
    imageAlt:
      'CAD monitor displaying coordinated MEP ducting and architectural building floor plans',
    featuredSpan: true,
  },
];

export const MACHINERY_DIVISION = {
  number: '06',
  title: 'Machinery, Equipment & Engineering Supply',
  shortLabel: 'Machinery & Equipment Supply',
  description:
    'End-to-end sourcing, supply, and commissioning of certified industrial machinery, engineering hardware, and fabricated steel assemblies — backed by long-term servicing and overhaul teams.',
  image: serviceMachineryImg,
  imageAlt:
    'Modern industrial equipment and CNC machining hall with overhead gantry crane and precision piping assemblies',
  capabilities: [
    'Supply & turn-key installation',
    'Preventive repair & maintenance',
    'Technical design modification',
    'Custom metal fabrication works',
    'Heavy equipment overhaul',
    'Genuine spare parts supply',
  ],
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation',
    summary:
      'We assess your technical brief, site conditions, regulatory constraints, and capital budget.',
  },
  {
    number: '02',
    title: 'Design & Planning',
    summary:
      'Feasibility analysis, itemized BoQ cost estimation, and coordinated engineering drawings.',
  },
  {
    number: '03',
    title: 'Execution',
    summary:
      'Compliant procurement, certified supply, custom fabrication, and supervised on-site installation.',
  },
  {
    number: '04',
    title: 'Handover & Support',
    summary:
      'Verification testing, final measurement billing, commissioning, and ongoing maintenance.',
  },
];

export const MAJOR_WORKS: WorkCase[] = [
  {
    id: 'work-valuation',
    sector: 'Banks & Cooperatives',
    category: 'valuation',
    title: 'Property & Collateral Valuation Across Gandaki & Beyond',
    outcome: '5+ Commercial Banks · 10+ Cooperatives Served',
    description:
      'Delivered technical site inspections, boundary verifications, and compliant collateral valuation reports for commercial lending portfolios and cooperative credit committees.',
    image: serviceValuationImg,
    imageAlt:
      'Valuation engineer inspecting a commercial property perimeter with field drawings',
    location: 'Pokhara & Regional Districts',
  },
  {
    id: 'work-procurement',
    sector: 'Governmental Organizations',
    category: 'procurement',
    title: 'Technical Specification & Public Procurement Support',
    outcome: '15+ Governmental Organizations Supported',
    description:
      'Authored technical specifications, cost estimates, bills of quantities, and bid evaluation support aligned with prevailing public procurement regulations.',
    image: serviceSupervisionImg,
    imageAlt:
      'Engineers reviewing technical specification drawings and bills of quantities on site',
    location: 'Gandaki Province, Nepal',
  },
  {
    id: 'work-insurance',
    sector: 'Non-Life Insurance',
    category: 'insurance',
    title: 'Independent Insurance Survey & Loss Assessment',
    outcome: '5+ Non-Life Insurance Companies',
    description:
      'Executed timely field damage inspections, repair BoQ breakdowns, and impartial claim assessment reports for vehicle, industrial, and property policies.',
    image: serviceMachineryImg,
    imageAlt:
      'Industrial plant and machinery hall inspected for asset condition and technical assessment',
    location: 'Nepal Nationwide',
  },
  {
    id: 'work-hotel-mep',
    sector: 'Hospitality Infrastructure',
    category: 'mep',
    title: 'Integrated MEP & HVAC Engineering for Hotel Project',
    outcome: 'Full Mechanical, Electrical & Plumbing Scope',
    description:
      'Engineered coordinated water supply, drainage, electrical distribution, and climate-control HVAC schematics tailored for multi-storey hospitality operations.',
    image: serviceMepImg,
    imageAlt:
      'Detailed CAD floor plan showing integrated MEP and HVAC engineering design for a hotel',
    location: 'Pokhara, Nepal',
  },
];

export const CLIENT_SECTORS: ClientSectorStat[] = [
  {
    count: '10+',
    label: 'Cooperatives',
    context: 'Property & collateral valuation',
  },
  {
    count: '5+',
    label: 'Commercial Banks',
    context: 'Asset & lending technical audits',
  },
  {
    count: '15+',
    label: 'Governmental Organizations',
    context: 'Specifications, BoQ & procurement',
  },
  {
    count: '5+',
    label: 'Non-Life Insurers',
    context: 'Damage survey & loss assessment',
  },
];

export const INQUIRY_OPTIONS = [
  'Property Valuation',
  'Design & Procurement Support',
  'Insurance Loss Assessment',
  'Construction Supervision',
  'MEP, Architectural & HVAC Design',
  'Machinery & Equipment Supply',
  'Coffee Meeting at Pokhara Office',
] as const;
