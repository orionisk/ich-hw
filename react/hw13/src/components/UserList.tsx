import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { UserItem } from './UserItem';

export function UserList() {
  const { users, filter } = useSelector((state: RootState) => state.users);

  const filteredUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.toLowerCase()) ||
      user.role.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {filteredUsers.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}
