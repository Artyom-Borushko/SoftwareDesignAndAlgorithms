import { ShipmentInterface } from './types/types';
import { Shipment } from './shipments/shipment';

export class Client {
  private readonly shipment: ShipmentInterface;

  constructor(shipment: ShipmentInterface) {
    this.shipment = shipment;
  }

  public run(): string {
    const shipment = new Shipment(this.shipment);
    shipment.setFromZipCode('45678');
    return shipment.ship();
  }
}
