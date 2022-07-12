import React, { memo, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { MessageWrapper } from './style';
import { formatMinuteSecond } from '@/utils/format-utils';
import classNames from 'classnames';
import { scrollTo } from '@/utils/lyric-utils';


export default memo(function PHMessage() {
  const lyricRef = useRef();
  const { lyricsList, playList, currentSongIndex, currentLyricIndex } = useSelector(state => ({
    lyricsList: state.get("player").get("lyricsList"),
    playList: state.get("player").get("playList"),
    currentSongIndex: state.get("player").get("currentSongIndex"),
    currentLyricIndex: state.get("player").get("currentLyricIndex"),
  }))

  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    scrollTo(lyricRef.current, (currentLyricIndex - 3) * 32, 300)
  }, [currentLyricIndex]);

  return (
    <MessageWrapper>
      <div className="top message">
        <div className="top-left">
          <div className="title">{`播放列表(${playList.length})`}</div>
          <div className="add-div">
            <a href="todo">
              <div className="add message-icon"></div>
              收藏全部
            </a>
          </div>
          <div className="diliver"></div>
          <div className="delete-div">
            <a href="todo">
              <div className="delete message-icon"></div>
              删除
            </a>
          </div>
        </div>
        <div className="top-right">
          {playList[currentSongIndex].name}
          <span className="right-icon  message-icon"></span>
        </div>
      </div>
      <div className="bottom message">
        <div className="bottom-left">
          {
            playList && playList.map((item, index) => {
              // console.log(index, currentLyricIndex);
              return (
                <div className={classNames("item", { "active": index === currentSongIndex })}>
                  <div className="playing">
                    <div className="icon message-icon"></div>
                  </div>
                  <div className="song-name text-nowrap">{item.name}</div>
                  <div className="icons">
                    <button className="icon1 message-icon"></button>
                    <button className="icon2 message-icon"></button>
                    <button className="icon3 message-icon"></button>
                    <button className="icon4 message-icon"></button>
                  </div>
                  <div className="singer-name text-nowrap">{item.ar[0].name}</div>
                  <div className="duration">{formatMinuteSecond(item.dt)}</div>
                  <div className="icons2 message-icon"></div>
                </div>
              )
            })
          }
        </div>
        <div className="bottom-right" ref={lyricRef}>
          {
            lyricsList && lyricsList.map((item, index) => {
              return (
                <div className={classNames("item", { "active": index === currentLyricIndex })}>{item.content}</div>
              )
            })
          }
        </div>
      </div>
    </MessageWrapper>
  )
})
