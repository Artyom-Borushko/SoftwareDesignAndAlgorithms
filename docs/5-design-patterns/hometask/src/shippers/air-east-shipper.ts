import { Shipper } from './shipper';
import { ShipmentType } from '../types/types';

export class AirEastShipper extends Shipper {
  private static shipper: AirEastShipper;
  private readonly letterChargePerOunce = 0.39;
  private readonly packageChargePerOunce = 0.25;

  getCost(shipmentType: ShipmentType, shipmentWeight: number): string {
    let shippingCost: number;
    if (shipmentType === ShipmentType.LETTER) {
      shippingCost = this.letterChargePerOunce * shipmentWeight;
    } else if (shipmentType === ShipmentType.PACKAGE) {
      shippingCost = this.packageChargePerOunce * shipmentWeight
    } else {
      shippingCost = (this.packageChargePerOunce * shipmentWeight) + 10;
    }
    return shippingCost.toFixed(1);
  }

  getInstance(): AirEastShipper {
    if (!AirEastShipper.shipper) {
      AirEastShipper.shipper = new AirEastShipper();
    }
    return AirEastShipper.shipper;
  }
}
