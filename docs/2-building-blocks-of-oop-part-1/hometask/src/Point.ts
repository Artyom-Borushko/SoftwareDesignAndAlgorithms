export class Point {
  private x: number;
  private y: number;

  constructor();
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    this.x = x || 0;
    this.y = y || 0;
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  private calculatePointsDistance(passedX: number = 0, passedY: number = 0): number {
    const pointDistance = Math.sqrt(Math.pow(this.x - passedX, 2) + Math.pow(this.y - passedY, 2));
    return +pointDistance.toFixed(2);
  }

  distance();
  distance(other: Point): number;
  distance(x: number, y: number): number;
  distance(...args: any[]): number {
    if (args.length === 0) {
      return this.calculatePointsDistance();
    }
    if (args.length === 1) {
      const [passedPointsInstance] = args;
      return this.calculatePointsDistance(passedPointsInstance.x, passedPointsInstance.y);
    }
    if (args.length === 2) {
      return this.calculatePointsDistance(args[0], args[1]);
    }
  }
}
