import type { Metadata } from 'next';
import ContactContent from '@/components/contact/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | BAJs PM & C',
  description:
    'Get in touch with BAJs Project Management & Consultancy. Reach us at our Lagos or Abuja offices, by phone, email, or via our contact form.',
  openGraph: {
    title: 'Contact BAJs PM & C',
    description: 'Reach out to discuss your next project, partnership, or enquiry.',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
