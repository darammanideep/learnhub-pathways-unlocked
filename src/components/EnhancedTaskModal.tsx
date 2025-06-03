import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { TaskDay } from '@/data/moduleTasks';
import { CheckCircle2, ExternalLink, FileText, Save } from 'lucide-react';

interface TaskModalProps {
  task: TaskDay | null;
  moduleTitle: string;
  isOpen: boolean;
  onClose: () => void;
  onComplete: (moduleId: string, taskId: number) => Promise<void>;
}

export const EnhancedTaskModal: React.FC<TaskModalProps> = ({
  task,
  moduleTitle,
  isOpen,
  onClose,
  onComplete
}) => {
  const [notes, setNotes] = useState('');
  const [notesSaved, setNotesSaved] = useState(false);

  if (!task) return null;

  const handleComplete = async () => {
    if (!task) return;
    
    try {
      await onComplete(task.moduleId, task.id);
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  const handleSaveNotes = () => {
    // In a real app, this would save to the database
    console.log(`Saving notes for task ${task.id}:`, notes);
    setNotesSaved(true);
    setTimeout(() => setNotesSaved(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-xl font-bold mb-2">
                {task.title}
              </DialogTitle>
              <div className="flex items-center space-x-2 mb-3">
                <Badge variant="outline">
                  {moduleTitle} - Day {task.id}
                </Badge>
                {task.completed && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Completed
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <DialogDescription className="text-left text-base leading-relaxed">
            {task.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Resource Link */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" />
              Learning Resource
            </h3>
            <p className="text-blue-800 mb-3">{task.resourceTitle}</p>
            <Button
              variant="outline"
              size="sm"
              className="border-blue-300 text-blue-700 hover:bg-blue-100"
              onClick={() => window.open(task.resourceUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Resource
            </Button>
          </div>

          {/* Notes Section */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Personal Notes
            </h3>
            <Textarea
              placeholder="Write your notes, key learnings, or questions here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className="resize-none"
            />
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={handleSaveNotes}
                disabled={!notes.trim()}
              >
                <Save className="w-4 h-4 mr-2" />
                Save Notes
              </Button>
              {notesSaved && (
                <span className="text-sm text-green-600 flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1" />
                  📝 Notes saved!
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4 border-t">
            <Button
              onClick={handleComplete}
              className={`flex-1 ${
                task.completed 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-primary hover:bg-primary/90'
              }`}
              disabled={task.completed}
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              {task.completed ? 'Already Completed' : 'Mark as Complete'}
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
