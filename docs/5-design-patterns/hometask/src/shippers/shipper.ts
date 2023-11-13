import { ShipmentState } from '../types/types';

export abstract class Shipper {
  getCost(state: ShipmentState): number {
    if (state.weight <= 15) return +this.getLetterShipmentCost(state.weight).toFixed(1);
    else if (state.weight <= 160) return +this.getPackageShipmentCost(state.weight).toFixed(1);
    else return +this.getOversizeShipmentCost(state.weight).toFixed(1);
  }

  abstract getInstance(): Shipper;
  abstract getLetterShipmentCost(weight: number): number;
  abstract getPackageShipmentCost(weight: number): number;
  abstract getOversizeShipmentCost(weight: number): number;
}
