import { Shipper } from './shipper';

export class AirEastShipper extends Shipper {
  private static shipper: AirEastShipper;

  getCost(): number {
    return 0.39;
  }

  getInstance(): AirEastShipper {
    if (!AirEastShipper.shipper) {
      AirEastShipper.shipper = new AirEastShipper();
    }
    return AirEastShipper.shipper;
  }
}
