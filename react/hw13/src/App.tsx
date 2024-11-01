import { Filter } from '@/components/Filter';
import { UserList } from '@/components/UserList';
import { Separator } from '@/components/ui/separator';

export function App() {
  return (
    <div className='container mx-auto py-8 space-y-6'>
      <h1 className='text-3xl font-bold'>User Management</h1>
      <Filter />
      <Separator />
      <UserList />
    </div>
  );
}
