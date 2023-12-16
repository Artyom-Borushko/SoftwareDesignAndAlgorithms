import { ShipmentInterface, ShipmentResult } from './types/types';
import { ShipmentFactory } from './shipments/shipment-factory';
import { FragileDecorator } from './decorators/fragile-decorator';
import { DoNotLeaveDecorator } from './decorators/do-not-leave-decorator';
import { ReturnReceiptRequestedDecorator } from './decorators/return-receipt-requested-decorator';

export class Client {
  private readonly shipment: ShipmentInterface;
  private readonly fragileMarks: Array<string>;
  private decoratorsToApply: Array<object> = [];

  constructor(shipment: ShipmentInterface, fragileMarks: Array<string>) {
    this.shipment = shipment;
    this.fragileMarks = fragileMarks;
  }

  private fragileMarksToDecorators(): void {
    this.decoratorsToApply = this.fragileMarks.map((fragileMark: string) => {
      if (fragileMark === 'fragile') {
        return FragileDecorator;
      } else if (fragileMark === 'return receipt') {
        return ReturnReceiptRequestedDecorator;
      } else {
        return DoNotLeaveDecorator;
      }
    })
  }

  public run(): string {
    const shipment = ShipmentFactory.getInstance(this.shipment);
    shipment.setFromZipCode('45678');

    this.fragileMarksToDecorators();
    const decoratedShipment: any = this.decoratorsToApply.reduce(
      (accumulator, Decorator: any) => new Decorator(accumulator), shipment);
    const { shippedShipment, shippingCost, tags }
      = decoratedShipment.ship() as ShipmentResult;

    return `Shipment with the ID ${shippedShipment.shipmentID} will be` +
      ` picked up from ${shippedShipment.fromAddress}, ${shippedShipment.fromZipCode}` +
      ` and shipped to ${shippedShipment.toAddress}, ${shippedShipment.toZipCode}\n` +
      `Cost = ${shippingCost}\n` +
      `${tags ? tags.join('\n') : ''}`;
  }
}
