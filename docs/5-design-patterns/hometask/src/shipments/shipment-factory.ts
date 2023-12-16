import { Shipment } from './shipment';
import { ShipmentInterface } from '../types/types';
import { Letter } from './letter';
import { Package } from './package';
import { Oversize } from './oversize';

export class ShipmentFactory {
  static getInstance(shipment: ShipmentInterface): Shipment {
    if (shipment.weight <= Shipment.maxLetterWeight) {
      return new Letter(shipment);
    } else if (shipment.weight <= Shipment.maxPackageWeight) {
      return new Package(shipment);
    } else {
      return new Oversize(shipment);
    }
  }
}
