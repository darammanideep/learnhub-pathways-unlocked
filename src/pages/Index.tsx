
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { TaskModal } from '@/components/TaskModal';
import { moduleTasksData } from '@/data/moduleTasks';
import { 
  Code2, 
  Brain, 
  Atom, 
  Shield, 
  Zap, 
  Plug, 
  CheckCircle2, 
  Circle, 
  Trophy,
  Github,
  LogOut,
  User,
  ExternalLink,
  Play,
  ArrowRight
} from 'lucide-react';

// Course data structure
const courses = [
  {
    id: 'foundation',
    title: 'Foundation Zone',
    subtitle: 'DSA + HTML/CSS/JS',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    description: 'Master the fundamentals of programming and web development',
    days: moduleTasksData.foundation
  },
  {
    id: 'problem-solving',
    title: 'Problem-Solving Arena',
    subtitle: 'Strings, Arrays, Stacks',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    description: 'Develop algorithmic thinking and problem-solving skills',
    days: moduleTasksData['problem-solving']
  },
  {
    id: 'react',
    title: "Builder's Grounds",
    subtitle: 'React + Trees & Graphs',
    icon: Atom,
    color: 'from-green-500 to-emerald-500',
    description: 'Build modern UIs while learning advanced data structures',
    days: moduleTasksData.react
  },
  {
    id: 'fullstack',
    title: 'Fullstack Fortress',
    subtitle: 'Node, Express, MongoDB',
    icon: Shield,
    color: 'from-orange-500 to-red-500',
    description: 'Master backend development and database integration',
    days: moduleTasksData.fullstack
  },
  {
    id: 'nextjs',
    title: 'Next.js Nexus',
    subtitle: 'App Router & SSR',
    icon: Zap,
    color: 'from-indigo-500 to-purple-500',
    description: 'Build production-ready apps with Next.js',
    days: moduleTasksData.nextjs
  },
  {
    id: 'cms',
    title: 'Headless CMS Arena',
    subtitle: 'Sanity/Strapi Integration',
    icon: Plug,
    color: 'from-teal-500 to-blue-500',
    description: 'Create dynamic content-driven applications',
    days: moduleTasksData.cms
  }
];

const LearnHub = () => {
  const [selectedCourse, setSelectedCourse] = useState('foundation');
  const [user, setUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  // Calculate overall progress
  const totalTasks = courses.reduce((acc, course) => acc + course.days.length, 0);
  const completedTasks = courses.reduce((acc, course) => 
    acc + course.days.filter(day => day.completed).length, 0
  );
  const overallProgress = (completedTasks / totalTasks) * 100;

  // Calculate XP (1 XP per completed day)
  const xp = completedTasks;

  const handleSignIn = () => {
    setIsSignedIn(true);
    setUser({ name: 'Demo User', image: null });
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setUser(null);
  };

  const handleTaskClick = (courseId, task) => {
    setSelectedTask({ ...task, courseId });
    setIsTaskModalOpen(true);
  };

  const handleTaskComplete = (taskId) => {
    // Update the task completion status
    const updatedCourses = courses.map(course => {
      if (course.id === selectedTask.courseId) {
        return {
          ...course,
          days: course.days.map(day => 
            day.id === taskId ? { ...day, completed: true } : day
          )
        };
      }
      return course;
    });
    
    console.log(`Task ${taskId} marked as complete for course ${selectedTask.courseId}`);
    // In a real app, this would update the database via API call
  };

  const selectedCourseData = courses.find(course => course.id === selectedCourse);
  const completedDaysInCourse = selectedCourseData?.days.filter(day => day.completed).length || 0;
  const courseProgress = (completedDaysInCourse / 7) * 100;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="text-center">
              <motion.div 
                className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Code2 className="w-8 h-8 text-white" />
              </motion.div>
              <CardTitle className="text-2xl font-bold text-white">Welcome to LearnHub</CardTitle>
              <CardDescription className="text-gray-300">
                Master DSA, MERN, Next.js & Headless CMS with gamified learning
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={handleSignIn}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white transition-all duration-200 hover:scale-105"
              >
                <Github className="w-4 h-4 mr-2" />
                Sign in with GitHub
              </Button>
              <p className="text-xs text-gray-400 text-center">
                Track your progress across 6 comprehensive modules
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">LearnHub</h1>
              <p className="text-xs text-gray-400">Your Learning Journey</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 text-white">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">{xp} XP</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-8 h-8 text-white bg-gray-700 rounded-full p-1" />
              <span className="text-white text-sm">{user?.name}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="text-white hover:bg-white/10"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={cardVariants}>
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-sm">Overall Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-white">
                    <span>{completedTasks} / {totalTasks} tasks</span>
                    <span>{Math.round(overallProgress)}%</span>
                  </div>
                  <Progress value={overallProgress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-sm">Current Module</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-white">
                    <span>{selectedCourseData?.title}</span>
                    <span>{Math.round(courseProgress)}%</span>
                  </div>
                  <Progress value={courseProgress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-sm">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {completedTasks >= 7 && (
                    <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                      Week Warrior
                    </Badge>
                  )}
                  {completedTasks >= 14 && (
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      Dedicated Learner
                    </Badge>
                  )}
                  {completedTasks >= 21 && (
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                      Learning Master
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Course Modules */}
        <Tabs value={selectedCourse} onValueChange={setSelectedCourse} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-black/20 backdrop-blur-lg border-white/20 mb-8">
            {courses.map((course) => {
              const Icon = course.icon;
              const completedInModule = course.days.filter(day => day.completed).length;
              
              return (
                <TabsTrigger
                  key={course.id}
                  value={course.id}
                  className="flex flex-col items-center space-y-1 p-3 data-[state=active]:bg-white/20 text-white transition-all duration-200 hover:bg-white/10"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{course.title.split(' ')[0]}</span>
                  <span className="text-xs text-gray-400">{completedInModule}/7</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <AnimatePresence mode="wait">
            {courses.map((course) => {
              const Icon = course.icon;
              
              return (
                <TabsContent key={course.id} value={course.id} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Course Header */}
                    <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${course.color} rounded-lg flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-white text-xl">{course.title}</CardTitle>
                            <CardDescription className="text-gray-300">{course.subtitle}</CardDescription>
                            <p className="text-sm text-gray-400 mt-1">{course.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-white">
                              {course.days.filter(day => day.completed).length}/7
                            </div>
                            <div className="text-xs text-gray-400">Days Complete</div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>

                    {/* Daily Tasks Grid */}
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {course.days.map((day) => (
                        <motion.div key={day.id} variants={cardVariants}>
                          <Card
                            className={`
                              bg-white/10 backdrop-blur-lg border-white/20 cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-white/20
                              ${day.completed ? 'ring-2 ring-green-400 bg-green-500/20' : ''}
                            `}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 mt-1">
                                  <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                  >
                                    {day.completed ? (
                                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                                    ) : (
                                      <Circle className="w-5 h-5 text-gray-400" />
                                    )}
                                  </motion.div>
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <Badge variant="outline" className="text-xs border-white/30 text-white">
                                      Day {day.id}
                                    </Badge>
                                    {day.completed && (
                                      <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-300">
                                        ✓ Complete
                                      </Badge>
                                    )}
                                  </div>
                                  <h3 className="text-white font-medium text-sm leading-tight mb-3">
                                    {day.title}
                                  </h3>
                                  <div className="flex flex-col space-y-2">
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="text-xs border-white/30 text-white hover:bg-white/20"
                                      onClick={() => handleTaskClick(course.id, day)}
                                    >
                                      <Play className="w-3 h-3 mr-1" />
                                      View Task
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      className="text-xs text-blue-300 hover:text-blue-200 hover:bg-blue-500/20"
                                      onClick={() => window.open(day.resourceUrl, '_blank')}
                                    >
                                      <ExternalLink className="w-3 h-3 mr-1" />
                                      Resource
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Resume Module Button */}
                    <motion.div 
                      className="flex justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button 
                        className={`bg-gradient-to-r ${course.color} text-white hover:scale-105 transition-all duration-200`}
                        onClick={() => {
                          const nextIncompleteDay = course.days.find(day => !day.completed);
                          if (nextIncompleteDay) {
                            handleTaskClick(course.id, nextIncompleteDay);
                          }
                        }}
                      >
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Resume Learning
                      </Button>
                    </motion.div>
                  </motion.div>
                </TabsContent>
              );
            })}
          </AnimatePresence>
        </Tabs>
      </main>

      {/* Task Modal */}
      <TaskModal
        task={selectedTask}
        moduleTitle={selectedTask ? courses.find(c => c.id === selectedTask.courseId)?.title || '' : ''}
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
        onComplete={handleTaskComplete}
      />
    </div>
  );
};

export default LearnHub;
