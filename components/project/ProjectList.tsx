'use client';

import { ProjectCard } from '@/components/project/ProjectCard';
import { Project } from '@/types';

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        아직 생성된 프로젝트가 없습니다. 새로운 프로젝트를 시작해보세요!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}