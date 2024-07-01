export default class Building {
  constructor(sqft) {
    if (new.target !== Building) {
      if (!('evacuationWarningMessage' in this)) {
        // console.log('Not there');
        throw Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    if (typeof sqft !== 'number') {
      throw TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw TypeError('sqft must be a number');
    }
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }
}
