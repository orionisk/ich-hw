function findKthElement(arr1, arr2, k) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  while (mergedArray.length < k) {
    if (i < arr1.length && (j >= arr2.length || arr1[i] < arr2[j])) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  return mergedArray[k - 1];
}

const arr1 = [100, 112, 256, 349, 770];
const arr2 = [72, 86, 113, 119, 265, 445, 892];
const k = 7;

console.log(findKthElement(arr1, arr2, k));
