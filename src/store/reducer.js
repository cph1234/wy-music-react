// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import recommendReducer from '../pages/discover/c-pages/recommend/store';
import rankingReducer from '../pages/discover/c-pages/ranking/store';
import songsReducer from '../pages/discover/c-pages/songs/store';
import playerReducer from '../pages/player/store';
import songListReducer from '../pages/discover/c-pages/song-list/store';
import albumReducer from '../pages/discover/c-pages/album/store';
import djradioReducer from '../pages/discover/c-pages/djradio/store';
import artistReducer from '../pages/discover/c-pages/artist/store';
import albumListReducer from '../pages/discover/c-pages/album-list/store';
import userReducer from '../pages/discover/c-pages/userHomepage/store';
import personReducer from '../pages/discover/c-pages/personHomepage/store';
import artistDetailReducer from '../pages/discover/c-pages/artist-detail/store';
import myMessageReducer from '../pages/discover/c-pages/my-message/store';
import userLevelReducer from '../pages/discover/c-pages/userLevel/store';
import userSettingReducer from '../pages/discover/c-pages/userSetting/store';
import singleSongReducer from '../pages/discover/c-pages/single-song/store';
import searchReducer from '../pages/discover/c-pages/search/store';


const cReducer = combineReducers({
  recommend: recommendReducer,
  songs: songsReducer,
  ranking: rankingReducer,
  player: playerReducer,
  songList: songListReducer,
  album: albumReducer,
  djradio: djradioReducer,
  artist: artistReducer,
  albumList: albumListReducer,
  user: userReducer,
  person: personReducer,
  artistDetail: artistDetailReducer,
  myMessage: myMessageReducer,
  userLevel: userLevelReducer,
  userSetting: userSettingReducer,
  singleSong: singleSongReducer,
  search: searchReducer
});

export default cReducer;