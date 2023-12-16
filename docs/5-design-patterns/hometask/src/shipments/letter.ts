import { Shipment } from './shipment';
import { ShipmentInterface, ShipmentResult, ShipmentType } from '../types/types';

export class Letter extends Shipment {
  private static shipment: Letter;

  getInstance(shipment: ShipmentInterface) {
    if (!Letter.shipment) {
      Letter.shipment = new Letter(shipment);
    }
    return Letter.shipment;
  }

  ship(): ShipmentResult {
    const shippingCost = this.shipper.getCost(ShipmentType.LETTER, this.shipment.weight);
    return {
      shippedShipment: this.shipment,
      shippingCost: shippingCost,
    };
  }
}
