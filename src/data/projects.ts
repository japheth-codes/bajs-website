import { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    name: 'Shop Easy',
    slug: 'shop-easy',
    status: 'MVP Development',
    statusColor: 'emerald',
    domain: ['Fintech', 'E-Commerce'],
    shortDescription:
      'A digital commerce platform bridging informal market petty traders to customers, enabling ordering of daily essentials with neighbourhood delivery agents.',
    longDescription:
      'Shop Easy addresses the disconnect between Nigeria\'s vast informal retail sector and modern digital commerce. By onboarding petty traders into a structured digital marketplace, the platform allows everyday consumers to order daily essentials — groceries, household items, and provisions — from familiar local vendors, with last-mile delivery handled by vetted neighbourhood agents. The solution reduces friction for traders who lack formal e-commerce infrastructure while giving customers speed, affordability, and trust.',
    highlights: [
      'Hyperlocal marketplace connecting informal traders with community buyers',
      'Neighbourhood delivery agent network for same-day fulfilment',
      'Mobile-first onboarding for traders with low digital literacy',
      'Integrated digital wallet and payment collection for traders',
      'Order tracking and customer communication built into the flow',
      'Currently in MVP development with pilot trader cohort',
    ],
  },
  {
    id: 2,
    name: 'HMS — Hospital Management System',
    slug: 'hms',
    status: 'MVP Development',
    statusColor: 'emerald',
    domain: ['Healthcare', 'Operations'],
    shortDescription:
      'An integrated hospital platform for remote consultations, appointment scheduling, prescription management, and operational workflow automation.',
    longDescription:
      'The Hospital Management System (HMS) is a comprehensive digital platform designed to modernise healthcare delivery for Nigerian hospitals and clinics. It consolidates patient management, remote telemedicine consultations, appointment scheduling, prescription generation, and internal workflow automation into a single coherent system. By reducing administrative burden on clinical staff and improving patient data accessibility, HMS enables facilities to scale their patient throughput while improving care quality.',
    highlights: [
      'Telemedicine module supporting remote patient consultations',
      'Automated appointment booking and patient notification system',
      'Digital prescription management with pharmacy integration hooks',
      'Patient records management with role-based access control',
      'Operational workflow automation for admissions, billing, and discharge',
      'Currently in MVP development phase targeting tier-2 hospitals',
    ],
  },
  {
    id: 3,
    name: 'ARS — Automated Receptionist System',
    slug: 'ars',
    status: 'Conceptualization & Design',
    statusColor: 'blue',
    domain: ['Automation', 'Customer Experience'],
    shortDescription:
      'A workflow automation solution for customer interaction, registration, service guidance, and activity logging, derived from HMS.',
    longDescription:
      'The Automated Receptionist System (ARS) is a standalone product derived from the reception and front-desk workflow modules developed within HMS. It provides organisations with an intelligent, configurable front-desk automation layer that handles visitor check-in, customer registration, service routing, and activity logging without requiring full-time receptionist coverage. ARS is designed to be adaptable across sectors — clinics, corporate offices, government agencies, and event venues — making routine administrative interactions efficient and auditable.',
    highlights: [
      'Self-service customer check-in and registration kiosk interface',
      'Intelligent service routing based on customer query and department availability',
      'Real-time activity logging and daily report generation',
      'Configurable workflows to match different organisational contexts',
      'Derived from proven HMS front-desk modules for faster time-to-market',
      'Currently in conceptualisation and system design phase',
    ],
  },
  {
    id: 4,
    name: 'FXGo',
    slug: 'fxgo',
    status: 'Research & Conceptualization',
    statusColor: 'amber',
    domain: ['Fintech', 'FX'],
    shortDescription:
      'A foreign exchange platform simplifying naira-to-foreign-currency exchange with reduced barriers and real-time transaction support.',
    longDescription:
      'FXGo is a fintech platform targeting the significant friction experienced by Nigerians accessing foreign currency for personal, business, and educational purposes. The platform aims to aggregate licensed FX sources, surface competitive rates transparently, and execute naira-to-foreign-currency conversions with minimal bureaucratic overhead. Real-time transaction support and a streamlined onboarding journey are core design principles, making FXGo accessible to SME owners, students, and frequent travellers alike.',
    highlights: [
      'Aggregated FX rate comparison across licensed bureau de change sources',
      'Naira-to-foreign-currency conversion with real-time rate locking',
      'Streamlined KYC and compliance onboarding for retail users',
      'SME and business account tier with higher transaction limits',
      'Transaction history, rate alerts, and currency trend insights',
      'Currently in research and market feasibility phase',
    ],
  },
  {
    id: 5,
    name: 'LMS — Learning Management System',
    slug: 'lms',
    status: 'Conceptualization & Design',
    statusColor: 'blue',
    domain: ['EdTech', 'AI'],
    shortDescription:
      'An AI-supported hybrid learning platform for secondary education combining digital modules with physical practical sessions.',
    longDescription:
      'The Learning Management System (LMS) is an AI-enhanced hybrid education platform purpose-built for the Nigerian secondary school context. Recognising that pure digital learning fails to address practical skill development, the platform blends structured digital course modules — including video lessons, assessments, and AI-powered tutoring — with scheduled in-person or supervised practical sessions. The system supports teachers in monitoring student progress, adapting content delivery, and identifying at-risk learners through analytics dashboards.',
    highlights: [
      'AI-powered tutoring assistant for personalised student support',
      'Hybrid curriculum design blending digital modules with physical practicals',
      'Teacher dashboard with cohort-level progress analytics and alerts',
      'Adaptive assessment engine adjusting difficulty to student performance',
      'Content authoring tools enabling schools to localise curricula',
      'Currently in conceptualisation and instructional design phase',
    ],
  },
  {
    id: 6,
    name: 'EcclesiaOS',
    slug: 'ecclesia-os',
    status: 'Research & Conceptualization',
    statusColor: 'amber',
    domain: ['Church Admin', 'Operations'],
    shortDescription:
      'A church administration and workforce coordination platform for communication, task management, scheduling, and leadership development.',
    longDescription:
      'EcclesiaOS is an organisational management platform designed for the unique operational structure of modern churches and faith-based organisations. It addresses the gap left by generic project management tools by providing purpose-built modules for member communication, ministry scheduling, task assignment and tracking, event coordination, and leadership pipeline management. By digitising administrative workflows, EcclesiaOS frees church leadership to focus on pastoral and community work rather than coordination overhead.',
    highlights: [
      'Member directory and communication hub for announcements and messaging',
      'Ministry and department task management with accountability tracking',
      'Service scheduling and volunteer coordination calendar',
      'Leadership development tracking and mentorship pairing tools',
      'Event planning and attendance management module',
      'Currently in research and requirements-gathering phase',
    ],
  },
];
