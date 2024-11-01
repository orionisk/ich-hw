import { UserProfile } from '@/components/UserProfile';

function App() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <div className='container mx-auto py-8'>
        <h1 className='text-3xl font-bold text-center mb-8'>User Profile</h1>
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
