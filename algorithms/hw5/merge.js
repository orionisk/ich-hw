export function merge(left, right) {
  const sortedArray = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    sortedArray.push(left[i]);
    i++;
  }

  while (j < right.length) {
    sortedArray.push(right[j]);
    j++;
  }

  return sortedArray;
}
