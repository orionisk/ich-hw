import { City } from '@/types/city';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

interface CitySelectorProps {
  cities: City[];
  onSelectCity: (city: City) => void;
}

export function CitySelector({ cities, onSelectCity }: CitySelectorProps) {
  return (
    <div className='w-full max-w-xs mx-auto'>
      <Select
        onValueChange={cityName => {
          const selectedCity = cities.find(city => city.name === cityName);
          if (selectedCity) onSelectCity(selectedCity);
        }}
      >
        <SelectTrigger className='w-full bg-background text-foreground'>
          <SelectValue placeholder='Выберите город' />
        </SelectTrigger>
        <SelectContent>
          {cities.map(city => (
            <SelectItem key={city.name} value={city.name}>
              {city.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
