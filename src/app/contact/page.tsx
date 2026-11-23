import type { Metadata } from 'next';
import ContactContent from '@/components/contact/ContactContent';

export const metadata: Metadata = {
  title: 'Contact us',
  description:
    'Get in touch with BAJs Project Management & Consultancy by phone, email, or via our contact form.',
  openGraph: {
    title: 'Contact BAJs PM&C',
    description: 'Reach out to discuss your next project, partnership or enquiry.',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
