function quickSortRecursive(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  const equal = [];

  for (const element of arr) {
    if (element < pivot) left.push(element);
    else if (element > pivot) right.push(element);
    else equal.push(element);
  }

  return [...quickSortRecursive(left), ...equal, ...quickSortRecursive(right)];
}

function quickSortIterative(arr) {
  const stack = [];
  stack.push(0);
  stack.push(arr.length - 1);

  while (stack.length > 0) {
    const end = stack.pop();
    const start = stack.pop();

    if (start >= end) continue;

    const pivotIndex = partition(arr, start, end);

    stack.push(start);
    stack.push(pivotIndex - 1);

    stack.push(pivotIndex + 1);
    stack.push(end);
  }

  return arr;
}

function partition(arr, start, end) {
  const pivot = arr[end];
  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
  return i + 1;
}

const arr1 = [45, 78, 23, 56, 89, 12, 4, 67, 33, 99];
const arr2 = [...arr1];

console.log('Original array:', arr1);
console.log('Recursive quicksort:', quickSortRecursive(arr1));
console.log('Iterative quicksort:', quickSortIterative(arr2));
