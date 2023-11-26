import { Node } from './types';

export class PriorityQueue {
  collection: Array<Node>;

  constructor() {
    this.collection = [];
  }

  enqueue(key: string, weight: number): void {
    this.collection.push({
      key,
      weight,
    });
    this.sort();
  }

  dequeue(): Node {
    return this.collection.shift();
  }

  sort(): void {
    this.collection.sort((a, b) => a.weight - b.weight);
  }
}
