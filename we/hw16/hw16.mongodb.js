use('ich');
//* 1. Найдите средний возраст из коллекции ich.US_Adult_Income
db.US_Adult_Income.aggregate([
  { $group: { _id: null, avgAge: { $avg: '$age' } } }
]);

//* 2. Поменяв подключение к базе данных, создать коллекцию orders_NAME (для уникальности - добавим ваше имя в название) со свойствами id, customer, product, amount, city, используя следующие данные:

//* 1 Olga Apple 15.55 Berlin
//* 2 Anna Apple 10.05 Madrid
//* 3 Olga Kiwi 9.6 Berlin
//* 4 Anton Apple 20 Roma
//* 5 Olga Banana 8 Madrid
//* 6 Petr Orange 18.3 Paris

use('ich_edit');
db.createCollection('100624_orders_Vadym');
db['100624_orders_Vadym'].insertMany([
  {
    id: 1,
    customer: 'Olga',
    product: 'Apple',
    amount: 15.55,
    city: 'Berlin'
  },
  {
    id: 2,
    customer: 'Anna',
    product: 'Apple',
    amount: 10.05,
    city: 'Madrid'
  },
  {
    id: 3,
    customer: 'Olga',
    product: 'Kiwi',
    amount: 9.6,
    city: 'Berlin'
  },
  {
    id: 4,
    customer: 'Anton',
    product: 'Apple',
    amount: 20.0,
    city: 'Roma'
  },
  {
    id: 5,
    customer: 'Olga',
    product: 'Banana',
    amount: 8.0,
    city: 'Madrid'
  },
  {
    id: 6,
    customer: 'Petr',
    product: 'Orange',
    amount: 18.3,
    city: 'Paris'
  }
]);

//* 3. Найти сколько всего было совершено покупок
db['100624_orders_Vadym'].countDocuments();

//* 4. Найти сколько всего раз были куплены яблоки
db['100624_orders_Vadym'].countDocuments({ product: 'Apple' });

//* 5. Вывести идентификаторы трех самые дорогих покупок
db['100624_orders_Vadym']
  .find({}, { id: 1, _id: 0 })
  .sort({ amount: -1 })
  .limit(3);

//* 6. Найти сколько всего покупок было совершено в Берлине
db['100624_orders_Vadym'].countDocuments({ city: 'Berlin' });

//* 7. Найти количество покупок яблок в городах Берлин и Мадрид
db['100624_orders_Vadym'].countDocuments({
  product: 'Apple',
  city: { $in: ['Berlin', 'Madrid'] }
});

//* 8. Найти сколько было потрачено каждым покупателем
db['100624_orders_Vadym'].aggregate([
  {
    $group: {
      _id: '$customer',
      total: { $sum: '$amount' }
    }
  }
]);

//* 9. Найти в каких городах совершала покупки Ольга
db['100624_orders_Vadym'].aggregate([
  { $match: { customer: 'Olga' } },
  { $group: { _id: '$city' } }
]);
