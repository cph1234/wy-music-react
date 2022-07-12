import React, { memo } from 'react'
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { WrapperSingleSong, WrapperLeft, WrapperRight } from './style';
import { getSongDetailAction, getSimiSongAction, getSongCommentsAction } from './store/actionCreators'
import { getLyricAction, getRelevantInformationAction, getCurrentSongAction } from '@/pages/player/store/actionCreators'
import { useState } from 'react';
import { getSizeImage } from '@/utils/format-utils'
import PHAnchorItem from '@/components/anchor-item';
import { AndroidOutlined, AppleOutlined, WindowsOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom';
import PHComment from '@/components/comment'
import PHPagination from '@/components/pagination'


export default memo(function PHSingleSong(props) {
  const [currentPage, setcurrentPage] = useState(1)
  const [flag, setflag] = useState(true);
  const [lyricContent, setlyricContent] = useState("展开")
  const { lyricsList, releventInformation } = useSelector(state => ({
    lyricsList: state.get("player").get("lyricsList"),
    releventInformation: state.get("player").get("releventInformation"),
  }),shallowEqual);
  const { songDetail, simiSong, songComments } = useSelector(state => ({
    songDetail: state.get("singleSong").get("songDetail"),
    simiSong: state.get("singleSong").get("simiSong"),
    songComments: state.get("singleSong").get("songComments"),
  }))
  // console.log(songComments)
  const location = props.location;
  const ids = location.ids;
  const simiSongs = simiSong && simiSong.songs;
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSimiSongAction(ids))
    dispatch(getLyricAction(ids))
    dispatch(getRelevantInformationAction(ids))
    dispatch(getSongDetailAction(ids))
    dispatch(getSongCommentsAction(ids))
  }, [dispatch, ids])
  const currentSong = songDetail && songDetail.songs && songDetail.songs[0];
  const expand = () => {
    if (flag) {
      setlyricContent("收起")
    } else {
      setlyricContent("展开")
    }
    setflag(!flag);
  };
  const playMusic = (item) => {
    dispatch(getCurrentSongAction(item.id));
    dispatch(getLyricAction(item.id));
  }
  const onChange = (page, pageSize) => {
    setcurrentPage(page);
    const offset = 20 * (page - 1);
    dispatch(getSongCommentsAction(ids, offset))
    window.scrollTo(0, 1000);
  }
  // console.log(simiSong)
  return (
    <WrapperSingleSong className='wrap-v2'>
      <WrapperLeft flag={flag}>
        <div className="content">
          <div className="img image_cover">\
            <img src={getSizeImage(currentSong && currentSong.al && currentSong.al.picUrl, 140)} alt="" />
          </div>
          <div className="song">
            <div className="first">
              <span className="icon sprite_icon2"></span>
              <span className="title">{currentSong && currentSong.name}</span>
            </div>
            <div className="second">
              <span>歌手：</span>
              <a href="todo">{currentSong && currentSong.ar && currentSong.ar[0].name}</a>
            </div>
            <div className="third">
              <span>所属专辑：</span>
              <a href="todo">{currentSong && currentSong.al && currentSong.al.name}</a>
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
            <button onClick={e => expand()} style={{ color: "#0c73c2" }}>{lyricContent}</button>
            <div className='comments'><PHComment info={songComments} id={ids} type={0}/></div>
          </div>
        </div>
        <PHPagination
          currentPage={currentPage}
          total={songComments && songComments.total}
          pageSize={20}
          onPageChange={onChange}
        />
      </WrapperLeft>
      <WrapperRight>
        <div className="song-list">包含这首歌的歌单</div>
        <div className="relevant-information">
          {
            releventInformation && releventInformation.map(item => {
              return <PHAnchorItem info={item} key={item.id} />
            })
          }
        </div>
        <div className="song-list">相似歌曲</div>
        <div className='simi-song'>
          {
            simiSongs && simiSongs.map(item => {
              return (
                <div key={item.id} className='simi-item'>
                  <div className='simi-left'>
                    <NavLink to={{ pathname: "/discover/singleSong", ids: item.id }}>
                      <div className='left-1 text-nowrap'>{item.name}</div>
                    </NavLink>
                    <NavLink to={{ pathname: "/discover/artistdetail", id: item.artists[0].id, artistInformation: item.artists[0] }}>
                      <div className='left-2 text-nowrap'>{item.artists[0].name}</div>
                    </NavLink>
                  </div>
                  <div className='simi-right'>
                    <span className='right-1 sprite_icon3' onClick={e => playMusic(item)}></span>
                    <span className='right-2 sprite_icon3'></span>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="download">网易云音乐多端下载</div>
        <div className="icons">
          <AppleOutlined className="apple" />
          <AndroidOutlined className="android" />
          <WindowsOutlined className="windows" />
        </div>
      </WrapperRight>
    </WrapperSingleSong>
  )
})
