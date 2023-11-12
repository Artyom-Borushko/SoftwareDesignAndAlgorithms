import { Client } from './client';
import { shipment } from './mocks/mocks';

const client = new Client(shipment);
const shipper = client.getShipper();
const shipmentDetails = client.shipmentInstance.ship(shipper);
console.log(shipmentDetails);
