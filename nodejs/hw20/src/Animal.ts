// Задание 1

export class Animal {
  constructor(public name: string, public species: string) {}

  sound(): void {
    console.log('The animal makes a sound');
  }
}

export class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name, 'dog');
  }

  override sound(): void {
    console.log('The dog barks');
  }
}
