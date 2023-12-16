import { Shipper } from './shipper';
import { ShipmentType } from '../types/types';

export class PacificParcelShipper extends Shipper {
  private static shipper: PacificParcelShipper;
  private readonly letterChargePerOunce = 0.51;
  private readonly packageChargePerOunce = 0.19;

  getCost(shipmentType: ShipmentType, shipmentWeight: number): string {
    let shippingCost: number;
    if (shipmentType === ShipmentType.LETTER) {
      shippingCost = this.letterChargePerOunce * shipmentWeight;
    } else if (shipmentType === ShipmentType.PACKAGE) {
      shippingCost = this.packageChargePerOunce * shipmentWeight
    } else {
      shippingCost = (this.packageChargePerOunce * 0.02) + (this.packageChargePerOunce * shipmentWeight);
    }
    return shippingCost.toFixed(1);
  }

  getInstance(): PacificParcelShipper {
    if (!PacificParcelShipper.shipper) {
      PacificParcelShipper.shipper = new PacificParcelShipper();
    }
    return PacificParcelShipper.shipper;
  }
}
