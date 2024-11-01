import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function UserList() {
  const users = useSelector((state: RootState) => state.users.users);

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {users.map(user => (
        <Card
          key={user.id}
          className='bg-card hover:bg-card/80 transition-colors'
        >
          <CardHeader>
            <CardTitle>{user.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-muted-foreground'>{user.email}</p>
            <p className='mt-2 text-sm font-medium'>{user.role}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
