// Тестовая коллекция в mongo atlas sample_mflix.theaters

//* 1. Найти все кинотеатры в Калифорнии и посчитать их количество
use('sample_mflix');
db.theaters.countDocuments({
  'location.address.state': 'CA'
});

// Тестовая коллекция в mongo atlas  sample_airbnb.listingsAndReviews

//* 2. Найти недвижимость с самым большим количеством спален (bedrooms) и напишите ее название
use('sample_airbnb');
db.listingsAndReviews.findOne(
  {},
  { name: 1, _id: 0 },
  { sort: { bedrooms: -1 } }
);

// Тестовая коллекция в mongo atlas  sample_airbnb.listingsAndReviews

//* 3. Найти недвижимость с самым высоким рейтингом review_scores_rating при минимальном количестве отзывов 50

// Вариант с возвратом множества недвижимостей соответствующих условию
use('sample_airbnb');
let maxRating = db.listingsAndReviews
  .find({ number_of_reviews: { $gte: 50 } })
  .sort({ 'review_scores.review_scores_rating': -1 })
  .limit(1)
  .toArray()[0].review_scores.review_scores_rating;

db.listingsAndReviews.find(
  {
    number_of_reviews: { $gte: 50 },
    'review_scores.review_scores_rating': maxRating
  },
  {
    name: 1,
    'review_scores.review_scores_rating': 1,
    number_of_reviews: 1
  }
);
