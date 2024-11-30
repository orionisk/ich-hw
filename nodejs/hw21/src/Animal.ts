export abstract class Animal {
  abstract makeSound(): string;
}

export class Dog extends Animal {
  makeSound(): string {
    return 'Bark';
  }
}

export class Cat extends Animal {
  makeSound(): string {
    return 'Meow';
  }
}
