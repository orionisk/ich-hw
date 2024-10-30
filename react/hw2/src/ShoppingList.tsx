import React from 'react';

interface ShoppingListProps {
  items: string[];
}

const ShoppingList: React.FC<ShoppingListProps> = ({ items }) => {
  return (
    <ul>
      {items.length > 0 ? (
        items.map((item, index) => <li key={index}>{item}</li>)
      ) : (
        <li>Список покупок пуст</li>
      )}
    </ul>
  );
};

export default ShoppingList;
