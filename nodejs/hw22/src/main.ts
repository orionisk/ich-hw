import { capitalize, reverseString } from './stringUtils';
import { Finance } from './finance';
import { UserManagement } from './userManagement';
import { generateFibonacci, generatePrimeNumbers } from './sequenceUtils';

console.log(capitalize('hello'));
console.log(reverseString('typescript'));

const loanCalc = new Finance.LoanCalculator();
const taxCalc = new Finance.TaxCalculator();

const monthlyPayment = loanCalc.calculateMonthlyPayment(100000, 5, 10);
console.log(`Monthly loan payment: ${monthlyPayment.toFixed(2)}`);

const incomeTax = taxCalc.calculateIncomeTax(50000, 20);
console.log(`Income tax: ${incomeTax.toFixed(2)}`);

const admin = new UserManagement.Admin.AdminUser(
  'John Doe',
  'john@example.com'
);
console.log(`Admin name: ${admin.getName()}`);
console.log(`Is super admin: ${admin.getIsSuperAdmin()}`);
admin.setIsSuperAdmin(true);
console.log(`Is super admin: ${admin.getIsSuperAdmin()}`);

console.log('Fibonacci sequence:', generateFibonacci(100));
console.log('Prime numbers:', generatePrimeNumbers(50));
