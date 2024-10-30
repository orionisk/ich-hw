import { City } from '@/types/city';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  return (
    <Card className='w-full max-w-2xl mx-auto bg-background text-foreground'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <MapPin className='h-5 w-5' />
          {city.name}
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <img
          src={city.imageUrl}
          alt={city.name}
          className='w-full h-64 object-cover rounded-lg'
        />
        <p className='text-muted-foreground'>{city.description}</p>
        <div className='space-y-2'>
          <h3 className='font-semibold'>Интересные факты:</h3>
          <ul className='list-disc list-inside space-y-1 text-muted-foreground'>
            {city.facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
