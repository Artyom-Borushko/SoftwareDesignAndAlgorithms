import { Shipper } from './shipper';

export class AirEastShipper extends Shipper {
  protected centsPerOunce = 0.39;

  getInstance() {
    return new AirEastShipper();
  }
}
