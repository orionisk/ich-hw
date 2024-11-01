import { useEffect, useState } from 'react';
import axios from 'redaxios';
import { User } from '@/types/user';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export function UserProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const randomId = Math.floor(Math.random() * 10) + 1;
      const response = await axios.get<User>(
        `https://jsonplaceholder.typicode.com/users/${randomId}`
      );
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return (
      <Card className='w-full max-w-md mx-auto'>
        <CardHeader>
          <CardTitle>Loading...</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-3/4' />
        </CardContent>
      </Card>
    );
  }

  if (!user) return null;

  return (
    <div className='p-4 space-y-4'>
      <Card className='w-full max-w-md mx-auto'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>{user.name}</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <p className='text-sm text-muted-foreground'>Contact Information</p>
            <p className='text-sm'>Email: {user.email}</p>
            <p className='text-sm'>Phone: {user.phone}</p>
            <p className='text-sm'>Website: {user.website}</p>
          </div>

          <div className='space-y-2'>
            <p className='text-sm text-muted-foreground'>Company</p>
            <p className='text-sm'>Name: {user.company.name}</p>
            <p className='text-sm'>Motto: {user.company.catchPhrase}</p>
          </div>

          <div className='space-y-2'>
            <p className='text-sm text-muted-foreground'>Address</p>
            <p className='text-sm'>
              {user.address.street}, {user.address.city}
            </p>
          </div>

          <Button onClick={fetchUser} className='w-full mt-4'>
            Load Random User
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
