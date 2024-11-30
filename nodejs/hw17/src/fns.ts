export const calculateTotal = (
  price: number,
  quantity: number,
  discount: number = 0
): number => {
  return price * quantity * (1 - discount);
};

type ID = string | number;

export const displayId = (id: ID): string => {
  if (typeof id === 'string') {
    return id.toUpperCase();
  }
  return (id * 10).toString();
};

type OrderStatus = 'pending' | 'shipped' | 'delivered';

export interface Order {
  orderId: string;
  amount: number;
  status: OrderStatus;
}

export const filterOrdersByStatus = (
  orders: Order[],
  status: OrderStatus
): Order[] => {
  return orders.filter(order => order.status === status);
};

type ProductInfo = [string, number, number];
type Inventory = Record<string, number>;

export const updateStock = (
  inventory: Inventory,
  productInfo: ProductInfo
): Inventory => {
  const [productName, , stockQuantity] = productInfo;
  return {
    ...inventory,
    [productName]: stockQuantity
  };
};
