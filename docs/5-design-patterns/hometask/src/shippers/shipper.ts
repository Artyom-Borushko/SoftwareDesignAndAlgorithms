import { ShipmentType } from '../types/types';

export abstract class Shipper {
  abstract getInstance(): Shipper;
  abstract getCost(shipmentType: ShipmentType, shipmentWeight: number): string;
}
