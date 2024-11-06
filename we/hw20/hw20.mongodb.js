// Работаем с коллекцией sample_data.restaurants:
use('sample_data');

// 6. Найти рестораны на 'Staten Island' в названии которых есть слово pizza (Pizza и PIZZA тоже считаются)
db.restaurants.find({
  borough: 'Staten Island',
  name: { $regex: /pizza/i }
});

// 7. Выведите названия 5 лучших по среднему значению отзывов ( $avg: "$grades.score")
db.restaurants.aggregate([
  { $unwind: '$grades' },
  {
    $group: {
      _id: '$name',
      avgScore: { $avg: '$grades.score' }
    }
  },
  { $sort: { avgScore: -1 } },
  { $limit: 5 }
]);
