import { useState } from 'react';
import { CitySelector } from '@/components/CitySelector';
import { CityCard } from '@/components/CityCard';
import { citiesData, City } from '@/types/city';

function App() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  return (
    <div className='min-h-screen bg-background p-8 space-y-8'>
      <h1 className='text-3xl font-bold text-center text-foreground mb-8'>
        Города Японии
      </h1>
      <CitySelector cities={citiesData} onSelectCity={setSelectedCity} />
      {selectedCity && <CityCard city={selectedCity} />}
    </div>
  );
}

export default App;
