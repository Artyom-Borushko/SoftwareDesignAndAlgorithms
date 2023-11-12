import { Shipper } from './shipper';

export class ChicagoSprintShipper extends Shipper {
  protected centsPerOunce = 0.42;

  getInstance() {
    return new ChicagoSprintShipper();
  }
}
