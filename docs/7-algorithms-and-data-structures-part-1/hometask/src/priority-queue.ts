import { Node } from './types';

export class PriorityQueue {
  collection: Array<any>;

  constructor() {
    this.collection = [];
  }

  public enqueue(vertex: any): void {
    if (vertex.weight) {
      this.collection.push({
        vertex: vertex.vertex,
        weight: vertex.weight,
      });
      this.sort();
    } else if (vertex.key) {
      this.collection.push({
        vertex: vertex.key,
        weight: Infinity,
      });
    }
  }

  public dequeue(): Node {
    return this.collection.shift();
  }

  private sort(): void {
    this.collection.sort((a, b) => a.weight - b.weight);
  }
}
