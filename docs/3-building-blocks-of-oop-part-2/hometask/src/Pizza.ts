import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  private numberOfEatenSlices = 0;

  constructor(value: number, weight: number, isSpoiled: boolean, readonly numberOfSlices: number) {
    super("pizza", value, weight, isSpoiled);
  }

  use(): string {
    if (this.numberOfSlices && this.numberOfEatenSlices < this.numberOfSlices) {
      this.numberOfEatenSlices = this.numberOfEatenSlices + 1;
      return `You consumed a slice of the ${this.name}.`;
    }
    this.isConsumed = true;
    return super.use();
  }

  getNumberOfEatenSlices(): number {
    return this.numberOfEatenSlices;
  }
}
