import { useState, useEffect } from 'react';
import { Answer } from './Answer';

export function MathQuiz() {
  const [score, setScore] = useState(0);
  const [numbers, setNumbers] = useState({ a: 0, b: 0 });

  const generateNumbers = () => {
    setNumbers({
      a: Math.floor(Math.random() * 100),
      b: Math.floor(Math.random() * 100)
    });
  };

  useEffect(() => {
    generateNumbers();
  }, []);

  const handleAnswer = (userAnswer: number) => {
    const correctAnswer = numbers.a + numbers.b;
    if (userAnswer === correctAnswer) {
      setScore(prev => prev + 1);
    } else {
      setScore(prev => Math.max(prev - 1, 0));
    }
    generateNumbers();
  };

  return (
    <div className='p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg space-y-8'>
      <h2 className='text-2xl font-bold dark:text-white'>Math Quiz</h2>
      <div className='text-3xl dark:text-gray-200'>Текущий счет: {score}</div>
      <div className='text-2xl dark:text-gray-200'>
        Сколько будет {numbers.a} + {numbers.b}?
      </div>
      <Answer onSubmit={handleAnswer} />
    </div>
  );
}
