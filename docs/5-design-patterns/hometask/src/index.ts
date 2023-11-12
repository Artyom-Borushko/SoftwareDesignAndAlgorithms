import { Client } from './client';
import { shipment } from './mocks/mocks';

const client = new Client(shipment);
const shipmentDetails = client.shipmentInstance.ship();
console.log(shipmentDetails);
