import { Shipper } from './shipper';

export class AirEastShipper extends Shipper {
  private letterShipmentCost = 0.39;
  private packageShipmentCost = 0.25;
  private static shipper: Shipper;

  getInstance() {
    if (!AirEastShipper.shipper) {
      AirEastShipper.shipper = new AirEastShipper();
    }
    return AirEastShipper.shipper;
  }

  getLetterShipmentCost(weight: number): number {
    return weight * this.letterShipmentCost;
  }

  getPackageShipmentCost(weight: number): number {
    return weight * this.packageShipmentCost;
  }

  getOversizeShipmentCost(weight: number): number {
    return this.getPackageShipmentCost(weight) + 10;
  }
}
