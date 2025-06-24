'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Project } from '@/types';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const progressValue = Math.min(Math.max(Math.round(Math.random() * 100), 0), 100); // Dummy progress

  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="hover:shadow-lg transition-shadow duration-200 ease-in-out h-full">
        <CardHeader>
          <CardTitle>{project.name}</CardTitle>
          <CardDescription className="line-clamp-2">{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">
              기간: {project.startDate} ~ {project.endDate}
            </div>
            <div className="text-sm text-muted-foreground">
              상태: {project.status}
            </div>
            <div className="flex items-center space-x-2">
              <Progress value={progressValue} className="h-2" />
              <span className="text-sm font-medium">{progressValue}%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}