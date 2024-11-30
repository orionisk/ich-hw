// Задание 1
export const sumEvenNumbers = (numbers: number[]): number =>
  numbers.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);

// Задание 2
interface StringToBooleanFunction {
  (input: string): boolean;
}

export const isNotEmpty: StringToBooleanFunction = input => input.length > 0;

// Задание 3
type CompareStrings = (str1: string, str2: string) => boolean;

export const areStringsEqual: CompareStrings = (
  str1: string,
  str2: string
): boolean => str1 === str2;

// Задание 4
export const getLastElement = <T>(arr: T[]): T | undefined =>
  arr[arr.length - 1];

// Задание 5
export const makeTriple = <T>(a: T, b: T, c: T): T[] => [a, b, c];
