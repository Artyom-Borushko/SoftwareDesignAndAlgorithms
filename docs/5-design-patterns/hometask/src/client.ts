import { ShipmentState } from './types/types';
import { Shipment } from './shipment';

export class Client {
  private shipment: ShipmentState;
  public shipmentInstance: Shipment;

  constructor(shipment: ShipmentState) {
    this.shipment = shipment;
    this.shipmentInstance = new Shipment(this.shipment);
  }

}
