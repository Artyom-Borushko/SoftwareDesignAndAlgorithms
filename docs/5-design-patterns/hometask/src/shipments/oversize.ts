// import { Shipment } from './shipment';
// import { Shipper } from '../shippers/shipper';
// import { ShipmentState } from '../types/types';
//
// export class Oversize extends Shipment {
//   private shipper: Shipper;
//   private static shipment: Shipment;
//
//   constructor(state: ShipmentState, shipper: Shipper) {
//     super(state);
//     this.state = state;
//     this.shipper = shipper;
//   }
//
//   getInstance() {
//     if (!Oversize.shipment) {
//       Oversize.shipment = new Oversize(this.state, this.shipper);
//     }
//     return Oversize.shipment;
//   }
//
//   ship(): string {
//     return super.ship() + `Cost = ${this.shipper.getCost(this.state)}`;
//   }
// }
