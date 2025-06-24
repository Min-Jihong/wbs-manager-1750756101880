'use client';

import { ProjectForm } from '@/components/project/ProjectForm';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { Project } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export default function NewProjectPage() {
  const router = useRouter();

  const handleSubmit = (data: Omit<Project, 'id'>) => {
    const newProject: Project = {
      id: uuidv4(),
      ...data,
      startDate: data.startDate.toISOString().split('T')[0],
      endDate: data.endDate.toISOString().split('T')[0],
    };
    console.log('새 프로젝트 생성:', newProject);
    // In a real application, you would send this data to an API
    // For now, we'll just navigate back to the dashboard
    router.push('/');
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">새 프로젝트 생성</h1>
      <ProjectForm onSubmit={handleSubmit} />
    </div>
  );
}