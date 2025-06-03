
import connectDB from '../lib/mongodb';
import AITool from '../models/AITool';

const aiToolsData = [
  // Module Completion Tools
  {
    id: 'foundation-interview-kit',
    name: 'DSA Interview Kit',
    description: 'Top 20 DSA questions with solutions and mock interview sheets',
    category: 'module-completion',
    unlockCondition: { type: 'module', value: 'foundation' },
    toolType: 'interview-kit',
    content: {
      downloadUrl: '/downloads/dsa-interview-kit.pdf',
      instructions: 'Practice these fundamental DSA questions before your interviews'
    }
  },
  {
    id: 'problem-solving-debugger',
    name: 'AI Code Debugger',
    description: 'AI-powered debugging assistant for algorithms and data structures',
    category: 'module-completion',
    unlockCondition: { type: 'module', value: 'problem-solving' },
    toolType: 'debug-assistant',
    content: {
      embedUrl: '/tools/debugger',
      instructions: 'Upload your code and get AI-powered debugging suggestions'
    }
  },
  {
    id: 'react-component-generator',
    name: 'React Component Generator',
    description: 'Generate boilerplate React components with TypeScript',
    category: 'module-completion',
    unlockCondition: { type: 'module', value: 'react' },
    toolType: 'code-generator',
    content: {
      embedUrl: '/tools/react-generator',
      instructions: 'Describe your component and get production-ready code'
    }
  },
  {
    id: 'fullstack-api-kit',
    name: 'API Testing Kit',
    description: 'Complete REST API testing suite with Postman collections',
    category: 'module-completion',
    unlockCondition: { type: 'module', value: 'fullstack' },
    toolType: 'interview-kit',
    content: {
      downloadUrl: '/downloads/api-testing-kit.json',
      instructions: 'Import into Postman to test your APIs'
    }
  },
  {
    id: 'nextjs-deployment-guide',
    name: 'Next.js Deployment Checklist',
    description: 'Step-by-step deployment guide for production apps',
    category: 'module-completion',
    unlockCondition: { type: 'module', value: 'nextjs' },
    toolType: 'checklist',
    content: {
      downloadUrl: '/downloads/nextjs-deployment-guide.pdf',
      instructions: 'Follow this checklist for seamless deployments'
    }
  },
  {
    id: 'cms-project-templates',
    name: 'CMS Project Templates',
    description: 'Ready-to-use Sanity schemas and Next.js templates',
    category: 'module-completion',
    unlockCondition: { type: 'module', value: 'cms' },
    toolType: 'template',
    content: {
      downloadUrl: '/downloads/cms-templates.zip',
      instructions: 'Download and customize these professional templates'
    }
  },

  // Course Completion Tools
  {
    id: 'ai-resume-builder',
    name: 'AI Resume Builder',
    description: 'Create ATS-friendly resumes tailored for tech roles',
    category: 'course-completion',
    unlockCondition: { type: 'course', value: 'complete' },
    toolType: 'resume-builder',
    content: {
      embedUrl: '/tools/resume-builder',
      instructions: 'Build your professional resume with AI assistance'
    }
  },
  {
    id: 'portfolio-generator',
    name: 'AI Portfolio Generator',
    description: 'Generate a professional portfolio website using your project data',
    category: 'course-completion',
    unlockCondition: { type: 'course', value: 'complete' },
    toolType: 'portfolio-generator',
    content: {
      embedUrl: '/tools/portfolio-generator',
      instructions: 'Create a stunning portfolio to showcase your work'
    }
  },
  {
    id: 'mock-interviewer',
    name: 'AI Mock Interviewer',
    description: 'Practice technical interviews with AI feedback',
    category: 'course-completion',
    unlockCondition: { type: 'course', value: 'complete' },
    toolType: 'interview-practice',
    content: {
      embedUrl: '/tools/mock-interviewer',
      instructions: 'Practice coding interviews with personalized feedback'
    }
  },
  {
    id: 'linkedin-optimizer',
    name: 'LinkedIn Profile Optimizer',
    description: 'AI-powered LinkedIn headline and summary generator',
    category: 'course-completion',
    unlockCondition: { type: 'course', value: 'complete' },
    toolType: 'profile-optimizer',
    content: {
      embedUrl: '/tools/linkedin-optimizer',
      instructions: 'Optimize your LinkedIn profile for maximum visibility'
    }
  }
];

async function seedAITools() {
  try {
    await connectDB();
    
    // Clear existing tools
    await AITool.deleteMany({});
    
    // Insert new tools
    await AITool.insertMany(aiToolsData);
    
    console.log('AI Tools seeded successfully!');
    console.log(`Inserted ${aiToolsData.length} tools`);
  } catch (error) {
    console.error('Error seeding AI tools:', error);
  }
}

// Run if called directly
if (require.main === module) {
  seedAITools().then(() => process.exit());
}

export default seedAITools;
