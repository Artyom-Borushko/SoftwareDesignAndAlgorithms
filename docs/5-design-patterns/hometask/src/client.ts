import { ShipmentState } from './types/types';
import { Shipment } from './shipment';
import { Shipper } from './shippers/shipper';
import { ChicagoSprintShipper } from './shippers/chicago-sprint-shipper';
import { PacificParcelShipper } from './shippers/pacific-parcel-shipper';
import { AirEastShipper } from './shippers/air-east-shipper';

export class Client {
  private shipment: ShipmentState;
  public shipmentInstance: Shipment;

  constructor(shipment: ShipmentState) {
    this.shipment = shipment;
    this.shipmentInstance = new Shipment(this.shipment);
  }


  private zipCodesToShipperMapping = {
    airEast: [1, 2, 3],
    chicagoSprint: [4, 5, 6],
    pacificParcel: [7, 8, 9]
  };

  getShipper(): Shipper {
    const { fromZipCode } = this.shipment;
    const { chicagoSprint, pacificParcel } = this.zipCodesToShipperMapping;
    const zipCodeNumber = +fromZipCode[0];

    switch (true) {
      case chicagoSprint.includes(zipCodeNumber):
        return new ChicagoSprintShipper().getInstance();
      case pacificParcel.includes(zipCodeNumber):
        return new PacificParcelShipper().getInstance();
      default:
        return new AirEastShipper().getInstance();
    }
  }
}
