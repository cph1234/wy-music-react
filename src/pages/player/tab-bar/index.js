import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { PlayerWrapper, LeftWrapper, CenterWrapper, RightWrapper } from './style';
import { Slider } from 'antd';
import { shallowEqual, useDispatch } from 'react-redux';
import { changeOrderAction, changeCurrentSongIndexAction, changeCurrentSongAction, getLyricAction, changeCurrentLyricIndex } from '../store/actionCreators';
import { useSelector } from 'react-redux';
import { getSizeImage, formatMinuteSecond, currentMusicUrl } from '@/utils/format-utils';
import { NavLink } from 'react-router-dom';
import { message } from 'antd';
import PHMessage from './message'

export default memo(function PHPlayer() {
  const [isPlaying, setisPlaying] = useState(false);
  const [currentTime, setcurrentTime] = useState(0);
  const [progress, setprogress] = useState(0);
  const [isChanging, setisChanging] = useState(false);
  const [showMessage, setshowMessage] = useState(false);

  const { currentSong, order, currentSongIndex, playList, lyricsList, currentLyricIndex } = useSelector(state => ({
    currentSong: state.get("player").get("currentSong"),
    order: state.get("player").get("order"),
    currentSongIndex: state.get("player").get("currentSongIndex"),
    playList: state.get("player").get("playList"),
    lyricsList: state.get("player").get("lyricsList"),
    currentLyricIndex: state.get("player").get("currentLyricIndex"),
  }), shallowEqual)

  // console.log(currentSong);

  const picUrl = (currentSong && currentSong.al && currentSong.al.picUrl) || "";
  const singerName = (currentSong && currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = (currentSong && currentSong.dt) || 0;

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCurrentSongAction(1872074958))
  // }, [dispatch])
  useEffect(() => {
    audioRef.current.src = currentMusicUrl(currentSong && currentSong.id);
    audioRef.current.play().then(res => {
      setisPlaying(true)
    }).catch(err => {
      setisPlaying(false)
    })
  }, [currentSong])
  const audioRef = useRef();
  // 播放
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setisPlaying(!isPlaying);
  }, [isPlaying])

  const timeUpdate = (e) => {
    // console.log(e.target.currentTime);
    if (!isChanging) {
      //e.target.currentTime单位是秒
      setcurrentTime(e.target.currentTime * 1000);
      //进度条
      setprogress(currentTime / duration * 100);
    }
    let currentIndex = 0;
    for (let i = 0; i < lyricsList.length; i++) {
      if (currentTime < lyricsList[i].time) {
        // console.log(lyricsList[i].time, currentTime);
        currentIndex = i - 1;
        break;
      }
    }
    if (currentLyricIndex !== currentIndex) {
      dispatch(changeCurrentLyricIndex(currentIndex));
      // console.log(lyricsList[currentIndex].content);
      message.open({
        content: lyricsList[currentIndex] && lyricsList[currentIndex].content,
        key: "lyrics",
        duration: 0,
        className: "lyric"
      })
    }
    // console.log(lyricsList[currentIndex], currentTime);
  }


  // 拖动滑条位置
  const sliderChange = useCallback((value) => {
    setprogress(value);
    setisChanging(true);
    setcurrentTime(value / 100 * duration)
  }, [duration])
  //拖动结束
  const sliderAfterChange = useCallback((value) => {
    audioRef.current.currentTime = value / 100 * duration / 1000;
    setisChanging(false);
    if (!isPlaying) {
      playMusic();
    }
    // console.log("end", value);
  }, [duration, isPlaying, playMusic])

  const changePlayOrder = (order) => {
    console.log('here', order);
    order = order + 1;
    if (order > 2) {
      order = 0
    }
    dispatch(changeOrderAction(order))
  }

  const playOrder = (num) => {
    let currentSong = currentSongIndex;
    // console.log("before", currentSong);
    if (order === 1) {
      while (currentSong === currentSongIndex) {
        currentSong = Math.floor(Math.random() * playList.length);
      }
      console.log(currentSong);
    } else {
      currentSong = currentSongIndex + num;
      if (currentSong < 0) {
        currentSong = playList.length - 1;
      }
      if (currentSong > playList.length - 1) {
        currentSong = 0;
      }
    }
    dispatch(changeCurrentSongIndexAction(currentSong));
    dispatch(changeCurrentSongAction(playList[currentSong]));
    dispatch(getLyricAction(playList[currentSong].id))
  }

  const handleMusicEnded = (e) => {
    if (order === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      playOrder(1)
    }
  }

  const isShowMessage = () => {
    setshowMessage(!showMessage)
  }

  return (
    <PlayerWrapper className="playbar_sprite">
      <div className="wrap-v2 wrap">
        <LeftWrapper isPlaying={isPlaying}>
          <button href="todo" className="btn1 playbar_sprite" onClick={e => playOrder(-1)}> </button>
          <button href="todo" className="btn2 playbar_sprite" onClick={e => playMusic()}> </button>
          <button href="todo" className="btn3 playbar_sprite" onClick={e => playOrder(1)}> </button>
        </LeftWrapper>
        <CenterWrapper order={order}>
          <div className="image">
            <NavLink to="/discover/currentmusic">
              <img src={getSizeImage(picUrl || "https://s4.music.126.net/style/web2/img/default/default_album.jpg", 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="content">
              <a href="todo" className="song">{(currentSong && currentSong.name) || ""}</a>
              <a href="todo" className="icon playbar_sprite"> </a>
              <a href="todo" className="singer">{singerName}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={30}
                className="statbar"
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange} />
            </div>
          </div>
          <div className="time">
            <div className="now-time">{formatMinuteSecond(currentTime)}</div>
            <div className="divider">/</div>
            <div className="duration">{formatMinuteSecond(duration)}</div>
          </div>
          <div className="func-one">
            <a href="todo" className="btn1 icon-single"> </a>
            <a href="todo" className="btn2 playbar_sprite"> </a>
            <a href="todo" className="btn3 playbar_sprite"> </a>
          </div>
          <div className="divider2 playbar_sprite"></div>
          <div className="func-two">
            <button className="btn1 playbar_sprite"> </button>
            <button className="btn2 playbar_sprite" onClick={e => changePlayOrder(order)}> </button>
            {showMessage && <PHMessage className="message" />}
            <span>
              <button className="btn3 playbar_sprite" onClick={e => isShowMessage()}>{playList.length}</button>
            </span>

          </div>
        </CenterWrapper>
        <RightWrapper></RightWrapper>
      </div>
      <audio ref={audioRef}
        onTimeUpdate={e => timeUpdate(e)}
        onEnded={e => handleMusicEnded(e)}></audio>
    </PlayerWrapper>
  )
})
