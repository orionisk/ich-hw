import {
  calculateTotal,
  displayId,
  filterOrdersByStatus,
  Order,
  updateStock
} from './fns';

console.log(calculateTotal(100, 2, 0.1));
console.log(calculateTotal(50, 3));

console.log(displayId('abc123'));
console.log(displayId(42));

const orders: Order[] = [
  { orderId: '1', amount: 100, status: 'pending' },
  { orderId: '2', amount: 200, status: 'shipped' },
  { orderId: '3', amount: 300, status: 'delivered' },
  { orderId: '4', amount: 400, status: 'pending' }
];

console.log(filterOrdersByStatus(orders, 'pending'));

const inventory = {
  apple: 10,
  banana: 15
};

const productInfo: [string, number, number] = ['apple', 2.5, 20];
console.log(updateStock(inventory, productInfo));
