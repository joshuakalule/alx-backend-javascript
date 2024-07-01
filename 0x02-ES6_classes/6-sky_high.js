import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof sqft !== 'number' || typeof floors !== 'number') {
      throw TypeError('sqft and floors must be numbers');
    }
    super(sqft);
    this._floors = floors;
  }

  set floors(value) {
    if (typeof value !== 'number') {
      throw TypeError('floors must be a number');
    }
    this._floors = value;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
