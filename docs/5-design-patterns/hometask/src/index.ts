import { Client } from './client';
import { shipment } from './mocks/mocks';

const client = new Client(shipment);
console.log(client.getShipment().ship());
