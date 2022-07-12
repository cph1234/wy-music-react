import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { getSizeImage } from '@/utils/format-utils'
import { CurrentWrapper, LeftWrapper, RightWrapper } from './style'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRelevantInformationAction } from './store/actionCreators';
import PHAnchorItem from '@/components/anchor-item';
import { AndroidOutlined, AppleOutlined, WindowsOutlined } from '@ant-design/icons'

export default memo(function PHCurrentMusic() {
  const [flag, setflag] = useState(true);
  const [lyricContent, setlyricContent] = useState("展开")
  const { currentSong, lyricsList, releventInformation } = useSelector(state => ({
    currentSong: state.get("player").get("currentSong"),
    lyricsList: state.get("player").get("lyricsList"),
    releventInformation: state.get("player").get("releventInformation"),
  }));
  // console.log(releventInformation);
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentSong.id)
      dispatch(getRelevantInformationAction(currentSong.id));
  }, [dispatch, currentSong.id])
  const expand = () => {
    if (flag) {
      setlyricContent("收起")
    } else {
      setlyricContent("展开")
    }
    setflag(!flag);
  };
  return (
    <CurrentWrapper className="wrap-v2 wrap-bg">
      <LeftWrapper flag={flag}>
        <div className="content">
          <div className="img image_cover">\
            <img src={getSizeImage(currentSong.al && currentSong.al.picUrl, 140)} alt="" />
          </div>

          <div className="song">
            <div className="first">
              <span className="icon sprite_icon2"></span>
              <span className="title">{currentSong.name}</span>
            </div>
            <div className="second">
              <span>歌手：</span>
              <a href="todo">{currentSong.ar && currentSong.ar[0].name}</a>
            </div>
            <div className="third">
              <span>所属专辑：</span>
              <a href="todo">{currentSong.al && currentSong.al.name}</a>
            </div>
            <div className="btn">
              <a href="todo" className="btn1 sprite_button"><span>播放</span></a>
              <a href="todo" className="btn2 sprite_button"> </a>
              <a href="todo" className="btn3_1 sprite_button"><span>收藏</span></a>
              <a href="todo" className="btn3_2 sprite_button"> </a>
              <a href="todo" className="btn4_1 sprite_button"><span>分享</span></a>
              <a href="todo" className="btn4_2 sprite_button"> </a>
              <a href="todo" className="btn5_1 sprite_button"><span>下载</span></a>
              <a href="todo" className="btn5_2 sprite_button"> </a>
              <a href="todo" className="btn6_1 sprite_button"><span>评论</span></a>
              <a href="todo" className="btn6_2 sprite_button"> </a>
            </div>
            <div className="lyric">
              {
                lyricsList && lyricsList.map((item, index) => {
                  return <div key={item.time} className="lyric-item">{item.content}</div>
                })
              }
            </div>
            <button onClick={e => expand()}>{lyricContent}</button>
          </div>

        </div>
      </LeftWrapper>
      <RightWrapper>
        <div className="song-list">包含这首歌的歌单</div>
        <div className="relevant-information">
          {
            releventInformation && releventInformation.map(item => {
              return <PHAnchorItem info={item} key={item.id} />
            })
          }
        </div>
        <div className="download">网易云音乐多端下载</div>
        <div className="icons">
          <AppleOutlined className="apple" />
          <AndroidOutlined className="android" />
          <WindowsOutlined className="windows" />
        </div>
      </RightWrapper>
    </CurrentWrapper>
  )
})
