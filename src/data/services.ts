import { ServiceCategory } from './types';

export const services: ServiceCategory[] = [
  {
    id: 1,
    title: 'Project Development & Management',
    icon: 'FolderKanban',
    summary:
      'End-to-end consultancy, planning and lifecycle management from concept to delivery.',
    description:
      'End-to-end support for projects from initial idea through structured execution, covering consultancy, conceptualisation, planning and active lifecycle management.',
    services: [
      {
        name: 'Consultancy',
        items: [
          'Idea definition and scoping',
          'Research and environmental analysis',
          'Strategic recommendations and advisory',
        ],
      },
      {
        name: 'Project Conceptualisation',
        items: [
          'Concept structuring and framing',
          'Financial mechanisms and funding model design',
        ],
      },
      {
        name: 'Project Planning',
        items: [
          'Workplan development and milestone scheduling',
          'Budget planning and resource allocation',
          'Workflow design and process mapping',
        ],
      },
      {
        name: 'Project Management',
        items: [
          'Full lifecycle development and oversight',
          'Documentation and reporting',
          'Execution monitoring and quality assurance',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Business Development & Management',
    icon: 'TrendingUp',
    summary:
      'Market analysis, business model design and investment-ready documentation.',
    description:
      'Comprehensive business intelligence and advisory services that take organisations from market insight to structured, investment-ready business operations.',
    services: [
      {
        name: 'Business Analysis',
        items: [
          'Market research and competitive landscape analysis',
          'Surveys and stakeholder insight gathering',
          'Feasibility studies and viability assessments',
        ],
      },
      {
        name: 'Business Development',
        items: [
          'Business model design and validation',
          'Financial projections and revenue modelling',
          'Business proposals and pitch document preparation',
        ],
      },
      {
        name: 'Business Management',
        items: [
          'Business establishment and registration advisory',
          'Process design and standard operating procedures',
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'IT Services',
    icon: 'Monitor',
    summary:
      'Technology, strategy, software engineering, cyber security and networks.',
    description:
      'Full-spectrum technology services from strategic IT consultancy through software engineering, product delivery, cyber security, networks and digitisation of business operations.',
    services: [
      {
        name: 'Consultancy',
        items: [
          'Technology strategy and stack advisory',
          'IT infrastructure assessment and recommendations',
        ],
      },
      {
        name: 'Software Development',
        items: [
          'Software Requirements Specification (SRS) authoring',
          'Full Software Development Lifecycle (SDLC) execution',
          'Prototyping and proof-of-concept development',
          'Full-stack application development and delivery',
        ],
      },
      {
        name: 'Product Management',
        items: [
          'Product Requirements Document (PRD) development',
          'UI/UX design and user experience planning',
          'Product deployment and go-live support',
        ],
      },
      {
        name: 'IT Solutions',
        items: [
          'Business process digitisation and automation',
          'Systems integration and workflow tooling',
        ],
      },
      {
        name: 'Data Protection & Cyber Security',
        items: [
          'Data protection compliance: GDPR and NDPR / NDPA (Nigeria Data Protection Act 2023)',
          'Cyber Essentials (CE) and Cyber Essentials Plus (CE+) implementation and assessment',
          'Compliance and assessment against other certifying bodies in Nigeria and West Africa',
          'Penetration testing',
          'IT asset management (ITAM): hardware and software inventory, licence compliance, lifecycle tracking and secure disposal',
        ],
      },
      {
        name: 'Networks',
        items: [
          'Network design and architecture',
          'Network installation and configuration',
          'Network security and monitoring',
          'Network support and maintenance',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Data Analysis',
    icon: 'BarChart3',
    summary:
      'Statistical modelling, data visualisation and evidence-based decision frameworks.',
    description:
      'Extensive data-driven services spanning research design, quantitative and qualitative analysis, modelling, and performance evaluation for evidence-based decision-making.',
    services: [
      {
        name: 'Consultancy',
        items: [
          'Research design and methodology advisory',
          'Data strategy and analytics framework development',
        ],
      },
      {
        name: 'Data Analysis',
        items: [
          'Qualitative and quantitative data analysis',
          'Statistical modelling and predictive analytics',
          'Data visualisation and dashboard development',
          'Insight synthesis and findings reporting',
        ],
      },
      {
        name: 'Monitoring, Evaluation & Learning',
        items: [
          'Quality assurance and data integrity review',
          'Performance analysis and KPI tracking',
          'Evaluation frameworks and impact assessment',
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Finance',
    icon: 'Landmark',
    summary:
      'Financial advisory, accounting, asset management and grant sourcing.',
    description:
      'Financial advisory and management services that give organisations the controls, reporting and funding structure needed to operate with confidence.',
    services: [
      {
        name: 'Financial Advisory',
        items: [
          'Financial modelling and forecasting',
          'Business valuation and feasibility assessment',
          'Budget development and variance reporting',
        ],
      },
      {
        name: 'Accounting & Reporting',
        items: [
          'Bookkeeping and management accounts',
          'Financial controls and compliance support',
          'Management reporting and analysis',
        ],
      },
      {
        name: 'Asset Management',
        items: [
          'Asset registers and lifecycle tracking',
          'Cost-benefit analysis',
          'Procurement and disposal advisory',
        ],
      },
      {
        name: 'Grant Sourcing',
        items: [
          'Funding landscape research',
          'Proposal and grant application support',
          'Donor reporting frameworks',
        ],
      },
    ],
  },
];
