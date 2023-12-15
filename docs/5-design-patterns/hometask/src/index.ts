import { mockShipment } from './mocks/mocks';
import { Client } from './client';

console.log(new Client(mockShipment).run());
