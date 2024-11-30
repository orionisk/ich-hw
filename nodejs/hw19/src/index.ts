import {
  sumEvenNumbers,
  isNotEmpty,
  areStringsEqual,
  getLastElement,
  makeTriple
} from './fns.js';

console.log('sumEvenNumbers:');
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));

console.log('\nisNotEmpty:');
console.log(isNotEmpty(''));
console.log(isNotEmpty('hello'));

console.log('\nareStringsEqual:');
console.log(areStringsEqual('hello', 'hello'));
console.log(areStringsEqual('hello', 'world'));

console.log('\ngetLastElement:');
console.log(getLastElement([1, 2, 3]));
console.log(getLastElement(['a', 'b', 'c']));

console.log('\nmakeTriple:');
console.log(makeTriple(1, 2, 3));
console.log(makeTriple('a', 'b', 'c'));
