import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { teamMembers } from '@/data/team';
import TeamMemberContent from '@/components/team/TeamMemberContent';

export async function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const member = teamMembers.find((m) => m.slug === params.slug);
  if (!member) return {};
  return {
    title: `${member.name} — ${member.title} | BAJs PM & C`,
    description: member.shortBio,
    openGraph: {
      title: `${member.name} — ${member.title}`,
      description: member.shortBio,
      type: 'profile',
    },
  };
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = teamMembers.find((m) => m.slug === params.slug);
  if (!member) notFound();
  return <TeamMemberContent member={member} />;
}
