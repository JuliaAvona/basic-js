function calculateDepth(arr) {
  let count = 1;
  let first = arr;
  let second = arr.flat(count);
  while (JSON.stringify(first) != JSON.stringify(second)) {
    count++;
  }
  return count;
}

console.log(calculateDepth([1, 2, [3, 4, [5, 6]]]));