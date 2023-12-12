import { Vertex } from './vertex';

export class Edge {
  constructor(public readonly from: Vertex, public readonly to: Vertex, public readonly weight: number) {
  }
}