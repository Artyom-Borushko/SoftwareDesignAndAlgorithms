import { Shipper } from './shipper';

export class ChicagoSprintShipper extends Shipper {
  private letterShipmentCost = 0.42;
  private packageShipmentCost = 0.20;
  private static shipper: Shipper;

  getInstance() {
    if (!ChicagoSprintShipper.shipper) {
      ChicagoSprintShipper.shipper = new ChicagoSprintShipper();
    }
    return ChicagoSprintShipper.shipper;
  }

  getLetterShipmentCost(weight: number): number {
    return weight * this.letterShipmentCost;
  }

  getPackageShipmentCost(weight: number): number {
    return weight * this.packageShipmentCost;
  }

  getOversizeShipmentCost(weight: number): number {
    return this.getLetterShipmentCost(weight);
  }
}
