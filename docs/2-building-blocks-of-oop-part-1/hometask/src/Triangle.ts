import { Shape } from "./Shape";
import { Point } from "./Point";

export class Triangle extends Shape {
  constructor(pointA: Point, pointB: Point, pointC: Point);
  constructor(pointA: Point, pointB: Point, pointC: Point, color: string, filled: boolean);
  constructor(...args: any[]) {
    const [pointA, pointB, pointC, color, filled] = args;
    if (!pointA || !pointB || !pointC) {
      throw new Error("Triangle should contain at least 3 points");
    }
    if (args.length === 1) {
      super([pointA, pointB, pointC]);
    }
    if (args.length === 3) {
      super([pointA, pointB, pointC], color, filled);
    }
  }

  toString(): string {
    const formattedPoints = this.points.map((point: Point, index: number) => {
      return `v${index + 1}=${point.toString()}`;
    });
    return `Triangle[${formattedPoints.join(",")}]`;
  }

  getType(): string {
    const [pointA, pointB, pointC] = this.points;
    const allSides = [pointA.distance(pointB), pointB.distance(pointC), pointA.distance(pointC)];
    const sidesSetSize = new Set(allSides).size;
    if (sidesSetSize === 1) return "equilateral triangle";
    if (sidesSetSize === 2) return "isosceles triangle";
    return "scalene triangle";
  }
}
