'use client';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TaskStatusBadgeProps {
  status: string;
}

export function TaskStatusBadge({ status }: TaskStatusBadgeProps) {
  let variant: 'default' | 'secondary' | 'destructive' | 'outline' = 'secondary';
  let text = status;

  switch (status) {
    case '진행 중':
      variant = 'default';
      text = '진행 중';
      break;
    case '완료':
      variant = 'default';
      text = '완료';
      break;
    case '보류':
      variant = 'outline';
      text = '보류';
      break;
    case '취소':
      variant = 'destructive';
      text = '취소';
      break;
    default:
      variant = 'secondary';
      text = status;
  }

  return <Badge variant={variant}>{text}</Badge>;
}