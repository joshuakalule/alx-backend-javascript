export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  let result = '';
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
    }
  }

  return result.slice(0, -1);
}
