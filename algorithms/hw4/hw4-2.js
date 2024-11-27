function findKthElement(arr1, arr2, k) {
  let len1 = arr1.length;
  let len2 = arr2.length;

  if (len1 > len2) return findKthElement(arr2, arr1, k);

  if (len1 === 0) return arr2[k - 1];

  if (k === 1) return Math.min(arr1[0], arr2[0]);

  let i = Math.min(len1, Math.floor(k / 2));
  let j = k - i;

  if (arr1[i - 1] < arr2[j - 1]) {
    return findKthElement(arr1.slice(i), arr2, k - i);
  } else {
    return findKthElement(arr1, arr2.slice(j), k - j);
  }
}

const array1 = [100, 112, 256, 349, 770];
const array2 = [72, 86, 113, 119, 265, 445, 892];
const k = 7;

console.log(findKthElement(array1, array2, k));
