export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new Error('Name must be a string');
    } else if (typeof (length) !== 'number') {
      throw new Error('Length must be a number');
    } else if (typeof (students) !== 'object') {
      throw new Error('Students must be an array object');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = value;
  }

  set students(value) {
    if (typeof value !== 'object') {
      throw TypeError('Students must be an array object');
    }
    this._students = value;
  }
}
