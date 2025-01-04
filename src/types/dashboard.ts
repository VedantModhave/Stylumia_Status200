export interface TrendHighlight {
  id: string;
  title: string;
  growth: number;
  relevanceScore: number;
  category: string;
  image: string;
  sustainabilityScore: number;
}

export interface Notification {
  id: string;
  type: 'trend' | 'mention' | 'task' | 'system';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}

export interface Task {
  id: string;
  title: string;
  status: 'pending' | 'in_progress' | 'completed';
  dueDate: string;
  assignedTo: string[];
  priority: 'low' | 'medium' | 'high';
  trendId?: string;
}