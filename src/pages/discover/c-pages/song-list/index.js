import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import { SongListWrapper, LeftWrapper, RightWrapper, DownLoadWrapper } from './style';
import { getSongListDetailAction, getPlaylistCommentAction } from './store/actionCreators'
import { useSelector } from 'react-redux';
import { getSizeImage, timestampToTime } from '@/utils/format-utils'
import PHSongListRanking from '@/components/song-list-ranking'
import { AndroidOutlined, AppleOutlined, WindowsOutlined } from '@ant-design/icons'
import PHComment from '@/components/comment'
import PHPagination from '@/components/pagination'

export default memo(function PHSongList(props) {
  const [currentPage, setcurrentPage] = useState(1);
  const { songListDetail, songCategoryList, songListComments } = useSelector(state => ({
    songListDetail: state.get("songList").get("songListDetail"),
    songCategoryList: state.get("songs").get("songCategoryList"),
    songListComments: state.get("songList").get("songListComments")
  }), shallowEqual)
  // console.log(songCategoryList)
  const location = props.location.id ? props.location : JSON.parse(localStorage.getItem("location"));
  // console.log(JSON.parse(localStorage.getItem("location")))
  // console.log(location);
  localStorage.setItem("location", JSON.stringify(location))
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongListDetailAction(location.id));
    dispatch(getPlaylistCommentAction(location.id));
  }, [dispatch, location.id])
  // console.log(props.location)
  let playlists = songCategoryList && songCategoryList.playlists;
  const playlist = songListDetail && songListDetail.playlist;
  // console.log(topPlaylist);
  const coverImgUrl = playlist && playlist.coverImgUrl;
  const name = playlist && playlist.name;
  const avatarUrl = playlist && playlist.creator.avatarUrl;
  const nickname = playlist && playlist.creator.nickname;
  const tags = playlist && playlist.tags;
  // let identityIconUrl = false;
  // if (playlist.creator !== null) {
  //   identityIconUrl = playlist && playlist.creator.avatarDetail.identityIconUrl;
  // }
  // const identityIconUrl = playlist && playlist.creator.avatarDetail.identityIconUrl;
  const createTime = playlist && playlist.createTime;
  const description = playlist && playlist.description;
  const subscribers = playlist && playlist.subscribers;
  // console.log(subscribers);
  // console.log(playlist && playlist.tracks);
  const index = playlists && playlists.findIndex(value => (value.id === props.location.id))
  if (playlists) {
    if (index === -1) {
      playlists = playlists && playlists.slice(0, 5)
    } else {
      let left = playlists && playlists.slice(0, index);
      let right = playlists && playlists.slice(index + 1, 6);
      playlists = [...left, ...right]
    }
  }
  const onChange = (page, pageSize) => {
    setcurrentPage(page);
    const offset = 20 * (page - 1);
    dispatch(getPlaylistCommentAction(props.location.id, offset))
    window.scrollTo(0, 1000);
  }
  console.log(songListComments);
  return (
    <SongListWrapper className="wrap-v2 wrap-bg">
      <LeftWrapper>
        <div className="song-list-top">
          <div className="img">
            <div className="cover image_cover"></div>
            <img src={getSizeImage(coverImgUrl, 208)} alt="" />
          </div>
          <div className="content">
            <div className="first-line">
              <div className="icon sprite_icon2"></div>
              <div className="list-name">{name}</div>
            </div>
            <div className="second-line">
              <img src={getSizeImage(avatarUrl, 35)} alt="" className="avatar" />
              <a href="todo" className="nickname">{nickname}</a>
              <span className="createTime">{timestampToTime(createTime)} 创建</span>
            </div>
            <div className="third-line">
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
            <div className="forth-line">
              标签：
              {tags && tags.map(item => {
                return <a href="todo" key={item}>{item}</a>
              })}
            </div>
            <div className="fifth-line">
              介绍：{description}
            </div>
          </div>
        </div>
        <div className="song-list">
          <PHSongListRanking info={playlist} />
        </div>
        <DownLoadWrapper>
          <div className="d-title">查看更多内容，请下载客户端</div>
          <a href="todo" className="d-btn">立即下载</a>
        </DownLoadWrapper>
        <PHComment info={songListComments} id={props.location.id} type={2} />
        <PHPagination
          currentPage={currentPage}
          total={songListComments && songListComments.total}
          pageSize={20}
          onPageChange={onChange}
        />
      </LeftWrapper>
      <RightWrapper>
        <div className="lover">
          <div className="lover-title">喜欢这个歌单的人</div>
          <div className="lover-img">
            {
              subscribers && subscribers.map((item, index) => {
                return <img src={getSizeImage(item.avatarUrl, 40)} alt="" className="lover-item" key={item.id} />
              })
            }
          </div>
        </div>
        <div className="top-songlist">
          <div className="top-songlist-title">热门歌单</div>
          <div className="top-songlist-list">
            {
              playlists && playlists.map((item, index) => {
                return (
                  <div className="top-songlist-item" key={item.id}>
                    <div className="item-img">
                      <img src={getSizeImage(item.coverImgUrl, 50)} alt="" />
                    </div>
                    <div className="item-content">
                      <a href="todo" className="text-nowrap content1">{item.name}</a>
                      <a href="todo" className="text-nowrap content2">by {item.creator.nickname}</a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="download">网易云音乐多端下载</div>
        <div className="download-icons">
          <AppleOutlined className="apple" />
          <AndroidOutlined className="android" />
          <WindowsOutlined className="windows" />
        </div>
      </RightWrapper>
    </SongListWrapper>
  )
})
