import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function ListItems() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('Компонент ListItems обновлен');
  }, []);

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  return (
    <Card className='w-full max-w-md p-6 space-y-4'>
      <div className='flex gap-2'>
        <Input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder='Введите элемент списка'
        />
        <Button onClick={addItem}>Добавить</Button>
      </div>

      <ul className='space-y-2'>
        {items.map((item, index) => (
          <li
            key={index}
            className='p-2 rounded bg-secondary text-secondary-foreground'
          >
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
