export abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

export class WashingMachine extends Appliance {
  turnOn(): void {
    console.log('Washing Machine is now running');
  }

  turnOff(): void {
    console.log('Washing Machine has stopped');
  }
}

export class Refrigerator extends Appliance {
  turnOn(): void {
    console.log('Refrigerator is now cooling');
  }

  turnOff(): void {
    console.log('Refrigerator has stopped');
  }
}
