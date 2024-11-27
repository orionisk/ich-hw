// 2. Реализуйте программу, которая принимает несколько файлов, каждый из которых содержит отсортированный список чисел, и объединяет их в один отсортированный файл, используя сортировку слиянием.

import fs from 'fs';
import { merge } from './merge.js';

function mergeSortedFiles(fileNames, outputFile) {
  const sortedArrays = [];

  for (const fileName of fileNames) {
    const data = fs.readFileSync(fileName, 'utf8');
    const numbers = data.split(' ').map(Number);
    sortedArrays.push(numbers);
  }

  while (sortedArrays.length > 1) {
    const arr1 = sortedArrays.shift();
    const arr2 = sortedArrays.shift();
    sortedArrays.push(merge(arr1, arr2));
  }

  if (sortedArrays.length > 0) {
    fs.writeFileSync(outputFile, sortedArrays[0].join(' '));
  } else {
    fs.writeFileSync(outputFile, '');
  }
}

mergeSortedFiles(['file1.txt', 'file2.txt', 'file3.txt'], 'output.txt');
