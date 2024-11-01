import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '@/data/posts';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className='max-w-screen-xl mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>Post not found</h1>
        <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
      </div>
    );
  }

  return (
    <div className='max-w-screen-xl mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-2'>{post.title}</h1>
      <p className='text-muted-foreground mb-4'>{post.date}</p>
      <Separator className='my-4' />
      <div className='prose prose-invert max-w-none'>
        <p>{post.content}</p>
      </div>
      <Button onClick={() => navigate('/blog')} className='mt-6'>
        Back to Blog
      </Button>
    </div>
  );
}
