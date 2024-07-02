export default function updateUniqueItems(mapObj) {
  return mapObj.forEach((value, key, map) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
