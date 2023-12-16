import { mockFragileMarks, mockShipment } from './mocks/mocks';
import { Client } from './client';

console.log(new Client(mockShipment, mockFragileMarks).run());
