
export interface TaskDay {
  id: number;
  title: string;
  description: string;
  resourceUrl: string;
  resourceTitle: string;
  completed: boolean;
}

export interface CourseModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  days: TaskDay[];
}

export const moduleTasksData: Record<string, TaskDay[]> = {
  foundation: [
    {
      id: 1,
      title: 'DSA Intro, Hello World, Variables',
      description: 'Introduction to Data Structures & Algorithms. Learn about time complexity, space complexity, and basic programming fundamentals. Set up your development environment and write your first programs.',
      resourceUrl: 'https://www.geeksforgeeks.org/data-structures/',
      resourceTitle: 'Data Structures Introduction',
      completed: true
    },
    {
      id: 2,
      title: 'Conditions & Loops',
      description: 'Master conditional statements (if/else, switch) and iteration (for, while, do-while). Practice with real-world examples and problem-solving patterns.',
      resourceUrl: 'https://www.geeksforgeeks.org/loops-in-c-and-cpp/',
      resourceTitle: 'Loops and Conditions Guide',
      completed: true
    },
    {
      id: 3,
      title: 'Functions and Arrays',
      description: 'Learn to create reusable functions and work with arrays. Understand function parameters, return values, and array manipulation techniques.',
      resourceUrl: 'https://www.geeksforgeeks.org/functions-in-c/',
      resourceTitle: 'Functions and Arrays Tutorial',
      completed: false
    },
    {
      id: 4,
      title: 'String Operations',
      description: 'Master string manipulation, pattern matching, and common string algorithms. Practice with substring operations and string formatting.',
      resourceUrl: 'https://www.geeksforgeeks.org/string-data-structure/',
      resourceTitle: 'String Operations Guide',
      completed: false
    },
    {
      id: 5,
      title: 'Objects and ES6',
      description: 'Modern JavaScript features including arrow functions, destructuring, spread operator, and object-oriented programming concepts.',
      resourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
      resourceTitle: 'ES6 Features Guide',
      completed: false
    },
    {
      id: 6,
      title: 'HTML Basics',
      description: 'Build semantic HTML structures, forms, and accessibility features. Learn proper document structure and SEO fundamentals.',
      resourceUrl: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
      resourceTitle: 'HTML Fundamentals',
      completed: false
    },
    {
      id: 7,
      title: 'CSS Flexbox/Grid',
      description: 'Master modern CSS layout systems. Create responsive designs using Flexbox and CSS Grid. Practice with real layout challenges.',
      resourceUrl: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
      resourceTitle: 'Complete Flexbox Guide',
      completed: false
    }
  ],
  'problem-solving': [
    {
      id: 1,
      title: 'Array Problems',
      description: 'Solve classic array problems including two-sum, maximum subarray, and array rotation. Master time-efficient solutions.',
      resourceUrl: 'https://leetcode.com/tag/array/',
      resourceTitle: 'Array Problems on LeetCode',
      completed: false
    },
    {
      id: 2,
      title: 'Stack Basics',
      description: 'Learn stack data structure with push/pop operations. Solve problems like balanced parentheses and postfix evaluation.',
      resourceUrl: 'https://www.geeksforgeeks.org/stack-data-structure/',
      resourceTitle: 'Stack Data Structure Guide',
      completed: false
    },
    {
      id: 3,
      title: 'Queue Implementation',
      description: 'Implement queue using arrays and linked lists. Practice with circular queues and priority queues.',
      resourceUrl: 'https://www.geeksforgeeks.org/queue-data-structure/',
      resourceTitle: 'Queue Data Structure Tutorial',
      completed: false
    },
    {
      id: 4,
      title: 'HashMap Mastery',
      description: 'Hash tables, collision handling, and practical applications. Solve frequency counting and caching problems.',
      resourceUrl: 'https://www.geeksforgeeks.org/hashing-data-structure/',
      resourceTitle: 'Hashing Complete Guide',
      completed: false
    },
    {
      id: 5,
      title: 'Two Pointer Technique',
      description: 'Master the two-pointer approach for array and string problems. Practice with palindromes and sorted array challenges.',
      resourceUrl: 'https://leetcode.com/tag/two-pointers/',
      resourceTitle: 'Two Pointers Problems',
      completed: false
    },
    {
      id: 6,
      title: 'Sliding Window',
      description: 'Learn sliding window patterns for substring and subarray problems. Optimize solutions from O(n²) to O(n).',
      resourceUrl: 'https://leetcode.com/tag/sliding-window/',
      resourceTitle: 'Sliding Window Patterns',
      completed: false
    },
    {
      id: 7,
      title: 'Recursion Fundamentals',
      description: 'Master recursive thinking with base cases and recursive relations. Practice with tree traversal and combinatorial problems.',
      resourceUrl: 'https://www.geeksforgeeks.org/recursion/',
      resourceTitle: 'Recursion Complete Guide',
      completed: false
    }
  ],
  react: [
    {
      id: 1,
      title: 'React Setup & Environment',
      description: 'Set up React development environment with Vite. Understand JSX, components, and the React developer tools.',
      resourceUrl: 'https://react.dev/learn',
      resourceTitle: 'React Official Documentation',
      completed: false
    },
    {
      id: 2,
      title: 'Components & Props',
      description: 'Create reusable components with props. Learn about component composition and prop validation with TypeScript.',
      resourceUrl: 'https://react.dev/learn/passing-props-to-a-component',
      resourceTitle: 'Components and Props Guide',
      completed: false
    },
    {
      id: 3,
      title: 'useState & useEffect',
      description: 'Master React hooks for state management and side effects. Handle user interactions and API calls effectively.',
      resourceUrl: 'https://react.dev/reference/react/useState',
      resourceTitle: 'React Hooks Reference',
      completed: false
    },
    {
      id: 4,
      title: 'Conditional Rendering',
      description: 'Display components conditionally based on state. Learn patterns for loading states, error handling, and user permissions.',
      resourceUrl: 'https://react.dev/learn/conditional-rendering',
      resourceTitle: 'Conditional Rendering Guide',
      completed: false
    },
    {
      id: 5,
      title: 'Trees Introduction',
      description: 'Binary trees, tree traversal algorithms (inorder, preorder, postorder), and tree height calculations.',
      resourceUrl: 'https://www.geeksforgeeks.org/binary-tree-data-structure/',
      resourceTitle: 'Binary Tree Complete Guide',
      completed: false
    },
    {
      id: 6,
      title: 'Binary Search Trees',
      description: 'BST operations (insert, delete, search), tree validation, and balanced tree concepts like AVL trees.',
      resourceUrl: 'https://www.geeksforgeeks.org/binary-search-tree-data-structure/',
      resourceTitle: 'BST Operations Guide',
      completed: false
    },
    {
      id: 7,
      title: 'Graph Fundamentals',
      description: 'Graph representation (adjacency list/matrix), BFS/DFS traversal, and shortest path algorithms introduction.',
      resourceUrl: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/',
      resourceTitle: 'Graph Algorithms Guide',
      completed: false
    }
  ],
  fullstack: [
    {
      id: 1,
      title: 'Node.js & NPM Setup',
      description: 'Install Node.js, understand the runtime environment, and manage packages with NPM. Create your first server.',
      resourceUrl: 'https://nodejs.org/en/docs/',
      resourceTitle: 'Node.js Official Documentation',
      completed: false
    },
    {
      id: 2,
      title: 'Express.js Routes',
      description: 'Create REST API endpoints with Express.js. Handle GET, POST, PUT, DELETE requests and middleware functions.',
      resourceUrl: 'https://expressjs.com/en/guide/routing.html',
      resourceTitle: 'Express.js Routing Guide',
      completed: false
    },
    {
      id: 3,
      title: 'MongoDB CRUD Operations',
      description: 'Connect to MongoDB, design schemas with Mongoose, and implement Create, Read, Update, Delete operations.',
      resourceUrl: 'https://mongoosejs.com/docs/guide.html',
      resourceTitle: 'Mongoose ODM Guide',
      completed: false
    },
    {
      id: 4,
      title: 'REST API Best Practices',
      description: 'Design RESTful APIs with proper HTTP status codes, error handling, and API documentation with tools like Swagger.',
      resourceUrl: 'https://restfulapi.net/',
      resourceTitle: 'REST API Design Guide',
      completed: false
    },
    {
      id: 5,
      title: 'Authentication Concepts',
      description: 'Understand sessions, cookies, and token-based authentication. Learn about password hashing and security best practices.',
      resourceUrl: 'https://auth0.com/docs/get-started/authentication-and-authorization',
      resourceTitle: 'Authentication Fundamentals',
      completed: false
    },
    {
      id: 6,
      title: 'JWT Tokens Implementation',
      description: 'Implement JSON Web Tokens for stateless authentication. Handle token generation, validation, and refresh mechanisms.',
      resourceUrl: 'https://jwt.io/introduction/',
      resourceTitle: 'JWT Complete Guide',
      completed: false
    },
    {
      id: 7,
      title: 'Mini API Project',
      description: 'Build a complete CRUD API with authentication. Deploy to platforms like Heroku or Railway and test with Postman.',
      resourceUrl: 'https://devcenter.heroku.com/articles/deploying-nodejs',
      resourceTitle: 'Node.js Deployment Guide',
      completed: false
    }
  ],
  nextjs: [
    {
      id: 1,
      title: 'App Router vs Pages Router',
      description: 'Understand Next.js 13+ App Router architecture, file-based routing, and migration from Pages Router.',
      resourceUrl: 'https://nextjs.org/docs/app',
      resourceTitle: 'Next.js App Router Documentation',
      completed: false
    },
    {
      id: 2,
      title: 'Pages, Layouts & Metadata',
      description: 'Create nested layouts, dynamic routes, and SEO-optimized metadata. Master the app directory structure.',
      resourceUrl: 'https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts',
      resourceTitle: 'Pages and Layouts Guide',
      completed: false
    },
    {
      id: 3,
      title: 'SSR/SSG Implementation',
      description: 'Server-Side Rendering vs Static Site Generation. Choose the right rendering strategy for performance.',
      resourceUrl: 'https://nextjs.org/docs/app/building-your-application/rendering',
      resourceTitle: 'Rendering Strategies Guide',
      completed: false
    },
    {
      id: 4,
      title: 'Forms & Server Actions',
      description: 'Handle form submissions with Server Actions, form validation, and progressive enhancement techniques.',
      resourceUrl: 'https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations',
      resourceTitle: 'Forms and Mutations Guide',
      completed: false
    },
    {
      id: 5,
      title: 'API Routes Development',
      description: 'Create API endpoints in Next.js, handle different HTTP methods, and integrate with external services.',
      resourceUrl: 'https://nextjs.org/docs/app/building-your-application/routing/route-handlers',
      resourceTitle: 'Route Handlers Documentation',
      completed: false
    },
    {
      id: 6,
      title: 'Middleware & Authentication',
      description: 'Implement authentication middleware, protect routes, and handle user sessions with NextAuth.js.',
      resourceUrl: 'https://nextjs.org/docs/app/building-your-application/routing/middleware',
      resourceTitle: 'Middleware Documentation',
      completed: false
    },
    {
      id: 7,
      title: 'Deploy to Vercel',
      description: 'Deploy your Next.js application to Vercel with custom domains, environment variables, and CI/CD integration.',
      resourceUrl: 'https://vercel.com/docs/concepts/deployments/overview',
      resourceTitle: 'Vercel Deployment Guide',
      completed: false
    }
  ],
  cms: [
    {
      id: 1,
      title: 'Headless CMS Introduction',
      description: 'Understand the difference between traditional and headless CMS. Learn about API-first content management.',
      resourceUrl: 'https://www.sanity.io/headless-cms',
      resourceTitle: 'Headless CMS Explained',
      completed: false
    },
    {
      id: 2,
      title: 'Setup Sanity Studio',
      description: 'Install Sanity CLI, configure your first project, and set up the Sanity Studio for content management.',
      resourceUrl: 'https://www.sanity.io/docs/getting-started',
      resourceTitle: 'Sanity Getting Started',
      completed: false
    },
    {
      id: 3,
      title: 'Schema Design Patterns',
      description: 'Design content schemas for blogs, portfolios, and e-commerce. Learn about document relationships and validation.',
      resourceUrl: 'https://www.sanity.io/docs/schema-types',
      resourceTitle: 'Sanity Schema Guide',
      completed: false
    },
    {
      id: 4,
      title: 'Fetching CMS Data in Next.js',
      description: 'Integrate Sanity with Next.js using GROQ queries. Implement static generation with CMS content.',
      resourceUrl: 'https://www.sanity.io/docs/overview-introduction',
      resourceTitle: 'Sanity Next.js Integration',
      completed: false
    },
    {
      id: 5,
      title: 'Blog/Product Site Project',
      description: 'Build a complete blog or product showcase website with dynamic content, image optimization, and SEO.',
      resourceUrl: 'https://github.com/sanity-io/nextjs-blog-cms-sanity-v3',
      resourceTitle: 'Next.js Blog Template',
      completed: false
    },
    {
      id: 6,
      title: 'CMS Admin Customization',
      description: 'Customize Sanity Studio with custom input components, previews, and workflow integrations.',
      resourceUrl: 'https://www.sanity.io/docs/studio',
      resourceTitle: 'Studio Customization Guide',
      completed: false
    },
    {
      id: 7,
      title: 'Deploy Full CMS Project',
      description: 'Deploy both your Next.js frontend and Sanity Studio. Set up webhooks for automatic rebuilds.',
      resourceUrl: 'https://www.sanity.io/docs/deployment',
      resourceTitle: 'Sanity Deployment Guide',
      completed: false
    }
  ]
};
