import { ShipmentInterface } from '../types/types';
import { ChicagoSprintShipper } from '../shippers/chicago-sprint-shipper';
import { Shipper } from '../shippers/shipper';
import { AirEastShipper } from '../shippers/air-east-shipper';
import { PacificParcelShipper } from '../shippers/pacific-parcel-shipper';

export class Shipment {
  private shipment: ShipmentInterface;
  private static mockedId = 0;
  private shipper: Shipper;

  constructor(shipment: ShipmentInterface) {
    this.shipment = {...shipment, shipmentID: shipment.shipmentID || this.getShipmentID()};
    this.shipper = this.getShipper(this.shipment.fromZipCode);
  }

  private getShipmentID(): number {
    return ++Shipment.mockedId;
  }

  private getShipper(fromZipCode: string | undefined): Shipper {
    if (!fromZipCode) return new AirEastShipper().getInstance();
    if (fromZipCode.startsWith('1') || fromZipCode.startsWith('2') || fromZipCode.startsWith('3')) {
      return new AirEastShipper().getInstance();
    } else if (fromZipCode.startsWith('4') || fromZipCode.startsWith('5') || fromZipCode.startsWith('6')) {
      return new ChicagoSprintShipper().getInstance();
    } else {
      return new PacificParcelShipper().getInstance();
    }
  }

  public setFromZipCode(fromZipCode: string): void {
    this.shipment.fromZipCode = fromZipCode;
    this.shipper = this.getShipper(this.shipment.fromZipCode);
  }

  public ship(): string {
    const shippingCost = this.shipment.weight * this.shipper.getCost();
    return `Shipment with the ID ${this.shipment.shipmentID} will be` +
      ` picked up from ${this.shipment.fromAddress}, ${this.shipment.fromZipCode}` +
      ` and shipped to ${this.shipment.toAddress}, ${this.shipment.toZipCode}\n` +
      `Cost = ${shippingCost.toFixed(1)}`;
  }
}
