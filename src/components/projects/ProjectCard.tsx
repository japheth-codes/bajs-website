import Badge from '@/components/ui/Badge';
import { Project, ProjectStatus } from '@/data/types';

type BadgeVariant = 'mvp' | 'concept' | 'research' | 'live';

const STATUS_BADGE: Record<ProjectStatus, BadgeVariant> = {
  'Deployed': 'live',
  'MVP Development': 'mvp',
  'Conceptualization & Design': 'concept',
  'Research & Conceptualization': 'research',
};

const STATUS_LABEL: Record<ProjectStatus, string> = {
  'Deployed': 'Deployed',
  'MVP Development': 'MVP Development',
  'Conceptualization & Design': 'Concept & Design',
  'Research & Conceptualization': 'Research Phase',
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-[1.02] h-full flex flex-col border-l-[3px] border-l-transparent hover:border-l-primary">
      <div className="h-1.5 w-full bg-primary" />
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <Badge variant={STATUS_BADGE[project.status]}>{STATUS_LABEL[project.status]}</Badge>
          {project.status === 'MVP Development' && (
            <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10C45C] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10C45C]" />
              </span>
              In Development
            </span>
          )}
        </div>

        <h3 className="font-bold text-dark text-xl leading-snug">{project.name}</h3>

        <div className="flex flex-wrap gap-1.5">
          {project.domain.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-primary/10 text-primary font-medium rounded-full px-2.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-dark-muted text-sm leading-relaxed flex-1">{project.shortDescription}</p>
      </div>
    </div>
  );
}
