import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(...args: any[]) {
    const [points, color, filled] = args;
    if (points.length <= 2) {
      throw new Error("Shape should contain at least 3 points");
    }
    if (args.length === 1) {
      this.color = "green";
      this.filled = true;
      this.points = points;
    }
    if (args.length === 3) {
      this.color = color;
      this.filled = filled;
      this.points = points;
    }
  }

  abstract getType(): string;

  toString(): string {
    const isFilled = this.filled ? "filled" : "not filled";
    return `A Shape with color of ${this.color} and ${isFilled}. Points: ${this.points.join(", ")}.`;
  }

  getPerimeter = (): number => {
    return this.points.reduce((accumulator, currentValue, currentIndex) => {
      return (
        accumulator +
        (currentIndex
          ? currentValue.distance(this.points[currentIndex - 1])
          : currentValue.distance(this.points[this.points.length - 1]))
      );
    }, 0);
  };
}
