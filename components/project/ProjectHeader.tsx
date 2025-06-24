'use client';

import { Project } from '@/types';

interface ProjectHeaderProps {
  projectName: string;
  projectDescription: string;
}

export function ProjectHeader({ projectName, projectDescription }: ProjectHeaderProps) {
  return (
    <div className="mb-6 pb-4 border-b">
      <h1 className="text-3xl font-bold tracking-tight">{projectName}</h1>
      <p className="text-muted-foreground mt-2">{projectDescription}</p>
    </div>
  );
}