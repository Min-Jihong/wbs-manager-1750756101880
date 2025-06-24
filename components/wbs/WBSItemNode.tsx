'use client';

import { useState } from 'react';
import { WBSItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TaskStatusBadge } from '@/components/wbs/TaskStatusBadge';
import { MoreHorizontal, Edit, Trash2, Plus } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { TaskFormDialog } from '@/components/wbs/TaskFormDialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

interface WBSItemNodeProps {
  item: WBSItem;
  children?: React.ReactNode;
  onEdit: (item: WBSItem) => void;
  onDelete: (itemId: string) => void;
  onAddTask: (parentId: string) => void;
}

export function WBSItemNode({ item, children, onEdit, onDelete, onAddTask }: WBSItemNodeProps) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleEditSubmit = (data: Omit<WBSItem, 'id' | 'projectId' | 'parentId'>) => {
    onEdit({ ...item, ...data });
  };

  return (
    <div className="mb-2">
      <Card className="relative group">
        <CardContent className="p-4 flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
            <div className="flex items-center space-x-2 mt-2 text-sm">
              <TaskStatusBadge status={item.status} />
              <span className="text-muted-foreground">담당: {item.assignedTo || '미정'}</span>
              <span className="text-muted-foreground">진행률: {item.progress}%</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="ghost" size="sm" onClick={() => onAddTask(item.id)}>
              <Plus className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setIsEditDialogOpen(true)}>
                  <Edit className="mr-2 h-4 w-4" />
                  수정
                </DropdownMenuItem>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      <Trash2 className="mr-2 h-4 w-4" />
                      삭제
                    </DropdownMenuItem>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
                      <AlertDialogDescription>
                        이 작업과 모든 하위 작업이 영구적으로 삭제됩니다. 이 작업은 되돌릴 수 없습니다.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>취소</AlertDialogCancel>
                      <AlertDialogAction onClick={() => onDelete(item.id)}>삭제</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>
      {children && <div className="ml-8 mt-2 border-l pl-4">{children}</div>}

      <TaskFormDialog
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        initialData={item}
        onSubmit={handleEditSubmit}
      />
    </div>
  );
}