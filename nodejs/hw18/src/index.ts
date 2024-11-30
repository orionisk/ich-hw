import {
  adminUser,
  calculateDiscount,
  Car,
  concatStrings,
  Employee,
  getSalaries,
  printCarInfo,
  printStudentInfo,
  Product,
  Student
} from './fns';

console.log('Admin User:', adminUser);

const car: Car = {
  make: 'Toyota',
  model: 'Camry',
  engine: {
    type: 'V6',
    horsepower: 301
  },
  year: 2024
};

console.log('\nCar Information:');
printCarInfo(car);

const product: Product = {
  name: 'Laptop',
  price: 1000
};

console.log('\nProduct with Discount:');
console.log(`New price: $${calculateDiscount(product, 20)}`);

const employees: Employee[] = [
  { name: 'Alice', salary: 50000 },
  { name: 'Bob', salary: 60000 },
  { name: 'Charlie', salary: 75000 }
];

console.log('\nEmployee Salaries:');
console.log(getSalaries(employees));

const student: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  grade: 95
};

console.log('\nStudent Information:');
printStudentInfo(student);

console.log('\nConcatenated Strings:');
console.log(concatStrings('Hello, ', 'World!'));
