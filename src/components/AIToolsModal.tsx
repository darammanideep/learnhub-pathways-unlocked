
import React from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, FileText, Code, Trophy, Lock, ExternalLink, Download } from 'lucide-react';

interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
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

interface AIToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tools: AITool[];
  moduleId?: string;
}

const getToolIcon = (toolType: string) => {
  switch (toolType) {
    case 'interview-kit':
      return Brain;
    case 'resume-builder':
      return FileText;
    case 'portfolio-generator':
      return Code;
    default:
      return Trophy;
  }
};

export const AIToolsModal: React.FC<AIToolsModalProps> = ({
  isOpen,
  onClose,
  tools,
  moduleId
}) => {
  const moduleTools = tools.filter(tool => 
    tool.category === 'module-completion' && 
    (tool.unlockCondition?.value === moduleId || tool.isUnlocked)
  );
  
  const courseTools = tools.filter(tool => tool.category === 'course-completion');

  const handleToolAccess = (tool: AITool) => {
    if (tool.content.downloadUrl) {
      window.open(tool.content.downloadUrl, '_blank');
    } else if (tool.content.embedUrl) {
      window.open(tool.content.embedUrl, '_blank');
    } else if (tool.content.apiEndpoint) {
      // Navigate to tool page
      window.open(`/tools/${tool.id}`, '_blank');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center">
            <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
            AI Tools & Rewards
          </DialogTitle>
          <DialogDescription>
            Unlock powerful AI tools by completing modules and maintaining streaks
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Module Completion Tools */}
          {moduleTools.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Module Completion Rewards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {moduleTools.map((tool) => {
                  const Icon = getToolIcon(tool.toolType);
                  return (
                    <motion.div
                      key={tool.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className={`h-full ${tool.isUnlocked ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Icon className={`w-5 h-5 ${tool.isUnlocked ? 'text-green-600' : 'text-gray-400'}`} />
                              <CardTitle className="text-base">{tool.name}</CardTitle>
                            </div>
                            {tool.isUnlocked ? (
                              <Badge variant="secondary" className="bg-green-100 text-green-800">
                                Unlocked
                              </Badge>
                            ) : (
                              <Lock className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="mb-3">
                            {tool.description}
                          </CardDescription>
                          {tool.isUnlocked ? (
                            <Button
                              size="sm"
                              onClick={() => handleToolAccess(tool)}
                              className="w-full"
                            >
                              {tool.content.downloadUrl ? (
                                <>
                                  <Download className="w-4 h-4 mr-2" />
                                  Download
                                </>
                              ) : (
                                <>
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Access Tool
                                </>
                              )}
                            </Button>
                          ) : (
                            <Button size="sm" disabled className="w-full">
                              Complete Module to Unlock
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Course Completion Tools */}
          {courseTools.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Course Completion Rewards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courseTools.map((tool) => {
                  const Icon = getToolIcon(tool.toolType);
                  return (
                    <motion.div
                      key={tool.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className={`h-full ${tool.isUnlocked ? 'border-purple-200 bg-purple-50' : 'border-gray-200 bg-gray-50'}`}>
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Icon className={`w-5 h-5 ${tool.isUnlocked ? 'text-purple-600' : 'text-gray-400'}`} />
                              <CardTitle className="text-base">{tool.name}</CardTitle>
                            </div>
                            {tool.isUnlocked ? (
                              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                                Unlocked
                              </Badge>
                            ) : (
                              <Lock className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="mb-3">
                            {tool.description}
                          </CardDescription>
                          {tool.isUnlocked ? (
                            <Button
                              size="sm"
                              onClick={() => handleToolAccess(tool)}
                              className="w-full bg-purple-600 hover:bg-purple-700"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Access Premium Tool
                            </Button>
                          ) : (
                            <Button size="sm" disabled className="w-full">
                              Complete All Modules to Unlock
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {tools.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>No AI tools available yet. Complete modules to unlock rewards!</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
