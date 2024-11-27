// Переписать самостоятельно то, что написали во время занятия: заново написать сортировку слиянием, опираясь на текстовое описание.

import { merge } from './merge.js';

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  const leftSorted = mergeSort(leftHalf);
  const rightSorted = mergeSort(rightHalf);

  return merge(leftSorted, rightSorted);
}

// Когда ваш код заработает, запустите его несколько раз на массивах с разными значениями: пустыми, с одинаковыми данными, отсортированными в обратном порядке, с четным и нечетным количеством элементов и так далее. Убедитесь, что все работает.

function runTests() {
  console.log('Пустой массив:', mergeSort([]));
  console.log('Один элемент:', mergeSort([1]));
  console.log('Одинаковые элементы:', mergeSort([3, 3, 3, 1, 2, 2]));
  console.log('Обратный порядок:', mergeSort([5, 4, 3, 2, 1]));
  console.log('Четное количество:', mergeSort([64, 34, 25, 12, 22, 11]));
  console.log('Нечетное количество:', mergeSort([9, 5, 7, 1, 3]));
}

runTests();
