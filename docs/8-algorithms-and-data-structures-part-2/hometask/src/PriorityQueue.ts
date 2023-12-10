import {MinHeap} from './MinHeap';

interface PriorityQueueI<T> {
  enqueue(value: T, priority: number): void;
  dequeue(): T | undefined;
  size(): number;
}

export class PriorityQueue<T> implements PriorityQueueI<T> {
  priorityQueue: MinHeap<T>;

  constructor() {
    this.priorityQueue = new MinHeap();
  }

  enqueue(value: T, priority: number): void {
    this.priorityQueue.insert(value, priority);
  }

  dequeue(): T | undefined {
    return this.priorityQueue.remove();
  }

  size(): number {
    return this.priorityQueue.getSize();
  }
}
