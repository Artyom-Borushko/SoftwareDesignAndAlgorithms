export abstract class Shipper {
  abstract getInstance(): Shipper;
  abstract getCost(): number;
}
