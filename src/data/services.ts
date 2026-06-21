import { ServiceCategory } from './types';

export const services: ServiceCategory[] = [
  {
    id: 1,
    title: 'Project Development & Management',
    icon: 'FolderKanban',
    description:
      'End-to-end support for projects from initial idea through structured execution — covering consultancy, conceptualisation, planning, and active lifecycle management.',
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
    description:
      'Full-spectrum technology services from strategic IT consultancy through software engineering, product delivery, and digitisation of business operations.',
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
    ],
  },
  {
    id: 4,
    title: 'Data Analysis',
    icon: 'BarChart3',
    description:
      'Rigorous data-driven services spanning research design, quantitative and qualitative analysis, modelling, and performance evaluation for evidence-based decision-making.',
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
];
