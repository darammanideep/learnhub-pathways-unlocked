export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  resourceUrl: string;
  resourceTitle: string;
  completed: boolean;
  moduleId: string;
}

export interface AITool {
  id: string;
  name: string;
  description: string;
  category: 'module-completion' | 'course-completion';
  toolType: string;
  content: {
    downloadUrl?: string;
    embedUrl?: string;
    instructions?: string;
    apiEndpoint?: string;
  };
  isUnlocked: boolean;
  unlockedAt?: Date;
}

export interface ModuleProgress {
  moduleId: string;
  completedTasks: number[];
  lastAccessed: Date;
}