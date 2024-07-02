export default function updateUniqueItems(map) {
  const array = Array.from(map).filter((x) => x[1] === 1);
  if (array.length === 0) {
    throw new Error('Cannot process');
  }
  array.forEach((x) => map.set(x[0], 100));
  return map;
}
