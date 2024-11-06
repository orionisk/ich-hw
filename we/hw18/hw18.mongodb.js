//* 1. Из коллекции sample_airbnb.listingsAndReviews найдите среднюю цену за сутки проживания на Гавайских островах.
//* Островов несколько, поэтому либо используем {'address.location': {$geoWithin: { $centerSphere ….
//* Либо перечисляем все возможные острова в поле market
//* Подсказка - нам понадобится 2 этапа агрегации : $match и $group
use('sample_airbnb');
db.listingsAndReviews
  .aggregate([
    {
      $match: {
        'address.location': {
          $geoWithin: {
            $centerSphere: [[-156.331925, 20.798363], 0.07]
          }
        }
      }
    },
    {
      $group: {
        _id: null,
        averagePrice: { $avg: '$price' }
      }
    },
    {
      $project: {
        _id: 0,
        averagePrice: { $round: ['$averagePrice', 2] }
      }
    }
  ])
  .toArray()[0];

//* 2. Подсчитайте в коллекции sample_mflix.movies, сколько фильмов имеют imdb рейтинг выше 8 и выходили в период с 2015 до 2023 года (используем year) Какой из них имеет самый высокий рейтинг ?
use('sample_mflix');
db.movies
  .aggregate([
    {
      $match: {
        'imdb.rating': { $gt: 8 },
        year: { $gte: 2015, $lte: 2023 }
      }
    },
    {
      $facet: {
        totalCount: [{ $count: 'count' }, { $project: { count: 1, _id: 0 } }],
        highestRated: [
          { $sort: { 'imdb.rating': -1 } },
          { $limit: 1 },
          {
            $project: {
              _id: 0,
              title: 1,
              year: 1,
              rating: '$imdb.rating'
            }
          }
        ]
      }
    },
    {
      $project: {
        totalCount: { $arrayElemAt: ['$totalCount.count', 0] },
        highestRated: { $arrayElemAt: ['$highestRated', 0] }
      }
    }
  ])
  .toArray()[0];
