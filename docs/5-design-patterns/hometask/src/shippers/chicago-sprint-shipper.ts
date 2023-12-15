import { Shipper } from './shipper';

export class ChicagoSprintShipper extends Shipper {
  private static shipper: ChicagoSprintShipper;

  getCost(): number {
    return 0.42;
  }

  getInstance(): ChicagoSprintShipper {
    if (!ChicagoSprintShipper.shipper) {
      ChicagoSprintShipper.shipper = new ChicagoSprintShipper();
    }
    return ChicagoSprintShipper.shipper;
  }
}
