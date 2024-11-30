import { Animal, Dog } from './Animal';
import { Library } from './Library';
import { Vehicle, Motorcycle } from './Vehicle';

const animal = new Animal('Leo', 'lion');
animal.sound();

const dog = new Dog('Rex', 'German Shepherd');
dog.sound();
console.log(dog.name, dog.species, dog.breed);

const library1 = new Library();
const library2 = new Library();

library1.addBook();
library2.addBook();
library2.addBook();

console.log('Total books:', Library.getTotalBooks());

const vehicle = new Vehicle('Toyota', 'Camry');
const motorcycle = new Motorcycle('Harley-Davidson', 'Sportster', 'Cruiser');

console.log(vehicle.make, vehicle.model);
console.log(motorcycle.make, motorcycle.model, motorcycle.type);
