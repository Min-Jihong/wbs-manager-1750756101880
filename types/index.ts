export interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
}

export interface WBSItem {
  id: string;
  projectId: string;
  parentId: string | null;
  name: string;
  description: string;
  assignedTo: string;
  status: string;
  priority: string;
  startDate: string;
  endDate: string;
  progress: number;
}