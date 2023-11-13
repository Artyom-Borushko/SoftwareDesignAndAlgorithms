import { Shipper } from './shipper';

export class PacificParcelShipper extends Shipper {
  private letterShipmentCost = 0.51;
  private packageShipmentCost = 0.19;
  private static shipper: Shipper;

  getInstance() {
    if (!PacificParcelShipper.shipper) {
      PacificParcelShipper.shipper = new PacificParcelShipper();
    }
    return PacificParcelShipper.shipper;
  }

  getLetterShipmentCost(weight: number): number {
    return weight * this.letterShipmentCost;
  }

  getPackageShipmentCost(weight: number): number {
    return weight * this.packageShipmentCost;
  }

  getOversizeShipmentCost(weight: number): number {
    return weight * (this.packageShipmentCost + 0.02);
  }
}
