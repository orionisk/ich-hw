import { useEffect, useRef } from 'react';

interface ValueDisplayProps {
  value: string;
}

export function ValueDisplay({ value }: ValueDisplayProps) {
  const previousValue = useRef<string>('');

  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  return (
    <div className='space-y-2'>
      <p className='text-xl text-white'>
        Текущее значение: <span className='text-primary'>{value}</span>
      </p>
      <p className='text-xl text-white'>
        Предыдущее значение:{' '}
        <span className='text-primary'>{previousValue.current}</span>
      </p>
    </div>
  );
}
