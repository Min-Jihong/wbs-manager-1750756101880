'use client';

import { useState } from 'react';
import { WBSItem } from '@/types';
import { WBSItemNode } from '@/components/wbs/WBSItemNode';
import { TaskFormDialog } from '@/components/wbs/TaskFormDialog';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

interface WBSViewProps {
  wbsItems: WBSItem[];
}

export function WBSView({ wbsItems: initialWbsItems }: WBSViewProps) {
  const [wbsItems, setWbsItems] = useState<WBSItem[]>(initialWbsItems);
  const [isAddTaskDialogOpen, setIsAddTaskDialogOpen] = useState(false);
  const [currentParentId, setCurrentParentId] = useState<string | null>(null);

  const buildTree = (items: WBSItem[], parentId: string | null = null) => {
    return items
      .filter((item) => item.parentId === parentId)
      .map((item) => (
        <WBSItemNode
          key={item.id}
          item={item}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          onAddTask={handleOpenAddTaskDialog}
        >
          {buildTree(items, item.id)}
        </WBSItemNode>
      ));
  };

  const handleOpenAddTaskDialog = (parentId: string | null = null) => {
    setCurrentParentId(parentId);
    setIsAddTaskDialogOpen(true);
  };

  const handleAddTask = (data: Omit<WBSItem, 'id' | 'projectId' | 'parentId'>) => {
    const newId = uuidv4();
    const newWBSItem: WBSItem = {
      id: newId,
      projectId: 'dummy-project-id', // This should come from context/props in a real app
      parentId: currentParentId,
      ...data,
    };
    setWbsItems((prev) => [...prev, newWBSItem]);
  };

  const handleEditTask = (updatedItem: WBSItem) => {
    setWbsItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const handleDeleteTask = (itemId: string) => {
    const itemsToDelete: string[] = [itemId];
    let queue = [itemId];

    while (queue.length > 0) {
      const currentId = queue.shift();
      if (currentId) {
        const children = wbsItems.filter(item => item.parentId === currentId);
        children.forEach(child => {
          itemsToDelete.push(child.id);
          queue.push(child.id);
        });
      }
    }
    setWbsItems((prev) => prev.filter((item) => !itemsToDelete.includes(item.id)));
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button onClick={() => handleOpenAddTaskDialog(null)}>
          <Plus className="mr-2 h-4 w-4" />
          최상위 작업 추가
        </Button>
      </div>
      {wbsItems.length === 0 ? (
        <div className="text-center text-muted-foreground py-8">
          아직 WBS 항목이 없습니다. 새로운 작업을 추가해보세요!
        </div>
      ) : (
        buildTree(wbsItems)
      )}

      <TaskFormDialog
        isOpen={isAddTaskDialogOpen}
        onClose={() => setIsAddTaskDialogOpen(false)}
        onSubmit={handleAddTask}
      />
    </div>
  );
}