import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { fetchRandomQuote } from '@/features/quote/quoteSlice';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function Quote() {
  const dispatch = useDispatch<AppDispatch>();
  const { quote, status, error } = useSelector(
    (state: RootState) => state.quote
  );

  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(fetchRandomQuote());
  };

  if (status === 'loading') {
    return (
      <Card className='w-[600px]'>
        <CardHeader>
          <Skeleton className='h-4 w-[250px]' />
        </CardHeader>
        <CardContent>
          <Skeleton className='h-20 w-full' />
        </CardContent>
      </Card>
    );
  }

  if (status === 'failed') {
    return (
      <Card className='w-[600px]'>
        <CardContent className='text-red-500'>Error: {error}</CardContent>
      </Card>
    );
  }

  return (
    <Card className='w-[600px]'>
      <CardContent className='pt-6'>
        <blockquote className='text-xl italic'>"{quote?.content}"</blockquote>
      </CardContent>
      <CardFooter className='flex flex-col gap-4'>
        <p className='text-right w-full'>- {quote?.author}</p>
        <Button onClick={handleNewQuote}>Get New Quote</Button>
      </CardFooter>
    </Card>
  );
}
