import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { posts } from '@/data/posts';
import { Link } from 'react-router-dom';

export default function BlogList() {
  return (
    <div className='max-w-screen-xl mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>Blog Posts</h1>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map(post => (
          <Link key={post.id} to={`/blog/${post.id}`}>
            <Card className='hover:bg-muted/50 transition-colors'>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
