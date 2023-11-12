import { Shipper } from './shipper';

export class PacificParcelShipper extends Shipper {
  protected centsPerOunce = 0.51;

  getInstance() {
    return new PacificParcelShipper();
  }
}
