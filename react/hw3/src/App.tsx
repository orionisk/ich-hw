import Rating from './Rating';
import List from './List';

function App() {
  return (
    <div className='min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-8 py-8'>
      <div className='bg-gray-800 rounded-xl shadow-lg p-6'>
        <h1 className='text-2xl font-bold text-center mb-6 text-white'>
          Система рейтинга
        </h1>
        <Rating />
      </div>

      <div className='bg-gray-800 rounded-xl shadow-lg p-6'>
        <h1 className='text-2xl font-bold text-center mb-6 text-white'>
          Список приглашенных
        </h1>
        <List />
      </div>
    </div>
  );
}

export default App;
