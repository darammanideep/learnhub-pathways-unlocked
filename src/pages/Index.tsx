
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
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
  User
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
    days: [
      { id: 1, title: 'DSA Intro, Hello World, Variables', completed: true },
      { id: 2, title: 'Conditions & Loops', completed: true },
      { id: 3, title: 'Functions and Arrays', completed: false },
      { id: 4, title: 'String operations', completed: false },
      { id: 5, title: 'Objects and ES6', completed: false },
      { id: 6, title: 'HTML Basics', completed: false },
      { id: 7, title: 'CSS Flexbox/Grid', completed: false }
    ]
  },
  {
    id: 'problem-solving',
    title: 'Problem-Solving Arena',
    subtitle: 'Strings, Arrays, Stacks',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    description: 'Develop algorithmic thinking and problem-solving skills',
    days: [
      { id: 1, title: 'Array problems', completed: false },
      { id: 2, title: 'Stack basics', completed: false },
      { id: 3, title: 'Queue', completed: false },
      { id: 4, title: 'HashMap', completed: false },
      { id: 5, title: 'Two Pointer', completed: false },
      { id: 6, title: 'Sliding Window', completed: false },
      { id: 7, title: 'Recursion basics', completed: false }
    ]
  },
  {
    id: 'react',
    title: "Builder's Grounds",
    subtitle: 'React + Trees & Graphs',
    icon: Atom,
    color: 'from-green-500 to-emerald-500',
    description: 'Build modern UIs while learning advanced data structures',
    days: [
      { id: 1, title: 'React setup', completed: false },
      { id: 2, title: 'Components & Props', completed: false },
      { id: 3, title: 'useState/useEffect', completed: false },
      { id: 4, title: 'Conditional Rendering', completed: false },
      { id: 5, title: 'Trees intro', completed: false },
      { id: 6, title: 'Binary Search Trees', completed: false },
      { id: 7, title: 'Graph Basics', completed: false }
    ]
  },
  {
    id: 'fullstack',
    title: 'Fullstack Fortress',
    subtitle: 'Node, Express, MongoDB',
    icon: Shield,
    color: 'from-orange-500 to-red-500',
    description: 'Master backend development and database integration',
    days: [
      { id: 1, title: 'Node.js & NPM', completed: false },
      { id: 2, title: 'Express.js routes', completed: false },
      { id: 3, title: 'MongoDB CRUD', completed: false },
      { id: 4, title: 'REST APIs', completed: false },
      { id: 5, title: 'Auth concepts', completed: false },
      { id: 6, title: 'JWT Tokens', completed: false },
      { id: 7, title: 'Build mini API project', completed: false }
    ]
  },
  {
    id: 'nextjs',
    title: 'Next.js Nexus',
    subtitle: 'App Router & SSR',
    icon: Zap,
    color: 'from-indigo-500 to-purple-500',
    description: 'Build production-ready apps with Next.js',
    days: [
      { id: 1, title: 'App Router vs Pages', completed: false },
      { id: 2, title: 'Pages, Layouts, Metadata', completed: false },
      { id: 3, title: 'SSR/SSG', completed: false },
      { id: 4, title: 'Forms & Actions', completed: false },
      { id: 5, title: 'API Routes', completed: false },
      { id: 6, title: 'Middleware/Auth', completed: false },
      { id: 7, title: 'Deploy to Vercel', completed: false }
    ]
  },
  {
    id: 'cms',
    title: 'Headless CMS Arena',
    subtitle: 'Sanity/Strapi Integration',
    icon: Plug,
    color: 'from-teal-500 to-blue-500',
    description: 'Create dynamic content-driven applications',
    days: [
      { id: 1, title: 'What is Headless CMS?', completed: false },
      { id: 2, title: 'Setup Sanity/Strapi', completed: false },
      { id: 3, title: 'Schema Design', completed: false },
      { id: 4, title: 'Fetching CMS data in Next.js', completed: false },
      { id: 5, title: 'Real-world project (Blog/Product site)', completed: false },
      { id: 6, title: 'CMS Admin customization', completed: false },
      { id: 7, title: 'Deploy full CMS-backed project', completed: false }
    ]
  }
];

const LearnHub = () => {
  const [selectedCourse, setSelectedCourse] = useState('foundation');
  const [user, setUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

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

  const toggleTaskCompletion = (courseId, dayId) => {
    console.log(`Toggling task completion for course ${courseId}, day ${dayId}`);
    // In a real app, this would update the database
  };

  const selectedCourseData = courses.find(course => course.id === selectedCourse);
  const completedDaysInCourse = selectedCourseData?.days.filter(day => day.completed).length || 0;
  const courseProgress = (completedDaysInCourse / 7) * 100;

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-white">Welcome to LearnHub</CardTitle>
            <CardDescription className="text-gray-300">
              Master DSA, MERN, Next.js & Headless CMS with gamified learning
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={handleSignIn}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white"
            >
              <Github className="w-4 h-4 mr-2" />
              Sign in with GitHub
            </Button>
            <p className="text-xs text-gray-400 text-center">
              Track your progress across 6 comprehensive modules
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">LearnHub</h1>
              <p className="text-xs text-gray-400">Your Learning Journey</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
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

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
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

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-sm">Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
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
              </div>
            </CardContent>
          </Card>
        </div>

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
                  className="flex flex-col items-center space-y-1 p-3 data-[state=active]:bg-white/20 text-white"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{course.title.split(' ')[0]}</span>
                  <span className="text-xs text-gray-400">{completedInModule}/7</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {courses.map((course) => {
            const Icon = course.icon;
            
            return (
              <TabsContent key={course.id} value={course.id} className="space-y-6">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {course.days.map((day) => (
                    <Card
                      key={day.id}
                      className={`
                        bg-white/10 backdrop-blur-lg border-white/20 cursor-pointer transition-all duration-200 hover:scale-105
                        ${day.completed ? 'ring-2 ring-green-400 bg-green-500/20' : 'hover:bg-white/20'}
                      `}
                      onClick={() => toggleTaskCompletion(course.id, day.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            {day.completed ? (
                              <CheckCircle2 className="w-5 h-5 text-green-400" />
                            ) : (
                              <Circle className="w-5 h-5 text-gray-400" />
                            )}
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
                            <h3 className="text-white font-medium text-sm leading-tight">
                              {day.title}
                            </h3>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </main>
    </div>
  );
};

export default LearnHub;
