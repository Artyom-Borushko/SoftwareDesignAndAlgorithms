
export class MinHeap<T> {
  minHeap: Array<{value: T; priority: number}>;

  constructor() {
    this.minHeap = [];
  }

  public getSize(): number {
    return this.minHeap.length;
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getParent(index: number): {value: T; priority: number} {
    return this.minHeap[this.getParentIndex(index)];
  }

  private hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0;
  }

  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private getLeftChild(index: number): {value: T; priority: number} {
    return this.minHeap[this.getLeftChildIndex(index)];
  }

  private hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.getSize();
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private getRightChild(index: number): {value: T; priority: number} {
    return this.minHeap[this.getRightChildIndex(index)];
  }

  private hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.getSize();
  }

  private swap(index1: number, index2: number): void {
    [this.minHeap[index1], this.minHeap[index2]] = [this.minHeap[index2], this.minHeap[index1]];
  }

  private minHeapifyUp(): void {
    let index = this.getSize() - 1;

    while (
      this.hasParent(index) &&
      this.getParent(index).priority > this.minHeap[index].priority
      ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  private minHeapifyDown(): void {
    let index = 0;

    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.getRightChild(index).priority < this.getLeftChild(index).priority
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.minHeap[index].priority < this.minHeap[smallerChildIndex].priority) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  public insert(value: T, priority: number): void {
    this.minHeap.push({value, priority});
    this.minHeapifyUp();
  }

  public remove(): T | undefined {
    if (this.getSize() === 0) return undefined;
    if (this.getSize() === 1) return this.minHeap.pop().value;

    const root = this.minHeap[0];
    this.minHeap[0] = this.minHeap.pop();
    this.minHeapifyDown();
    return root.value;
  }
}
