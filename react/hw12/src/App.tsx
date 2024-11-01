import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ValueDisplay } from '@/components/value-display';

function App() {
  const [value, setValue] = useState('');

  return (
    <div className='min-h-screen bg-background flex items-center justify-center p-4'>
      <Card className='w-full max-w-md p-6 space-y-4'>
        <Input
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder='Введите текст...'
          className='w-full'
        />
        <ValueDisplay value={value} />
      </Card>
    </div>
  );
}

export default App;
