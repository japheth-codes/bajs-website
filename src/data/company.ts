import { CompanyInfo } from './types';

export const company: CompanyInfo = {
  name: 'BAJs Project Management & Consultancy',
  shortName: 'BAJs PM&C',
  rc: '9947203',
  tagline:
    'BAJs Project Management & Consultancy delivers purpose-driven solutions across technology, business operations and strategy.',
  mission:
    'To provide integrated project management, business development and technology services that help organisations and entrepreneurs build sustainable, accountable ventures.',
  vision:
    'To be the leading multidisciplinary consultancy in West Africa, recognised for transforming ideas into measurable outcomes through innovation, precision and purposeful execution.',
  email: 'bajsprojmangandconsultancy@gmail.com',
  projectEmail: 'benjaminjapheth79@gmail.com',
  phones: ['0703 101 4067', '0803 587 7730', '0803 816 2113'],
  linkedin: 'https://www.linkedin.com/in/bajs-projmang-and-consult',
  addresses: [
    '8 Keffi Street, Garki II, Abuja, Nigeria',
    '28 Zenith Street, Kuje, Abuja, FCT, Nigeria',
  ],
  founded: '2024',
  workingHours: 'Monday – Friday, 9:00 AM – 6:00 PM WAT',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bajs-pmc.vercel.app',
  boards: [
    {
      name: 'Benjamin Japheth Prince',
      role: 'Chairman / Chief Technical Officer',
      shares: '33%',
    },
    {
      name: 'Benjamin Prince Benjamin',
      role: 'Director / Chief Operating Officer',
      shares: '33%',
    },
    {
      name: 'Divine Favour Benjamins',
      role: 'Director / Chief Financial Officer',
      shares: '24%',
    },
    {
      name: 'Elizabeth Oyeronke Igbokwe',
      role: 'Director / Chief Executive Officer',
      shares: '10%',
    },
  ],
  partners: [
    {
      name: 'Plexus Entertainment',
      status: 'Active',
      affiliation: 'Partner',
    },
    {
      name: 'BAJs HealthCare',
      status: 'Active',
      affiliation: 'Partner',
    },
    {
      name: 'BAJs Nexus',
      status: 'Inactive',
      affiliation: 'Subsidiary',
    },
    {
      name: 'Daisy Dolls',
      status: 'Inactive',
      affiliation: 'Partner',
    },
  ],
};

/** Converts a Nigerian local number to an E.164 tel: link. */
export function telHref(phone: string) {
  return phone.replace(/\s/g, '').replace(/^0/, '+234');
}
