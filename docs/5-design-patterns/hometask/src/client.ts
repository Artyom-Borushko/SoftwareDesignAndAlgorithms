import { ShipmentInterface } from './types/types';
import { ShipmentFactory } from './shipments/shipment-factory';

export class Client {
  private readonly shipment: ShipmentInterface;

  constructor(shipment: ShipmentInterface) {
    this.shipment = shipment;
  }

  public run(): string {
    const shipment = ShipmentFactory.getInstance(this.shipment);
    shipment.setFromZipCode('45678');
    const { shippedShipment, shippingCost } = shipment.ship();
    return `Shipment with the ID ${shippedShipment.shipmentID} will be` +
      ` picked up from ${shippedShipment.fromAddress}, ${shippedShipment.fromZipCode}` +
      ` and shipped to ${shippedShipment.toAddress}, ${shippedShipment.toZipCode}\n` +
      `Cost = ${shippingCost}`;
  }
}
