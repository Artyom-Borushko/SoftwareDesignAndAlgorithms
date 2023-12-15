import { Shipper } from './shipper';

export class PacificParcelShipper extends Shipper {
  private static shipper: PacificParcelShipper;

  getCost(): number {
    return 0.51;
  }

  getInstance(): PacificParcelShipper {
    if (!PacificParcelShipper.shipper) {
      PacificParcelShipper.shipper = new PacificParcelShipper();
    }
    return PacificParcelShipper.shipper;
  }
}
