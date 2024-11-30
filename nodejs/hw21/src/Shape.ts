export abstract class Shape {
  abstract name: string;
  abstract calculateArea(): number;
}

export abstract class ColoredShape extends Shape {
  abstract color: string;
}

export class ColoredCircle extends ColoredShape {
  name = 'circle';
  constructor(public radius: number, public color: string) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

export class ColoredRectangle extends ColoredShape {
  name = 'rectangle';
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}
