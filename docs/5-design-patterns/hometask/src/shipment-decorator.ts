// import { Shipment } from './shipments/shipment';
// import { ShipmentState } from './types/types';
//
// export class ShipmentDecorator {
//   private shipment: Shipment;
//   private state: ShipmentState
//
//   constructor(shipment: Shipment, state: ShipmentState) {
//     this.shipment = shipment;
//     this.state = state;
//   }
//
//   private getAdditionalSpecialCodes() {
//     let additionalSpecialCodes = '';
//     if (this.state.isFragile) additionalSpecialCodes += '\n**MARK FRAGILE**';
//     if (this.state.doNotLeave) additionalSpecialCodes += '\n**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**';
//     if (this.state.returnReceiptRequested) additionalSpecialCodes += '\n**MARK RETURN RECEIPT REQUESTED**';
//     return additionalSpecialCodes;
//   }
//
//   ship(): string {
//     return this.shipment.ship() + this.getAdditionalSpecialCodes();
//   }
// }
