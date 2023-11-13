import { Client } from './client';
import { shipment } from './mocks/mocks';
import { ShipmentDecorator } from './shipment-decorator';

const client = new Client(shipment);
console.log(new ShipmentDecorator(client.getShipment(), shipment).ship());
