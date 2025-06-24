'use client';

import { ProjectList } from '@/components/project/ProjectList';
import { CreateProjectButton } from '@/components/project/CreateProjectButton';
import { Project } from '@/types';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>(
    [
      {
        id: uuidv4(),
        name: 'WBS Manager 개발 프로젝트',
        description: 'WBS(Work Breakdown Structure)를 효율적으로 생성하고 관리할 수 있는 웹 애플리케이션 개발 프로젝트입니다.',
        startDate: '2023-01-01',
        endDate: '2023-12-31',
        status: '진행 중'
      },
      {
        id: uuidv4(),
        name: '새로운 기능 추가 프로젝트',
        description: '사용자 피드백을 반영하여 새로운 기능을 추가하는 프로젝트입니다.',
        startDate: '2024-03-01',
        endDate: '2024-06-30',
        status: '보류'
      }
    ]
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">대시보드</h1>
        <CreateProjectButton />
      </div>
      <ProjectList projects={projects} />
    </div>
  );
}