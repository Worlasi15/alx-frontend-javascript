export default function hasValuesFromArray(set, arr) {
  return arr.every(function(value) {
    return set.has(value);
  });
}
