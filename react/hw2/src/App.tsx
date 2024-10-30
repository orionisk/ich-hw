import Greeting from './Greeting';
import ShoppingList from './ShoppingList';
import OrderStatus from './OrderStatus';

function App() {
  const name = 'Иван';
  const items = ['Яблоки', 'Бананы', 'Груши'];
  const orders = [{ orderId: 123, status: 'в пути' }];

  return (
    <div className='container mx-auto space-y-10 text-3xl py-20'>
      <Greeting name={name} />
      <ShoppingList items={items} />
      {orders.map(order => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </div>
  );
}

export default App;
