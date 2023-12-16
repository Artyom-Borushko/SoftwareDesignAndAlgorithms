import { ShipmentInterface, ShipmentResult } from '../types/types';
import { ChicagoSprintShipper } from '../shippers/chicago-sprint-shipper';
import { Shipper } from '../shippers/shipper';
import { AirEastShipper } from '../shippers/air-east-shipper';
import { PacificParcelShipper } from '../shippers/pacific-parcel-shipper';

export abstract class Shipment {
  protected shipment: ShipmentInterface;
  protected shipper: Shipper;
  private static mockedId = 0;
  public static readonly maxLetterWeight = 15;
  public static readonly maxPackageWeight = 160;

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

  abstract getInstance(shipment: ShipmentInterface): Shipment;
  abstract ship(): ShipmentResult;
}
