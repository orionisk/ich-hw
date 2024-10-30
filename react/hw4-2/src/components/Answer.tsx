import { useState, FormEvent } from 'react';

interface AnswerProps {
  onSubmit: (answer: number) => void;
}

export function Answer({ onSubmit }: AnswerProps) {
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(Number(userAnswer));
    setUserAnswer('');
  };

  return (
    <form onSubmit={handleSubmit} className='mt-4'>
      <input
        type='number'
        value={userAnswer}
        onChange={e => setUserAnswer(e.target.value)}
        className='px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-white dark:text-white'
        placeholder='Введите ответ'
        required
      />
      <button
        type='submit'
        className='ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
      >
        Проверить
      </button>
    </form>
  );
}
