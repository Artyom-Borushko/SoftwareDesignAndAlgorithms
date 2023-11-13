import { ShipmentState } from './types/types';

export abstract class Shipment {
  protected state: ShipmentState;
  private static mockedId = 0;

  constructor(state: ShipmentState) {
    this.state = {...state, shipmentID: state.shipmentID || this.getShipmentID()};
  }

  abstract getInstance(): any;

  getShipmentID() {
    return ++Shipment.mockedId;
  }

  ship() {
    return `Shipment with the ID ${this.state.shipmentID} will be` +
      ` picked up from ${this.state.fromAddress}, ${this.state.fromZipCode}` +
      ` and shipped to ${this.state.toAddress}, ${this.state.toZipCode}\n`
  }
}
