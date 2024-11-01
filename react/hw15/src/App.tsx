import { useCallback, useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { UserList } from '@/components/UserList';

const initialUsers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' },
  { id: 4, name: 'Alice Brown' },
  { id: 5, name: 'Charlie Wilson' }
];

export default function App() {
  const [filter, setFilter] = useState('');

  const filterUsers = useCallback((searchText: string) => {
    return initialUsers.filter(user =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, []);

  const filteredUsers = useMemo(
    () => filterUsers(filter),
    [filter, filterUsers]
  );

  return (
    <div className='min-h-screen bg-slate-900 p-8'>
      <div className='mx-auto max-w-2xl space-y-6'>
        <Input
          className='bg-slate-800 text-slate-100'
          placeholder='Filter users...'
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        <UserList users={filteredUsers} />
      </div>
    </div>
  );
}
