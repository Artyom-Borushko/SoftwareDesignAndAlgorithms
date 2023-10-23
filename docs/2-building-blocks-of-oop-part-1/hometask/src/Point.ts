export class Point {
  readonly x: number;
  readonly y: number;

  constructor();
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    this.x = x || 0;
    this.y = y || 0;
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  distance(): number;
  distance(other: Point): number;
  distance(x: number, y: number): number;
  distance(...args: any[]): number {
    if (args.length === 0) return +Math.hypot(this.x, this.y).toFixed(2);
    if (args.length === 1) return +Math.hypot(this.x - (args[0] as Point).x, this.y - (args[0] as Point).y).toFixed(2);
    if (args.length === 2) return +Math.hypot(this.x - args[0], this.y - args[1]).toFixed(2);
  }
}
