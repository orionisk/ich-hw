import React from 'react';

interface OrderStatusProps {
  orderId: number;
  status: string;
}

const OrderStatus: React.FC<OrderStatusProps> = ({ orderId, status }) => {
  return (
    <p>
      Заказ #{orderId}: {status}
    </p>
  );
};

export default OrderStatus;
