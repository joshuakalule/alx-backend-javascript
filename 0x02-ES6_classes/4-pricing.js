import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number'
    || currency instanceof Currency !== true) {
      throw new Error('Not a number or currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  // getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // setters
  set amount(amount) {
    if (typeof (amount) !== 'number') {
      throw new Error('Not a number or currency');
    }
    this._amount = amount;
  }

  set currency(currency) {
    if (currency instanceof Currency !== true) {
      throw new Error('Not a number or currency');
    }
    this._currency = currency;
  }

  // methods
  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  // static method
  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number'
    || typeof (conversionRate) !== 'number') {
      throw new Error('Not a number');
    }
    return amount * conversionRate;
  }
}
