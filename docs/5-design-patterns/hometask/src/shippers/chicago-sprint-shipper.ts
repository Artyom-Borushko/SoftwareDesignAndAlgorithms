import { Shipper } from './shipper';
import { ShipmentType } from '../types/types';

export class ChicagoSprintShipper extends Shipper {
  private static shipper: ChicagoSprintShipper;
  private readonly letterChargePerOunce = 0.42;
  private readonly packageChargePerOunce = 0.20;

  getCost(shipmentType: ShipmentType, shipmentWeight: number): string {
    let shippingCost: number;
    if (shipmentType === ShipmentType.LETTER) {
      shippingCost = this.letterChargePerOunce * shipmentWeight;
    } else if (shipmentType === ShipmentType.PACKAGE) {
      shippingCost = this.packageChargePerOunce * shipmentWeight
    } else {
      shippingCost = this.packageChargePerOunce * shipmentWeight;
    }
    return shippingCost.toFixed(1);
  }

  getInstance(): ChicagoSprintShipper {
    if (!ChicagoSprintShipper.shipper) {
      ChicagoSprintShipper.shipper = new ChicagoSprintShipper();
    }
    return ChicagoSprintShipper.shipper;
  }
}
