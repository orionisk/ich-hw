import { User } from '@/types';
import { Card, CardContent } from '@/components/ui/card';

interface UserItemProps {
  user: User;
}

export function UserItem({ user }: UserItemProps) {
  return (
    <Card>
      <CardContent className='p-4'>
        <div className='flex flex-col gap-1'>
          <h3 className='font-semibold'>{user.name}</h3>
          <p className='text-sm text-white'>{user.email}</p>
          <span className='text-xs text-white'>{user.role}</span>
        </div>
      </CardContent>
    </Card>
  );
}
