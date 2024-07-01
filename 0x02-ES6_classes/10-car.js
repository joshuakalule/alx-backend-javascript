export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  set brand(value) {
    this._brand = value;
  }

  get brand() {
    return this._brand;
  }

  set motor(value) {
    this._motor = value;
  }

  get motor() {
    return this._motor;
  }

  set color(value) {
    this._color = value;
  }

  get color() {
    return this._color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const ClonedCar = this.constructor[Symbol.species];
    return new ClonedCar();
  }
}
