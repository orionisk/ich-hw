import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

interface CatImage {
  id: string;
  url: string;
}

export function CatImage() {
  const [image, setImage] = useState<CatImage | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchCatImage = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://api.thecatapi.com/v1/images/search'
      );
      setImage(response.data[0]);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <Card className='w-full max-w-md p-4 space-y-4'>
      <div className='space-y-4'>
        {loading ? (
          <Skeleton className='w-full h-64 rounded-lg' />
        ) : (
          <img
            src={image?.url}
            alt='Random cat'
            className='w-full h-64 object-cover rounded-lg'
          />
        )}
        <Button onClick={fetchCatImage} className='w-full' disabled={loading}>
          Get New Cat
        </Button>
      </div>
    </Card>
  );
}
