/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
/* eslint-enable no-param-reassign */
