import { DynamicForm } from '@/components/DynamicForm';

function App() {
  return (
    <div className='min-h-screen bg-background flex items-center justify-center p-4'>
      <div className='w-full max-w-md space-y-4'>
        <h1 className='text-2xl font-bold text-center'>Динамическая форма</h1>
        <DynamicForm />
      </div>
    </div>
  );
}

export default App;
