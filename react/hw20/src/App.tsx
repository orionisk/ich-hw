import { UserList } from '@/components/UserList';

export default function App() {
  return (
    <div className='min-h-screen bg-background text-foreground p-8'>
      <div className='container mx-auto'>
        <h1 className='text-3xl font-bold mb-8'>Список пользователей</h1>
        <UserList />
      </div>
    </div>
  );
}
