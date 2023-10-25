import { ItemComparator } from "./ItemComparator";
import { Item } from "./Item";

export class Inventory {
  private items: Item[] = [];

  addItem(item: Item): void {
    this.items.push(item);
  }

  sort(comparator?: ItemComparator): Item[] {
    return comparator
      ? this.items.sort(comparator.compare.bind(comparator))
      : this.items.sort((a, b) => a.compareTo(b));
  }

  toString(): string {
    return this.items.join(", ");
  }
}
