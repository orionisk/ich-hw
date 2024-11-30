interface Person {
  name: string;
  age: number;
  city: string;
}

interface Student {
  name: string;
  grade: number;
}

export const greetUser = (name: string): void => {
  console.log(`Привет, ${name}!`);
};

export const printPersonInfo = (person: Person): void => {
  console.log(
    `Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`
  );
};

export const squareNumber = (num: number): number => {
  return num * num;
};

export const isEven = (num: number): boolean => {
  return num % 2 === 0;
};

export const printStudentInfo = (student: Student): void => {
  console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
};

export const logMessage = (message: string): void => {
  console.log(message);
};
