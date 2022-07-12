import * as actionTypes from './constants';
import { getSongDetail, getLyric, getRelevantInformation } from '@/services/player';
import { parseLyric } from '@/utils/parse-lyric'

export const getCurrentSongAction = (ids) => {
  return (dispatch, getState) => {
    const playList = getState().get("player").get("playList");
    const SongIndex = playList.findIndex(song => song.id === ids);
    if (SongIndex !== -1) {
      //播放列表中存在歌曲
      dispatch(changeCurrentSongIndexAction(SongIndex));
      dispatch(changeCurrentSongAction(playList[SongIndex]));
    } else {
      getSongDetail(ids).then(res => {
        const song = res.songs && res.songs[0];
        if (!song) return;

        const newPlayList = [...playList];
        newPlayList.push(song);

        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongAction(song))
      })
    }
  }
}

export const getCurrentRankAction = (rank) => {
  return (dispatch, getState) => {
    const playList = getState().get("player").get("playList");
    const length=playList.length;
    let newPlayList = [...playList];
    for (let item of rank) {
      let SongIndex = playList.findIndex(song => song.id === item.id);
      if (SongIndex !== -1) {
        //播放列表中存在歌曲
      } else {
        newPlayList.push(item);
      }
    }
    dispatch(changeCurrentSongIndexAction(length));
    dispatch(changePlayListAction(newPlayList));
    dispatch(changeCurrentSongAction(rank[0]))
  }
}

export const changeCurrentSongAction = song => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: song
})

export const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList: playList
})

export const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex: currentSongIndex
})

export const changeOrderAction = (order) => ({
  type: actionTypes.CHANGE_ORDER,
  order: order
})

export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      const lyric = res.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changeLyricListAction(lyricList));
    })
  }
}

export const changeLyricListAction = lyricsList => ({
  type: actionTypes.CHANGE_LYRICS_LIST,
  lyricsList
})

export const changeCurrentLyricIndex = currentLyricIndex => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex
})

export const getRelevantInformationAction = (id) => {
  return dispatch => {
    getRelevantInformation(id).then(res => {
      dispatch(changeRelevantInformationAction(res.playlists))
    })
  }
}

export const changeRelevantInformationAction = releventInformation => ({
  type: actionTypes.CHANG_RELEVANT_INFORMATION,
  releventInformation
})