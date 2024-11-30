import {
  greetUser,
  printPersonInfo,
  squareNumber,
  isEven,
  printStudentInfo,
  logMessage
} from './fns';

greetUser('Анна');

const person = {
  name: 'Иван',
  age: 25,
  city: 'Берлин'
};
printPersonInfo(person);

console.log(squareNumber(5));

console.log(isEven(4));
console.log(isEven(7));

const student = {
  name: 'Мария',
  grade: 95
};
printStudentInfo(student);

logMessage('Это тестовое сообщение');
