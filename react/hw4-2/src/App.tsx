import { MathQuiz } from './components/MathQuiz';

function App() {
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 py-8 justify-center items-center flex'>
      <div className='container mx-auto px-4'>
        <div className='max-w-md mx-auto'>
          <MathQuiz />
        </div>
      </div>
    </div>
  );
}

export default App;
