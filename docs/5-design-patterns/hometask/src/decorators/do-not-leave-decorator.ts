import { ShipmentDecorator } from './shipment-decorator';
import { ShipmentResult } from '../types/types';

export class DoNotLeaveDecorator extends ShipmentDecorator {
  public ship(): ShipmentResult {
    const shipped = super.ship();
    if (!shipped.tags) shipped.tags = [];
    shipped.tags.push('**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**');

    return {
      ...shipped,
    };
  }
}
