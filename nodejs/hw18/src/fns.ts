// Задание 1
export type Admin = {
  name: string;
  permissions: string[];
};

export type User = {
  name: string;
  email: string;
};

export type AdminUser = Admin & User;

export const adminUser: AdminUser = {
  name: 'John Doe',
  permissions: ['read', 'write', 'delete'],
  email: 'john@example.com'
};

// Задание 2
export type Car = {
  make: string;
  model: string;
  engine: {
    type: string;
    horsepower: number;
  };
  year?: number;
};

export const printCarInfo = (car: Car): void => {
  console.log(`${car.make} ${car.model}`);
  console.log(`Engine: ${car.engine.type}, ${car.engine.horsepower} HP`);
  if (car.year) {
    console.log(`Year: ${car.year}`);
  }
};

// Задание 3
export interface Product {
  name: string;
  price: number;
}

export const calculateDiscount = (
  product: Product,
  discount: number
): number => {
  return product.price * (1 - discount / 100);
};

// Задание 4
export interface Employee {
  name: string;
  salary: number;
}

export const getSalaries = (employees: Employee[]): number[] => {
  return employees.map(employee => employee.salary);
};

// Задание 5
export interface Person {
  firstName: string;
  lastName: string;
}

export interface Student extends Person {
  grade: number;
}

export interface StringConcatenator {
  (str1: string, str2: string): string;
}

export const printStudentInfo = (student: Student): void => {
  console.log(
    `${student.firstName} ${student.lastName} - Grade: ${student.grade}`
  );
};

// Задание 6
export const concatStrings: StringConcatenator = (str1, str2) => {
  return str1 + str2;
};
