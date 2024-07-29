function deepFlattenArray(arrayOfArrays) {
  return arrayOfArrays.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? deepFlattenArray(val) : val),
    []
  );
}

function flattenArray(arrayOfArrays) {
  return arrayOfArrays.reduce((acc, val) => acc.concat(val), []);
}

console.log(deepFlattenArray([[[1, 2], [3, [4, 5], 6], 7], 8])); // outputs: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(flattenArray([[[1, 2], [3, [4, 5], 6], 7], 8])); // outputs: [[1, 2], [3, [4, 5], 6], 7, 8]
