import { Shipment } from './shipment';
import { ShipmentInterface, ShipmentResult, ShipmentType } from '../types/types';

export class Oversize extends Shipment {
  private static shipment: Oversize;

  getInstance(shipment: ShipmentInterface) {
    if (!Oversize.shipment) {
      Oversize.shipment = new Oversize(shipment);
    }
    return Oversize.shipment;
  }

  ship(): ShipmentResult {
    const shippingCost = this.shipper.getCost(ShipmentType.OVERSIZE, this.shipment.weight);
    return {
      shippedShipment: this.shipment,
      shippingCost: shippingCost,
    };
  }
}
