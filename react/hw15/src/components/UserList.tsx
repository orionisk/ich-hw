import { Card, CardContent } from '@/components/ui/card';

interface User {
  id: number;
  name: string;
}

interface UserListProps {
  users: User[];
}

export function UserList({ users }: UserListProps) {
  return (
    <div className='grid gap-4'>
      {users.map(user => (
        <Card key={user.id} className='bg-slate-800'>
          <CardContent className='p-4'>
            <p className='text-slate-100'>{user.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
