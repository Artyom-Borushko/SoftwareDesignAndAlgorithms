import { Shipment } from '../shipment';
import { Shipper } from '../shippers/shipper';
import { ShipmentState } from '../types/types';

export class Letter extends Shipment {
  private shipper: Shipper;
  private static shipment: Shipment;

  constructor(state: ShipmentState, shipper: Shipper) {
    super(state);
    this.state = state;
    this.shipper = shipper;
  }

  getInstance() {
    if (!Letter.shipment) {
      Letter.shipment = new Letter(this.state, this.shipper);
    }
    return Letter.shipment;
  }

  ship(): string {
    return super.ship() + `Cost = ${this.shipper.getCost(this.state)}`;
  }
}
