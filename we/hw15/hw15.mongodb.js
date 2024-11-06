use('ich');
//* 1. Коллекция imdb : Используя оператор $size , найдите фильмы, написанные 3 сценаристами (writers) и снятые 2 режиссерами (directors)
db.imdb.find({
  $and: [{ writers: { $size: 3 } }, { directors: { $size: 2 } }]
});

//* 2. Коллекция bookings: Найдите адрес нахождения автомобиля с vin WME4530421Y135045 по самой последней дате (и времени) final_date

db.bookings.findOne(
  { vin: 'WME4530421Y135045' },
  { final_address: 1, final_date: 1, _id: 0 },
  { sort: { final_date: -1 } }
);

//* 3. Коллекция bookings: подсчитайте, у скольких автомобилей при окончании аренды закончилось топливо (final_fuel)
db.bookings.countDocuments({ final_fuel: 0 });

//* 4. Коллекция bookings: найдите номерной знак и vin номер авто, с самым большим километражом (distance)
db.bookings.findOne(
  {},
  { plate: 1, vin: 1, _id: 0 },
  { sort: { distance: -1 } }
);

//* 5. Коллекция imdb. Найдите фильм с участием "Brad Pitt" с самым высоким рейтингом (imdb.rating)
db.imdb.findOne(
  {
    cast: 'Brad Pitt',
    'imdb.rating': { $ne: '' }
  },
  {},
  { sort: { 'imdb.rating': -1 } }
);
