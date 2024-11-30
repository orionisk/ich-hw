// Задание 3

export class Vehicle {
  constructor(public make: string, public model: string) {}
}

export class Motorcycle extends Vehicle {
  constructor(make: string, model: string, public type: string) {
    super(make, model);
  }
}
