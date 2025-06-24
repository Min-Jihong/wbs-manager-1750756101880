'use client';

import { ProjectHeader } from '@/components/project/ProjectHeader';
import { WBSView } from '@/components/wbs/WBSView';
import { WBSItem } from '@/types';
import { v4 as uuidv4 } from 'uuid';

interface ProjectDetailPageProps {
  params: { projectId: string };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { projectId } = params;

  // Dummy data for a single project and its WBS items
  const dummyProject = {
    id: projectId,
    name: `프로젝트 ${projectId.substring(0, 8)} 상세`, // Use part of ID for name
    description: `이 프로젝트는 ${projectId}에 대한 상세 WBS를 관리하는 페이지입니다.`, // Use ID in description
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    status: '진행 중'
  };

  const dummyWbsItems: WBSItem[] = [
    {
      id: uuidv4(),
      projectId: projectId,
      parentId: null,
      name: '프로젝트 계획 수립',
      description: '프로젝트의 전반적인 계획을 수립합니다.',
      assignedTo: '김철수',
      status: '완료',
      priority: '높음',
      startDate: '2023-01-01',
      endDate: '2023-01-15',
      progress: 100
    },
    {
      id: uuidv4(),
      projectId: projectId,
      parentId: null,
      name: '요구사항 분석',
      description: '사용자 요구사항을 수집하고 분석합니다.',
      assignedTo: '이영희',
      status: '진행 중',
      priority: '높음',
      startDate: '2023-01-10',
      endDate: '2023-02-10',
      progress: 70
    },
    {
      id: uuidv4(),
      projectId: projectId,
      parentId: null,
      name: '시스템 설계',
      description: '시스템 아키텍처 및 상세 설계를 진행합니다.',
      assignedTo: '박민수',
      status: '보류',
      priority: '중간',
      startDate: '2023-02-01',
      endDate: '2023-03-15',
      progress: 30
    }
  ];

  return (
    <div className="space-y-8">
      <ProjectHeader
        projectName={dummyProject.name}
        projectDescription={dummyProject.description}
      />
      <WBSView wbsItems={dummyWbsItems} />
    </div>
  );
}