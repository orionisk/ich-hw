import { useState } from 'react';

interface Person {
  id: number;
  name: string;
  age: number;
}

const List = () => {
  const [people, setPeople] = useState<Person[]>([
    { id: 1, name: 'Иван', age: 20 },
    { id: 2, name: 'Мария', age: 22 },
    { id: 3, name: 'Алексей', age: 21 },
    { id: 4, name: 'Марина', age: 19 },
    { id: 5, name: 'Даша', age: 23 },
    { id: 6, name: 'Глеб', age: 24 },
    { id: 7, name: 'Дима', age: 18 },
    { id: 8, name: 'Гриша', age: 20 },
    { id: 9, name: 'Серафим', age: 21 }
  ]);

  const handleDelete = (id: number) => {
    setPeople(people.filter(person => person.id !== id));
  };

  return (
    <div className='w-full max-w-md'>
      <ul className='space-y-2'>
        {people.map(person => (
          <li
            key={person.id}
            className='flex items-center justify-between bg-gray-800 p-4 rounded-lg'
          >
            <div className='text-gray-200'>
              <span className='font-medium'>{person.name}</span>
              <span className='ml-2 text-gray-400'>{person.age} лет</span>
            </div>
            <button
              onClick={() => handleDelete(person.id)}
              className='px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md 
                transition-colors duration-200 text-sm'
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
