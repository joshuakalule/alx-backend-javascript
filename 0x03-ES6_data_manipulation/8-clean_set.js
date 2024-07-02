export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  return [...set].reduce((final, word, idx) => {
    let result = final;
    if (word.startsWith(startString)) {
      result = word.substring(3);
      if (idx !== 0) {
        result = `-${result}`;
      }
      result = `${final}${result}`;
    }
    return result;
  }, '');
}
