export interface ShipmentInterface {
  shipmentID: number;
  weight: number;
  fromAddress: string;
  fromZipCode: string;
  toAddress: string;
  toZipCode: string;
  // isFragile: boolean;
  // doNotLeave: boolean;
  // returnReceiptRequested: boolean;
}
