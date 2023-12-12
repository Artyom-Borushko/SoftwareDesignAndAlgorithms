import { Vertex } from './vertex';
import { WeightedGraphInterface } from './types';

export class WeightedGraph implements WeightedGraphInterface<Vertex> {
  adjacencyList: Record<string, {
    vertex: string;
    weight: number;
  }[]>;
  constructor() {
    this.adjacencyList = {};
  }

  addEdge(vertex1: Vertex, vertex2: Vertex, weight: number): void {
    if (!this.adjacencyList[vertex1.key] || !this.adjacencyList[vertex2.key]) return;
    this.adjacencyList[vertex1.key].push({ vertex: vertex2.key, weight: weight });
    this.adjacencyList[vertex2.key].push({ vertex: vertex1.key, weight: weight });
  }

  addVertex(key: string): void {
    if (!this.adjacencyList[key]) {
      this.adjacencyList[key] = [];
    }
  }
}
