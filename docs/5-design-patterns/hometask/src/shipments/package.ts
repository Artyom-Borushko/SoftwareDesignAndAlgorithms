import { Shipment } from './shipment';
import { ShipmentInterface, ShipmentResult, ShipmentType } from '../types/types';

export class Package extends Shipment {
  private static shipment: Package;

  getInstance(shipment: ShipmentInterface) {
    if (!Package.shipment) {
      Package.shipment = new Package(shipment);
    }
    return Package.shipment;
  }

  ship(): ShipmentResult {
    const shippingCost = this.shipper.getCost(ShipmentType.PACKAGE, this.shipment.weight);
    return {
      shippedShipment: this.shipment,
      shippingCost: shippingCost,
    };
  }
}
