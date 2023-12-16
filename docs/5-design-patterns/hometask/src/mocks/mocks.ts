import { ShipmentInterface } from '../types/types';

export const mockShipment: ShipmentInterface = {
  shipmentID: 123,
  weight: 999,
  fromAddress: 'Broadway, NY, NY',
  fromZipCode: '12345',
  toAddress: 'Abcd, CA, CA',
  toZipCode: '56789',
};

export const mockFragileMarks = ['fragile', 'do not leave', 'return receipt'];
