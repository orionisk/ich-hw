import { Quote } from './components/Quote';

function App() {
  return (
    <div className='min-h-screen bg-background flex flex-col items-center justify-center p-4'>
      <h1 className='text-3xl font-bold mb-8'>Random Quotes</h1>
      <Quote />
    </div>
  );
}

export default App;
