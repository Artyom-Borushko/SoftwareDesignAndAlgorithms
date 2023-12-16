import { ShipmentDecorator } from './shipment-decorator';
import { ShipmentResult } from '../types/types';

export class FragileDecorator extends ShipmentDecorator {
  public ship(): ShipmentResult {
    const shipped = super.ship();
    if (!shipped.tags) shipped.tags = [];
    shipped.tags.push('**MARK FRAGILE**');

    return {
      ...shipped,
    };
  }
}
