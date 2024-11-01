import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function User() {
  const { name, status } = useSelector((state: RootState) => state.user);

  return (
    <Card className='w-[350px] bg-card'>
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>
          <p className='text-sm text-muted-foreground'>
            Name: {name || 'Not set'}
          </p>
          <p className='text-sm text-muted-foreground'>
            Status: {status || 'Not set'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
