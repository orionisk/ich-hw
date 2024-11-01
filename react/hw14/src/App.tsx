import { Provider } from 'react-redux';
import { store } from './redux/store';
import { User } from './components/User';
import { UserForm } from './components/UserForm';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Provider store={store}>
      <div className='min-h-screen bg-background text-foreground p-8'>
        <div className='container mx-auto flex flex-col items-center gap-8'>
          <h1 className='text-3xl font-bold'>User Management</h1>
          <User />
          <UserForm />
        </div>
        <Toaster />
      </div>
    </Provider>
  );
}

export default App;
