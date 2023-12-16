export interface ShipmentInterface {
  shipmentID: number;
  weight: number;
  fromAddress: string;
  fromZipCode: string;
  toAddress: string;
  toZipCode: string;
}

export enum ShipmentType {
  LETTER ='Letter',
  PACKAGE = 'Package',
  OVERSIZE = 'Oversize'
}

export interface ShipmentResult {
  shippedShipment: ShipmentInterface,
  shippingCost: string,
  tags?: Array<string>,
}
