'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export function CreateProjectButton() {
  return (
    <Link href="/projects/new">
      <Button className="w-full">
        <Plus className="mr-2 h-4 w-4" />
        새 프로젝트 생성
      </Button>
    </Link>
  );
}