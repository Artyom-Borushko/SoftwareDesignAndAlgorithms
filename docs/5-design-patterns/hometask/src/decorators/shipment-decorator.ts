import { Shipment } from '../shipments/shipment';
import { ShipmentResult } from '../types/types';

export abstract class ShipmentDecorator {
  protected shipmentToDecorate: Shipment;

  constructor(shipmentToDecorate: Shipment) {
    this.shipmentToDecorate = shipmentToDecorate;
  }

  public ship(): ShipmentResult {
    return this.shipmentToDecorate.ship();
  }
}
