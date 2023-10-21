import { ItemComparator } from "./ItemComparator";
import { Item } from "./Item";

export class Inventory {
  private items: Item[] = [];

  addItem(item: Item): void {
    this.items.push(item);
  }

  sort(comparator?: ItemComparator): Item[] {
    return comparator ? this.items.sort(comparator.compare) : this.items.sort((a, b) => a.value - b.value);
  }

  toString(): string {
    return this.items.length ? this.items.join(", ") : "";
  }
}
