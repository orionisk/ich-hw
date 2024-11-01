import { BlogPost } from '@/types/blog';

export const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with React and TypeScript',
    content:
      'React and TypeScript are a powerful combination for building web applications...',
    excerpt: 'Learn how to set up and use React with TypeScript',
    date: '2024-03-20'
  },
  {
    id: 2,
    title: 'Understanding React Router',
    content:
      'React Router is the standard routing library for React applications...',
    excerpt: 'Deep dive into React Router and its features',
    date: '2024-03-21'
  },
  {
    id: 3,
    title: 'Styling with Tailwind CSS',
    content:
      'Tailwind CSS is a utility-first CSS framework that can speed up your development...',
    excerpt: 'Master Tailwind CSS in your React applications',
    date: '2024-03-22'
  }
];
