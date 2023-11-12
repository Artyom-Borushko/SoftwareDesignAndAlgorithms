import { ShipmentState } from '../types/types';

export abstract class Shipper {
  protected readonly centsPerOunce: number = 0.39;

  getCost(state: ShipmentState): number {
    return +(state.weight * this.centsPerOunce).toFixed(1);
  }

  abstract getInstance(): Shipper;
}
