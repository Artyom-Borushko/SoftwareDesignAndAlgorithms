import { Item } from "./Item";

export abstract class Consumable extends Item {
  isConsumed = false;

  constructor(name: string, value: number, weight: number, private isSpoiledConsumable = false) {
    super(name, value, weight);
  }

  isSpoiled(): boolean {
    return this.isSpoiledConsumable;
  }

  use(): string {
    if (this.isSpoiled() === true && !this.isConsumed) {
      return `You consumed the ${this.name}.\nYou feel sick.`;
    }
    return this.isConsumed ? `There's nothing left of the ${this.name} to consume.` : `You consumed the ${this.name}.`;
  }
}
