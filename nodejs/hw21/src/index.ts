import { Animal, Dog, Cat } from './Animal';
import { ColoredCircle, ColoredRectangle } from './Shape';
import { Appliance, WashingMachine, Refrigerator } from './Appliance';
import { SavingsAccount, CheckingAccount } from './Account';
import { Media, Audio, Video } from './Media';

const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach(animal => {
  console.log(animal.makeSound());
});

const circle = new ColoredCircle(5, 'red');
const rectangle = new ColoredRectangle(4, 6, 'blue');
console.log(
  `Circle: area = ${circle.calculateArea()}, color = ${circle.color}`
);
console.log(
  `Rectangle: area = ${rectangle.calculateArea()}, color = ${rectangle.color}`
);

const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];
appliances.forEach(appliance => {
  appliance.turnOn();
  appliance.turnOff();
});

const savings = new SavingsAccount(0.05);
savings.deposit(1000);
savings.addInterest();
console.log(`Savings balance: ${savings.getBalance()}`);

const checking = new CheckingAccount(1.5);
checking.deposit(500);
checking.withdraw(100);
console.log(`Checking balance: ${checking.getBalance()}`);

const mediaItems: Media[] = [new Audio(), new Video()];
mediaItems.forEach(item => {
  item.play();
});
