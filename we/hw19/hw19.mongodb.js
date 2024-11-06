// Из базы данных ich работаем с коллекцией ich.Spotify_Youtube:
use('ich');
//* 1. Найдите трек с наивысшими показателями Danceability и Energy.
db.Spotify_Youtube.findOne(
  {},
  {
    Track: 1,
    Artist: 1,
    Danceability: 1,
    Energy: 1,
    _id: 0
  },
  {
    sort: {
      Danceability: -1,
      Energy: -1
    }
  }
);

//* 2. У какого трека (но не compilation) самая большая длительность?
db.Spotify_Youtube.findOne(
  {
    Album_type: { $ne: 'compilation' }
  },
  {
    Track: 1,
    Artist: 1,
    Duration_ms: 1,
    _id: 0
  },
  {
    sort: { Duration_ms: -1 }
  }
);

//* 3. В каком одном альбоме самое большее количество треков?

db.Spotify_Youtube.aggregate([
  {
    $group: {
      _id: '$Album',
      trackCount: { $count: {} }
    }
  },
  {
    $sort: { trackCount: -1 }
  },
  {
    $project: {
      Album: '$_id',
      Artist: '$artist',
      'Number of Tracks': '$trackCount',
      _id: 0
    }
  },
  {
    $limit: 1
  }
]).toArray()[0];

//* 4. Сколько просмотров видео на youtube у трека с самым высоким количеством прослушиваний на spotify (Stream)?
db.Spotify_Youtube.findOne(
  {},
  {
    Track: 1,
    Artist: 1,
    Stream: 1,
    Views: 1,
    _id: 0
  },
  {
    sort: { Stream: -1 }
  }
);

//* 5. Экспортируйте 20 самых популярных (прослушивания или просмотры) треков по версиям youtube и spotify и импортируйте в базу ich_edit их с именами top20youtube и top20spotify, и добавьте им свои имена для уникальности.

const ichEditDb = connect(require('./connection').URL);

const top20spotify = '100624_Vadym_top20spotify';
const top20youtube = '100624_Vadym_top20youtube';
ichEditDb[top20spotify].drop();
ichEditDb[top20youtube].drop();

const topByStreams = db.Spotify_Youtube.find(
  {},
  {
    _id: 0
  }
)
  .sort({ Stream: -1 })
  .limit(20)
  .toArray();

ichEditDb[top20spotify].insertMany(topByStreams);

const topByViews = db.Spotify_Youtube.find(
  {},
  {
    _id: 0
  }
)
  .sort({ Views: -1 })
  .limit(20)
  .toArray();

ichEditDb[top20youtube].insertMany(topByViews);
