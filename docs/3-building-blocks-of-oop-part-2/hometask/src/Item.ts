import { Comparable } from "./Comparable";

export abstract class Item implements Comparable<Item> {
  private readonly id: number;
  private static idCounter = 1;

  constructor(readonly name: string, public value: number, public weight: number) {
    this.id = Item.idCounter++;
  }

  abstract use(): void;

  static resetIdCounter(): void {
    Item.idCounter = 1;
  }

  compareTo(other: Item): number {
    if (this.value > other.value) return 1;
    if (this.value < other.value) return -1;
    return this.name.toLowerCase().localeCompare(other.name.toLowerCase());
  }

  toString(): string {
    return `${this.name} − Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(2)}`;
  }

  getId(): number {
    return this.id;
  }
}
