import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import { SongListWrapper, LeftWrapper, RightWrapper } from './style';
import { getAlbumListDetailAction, getCommentAction } from './store/actionCreators'
import { useSelector } from 'react-redux';
import { getSizeImage, timestampToDay } from '@/utils/format-utils'
import PHAlbumListRanking from '@/components/album-list-ranking'
import { AndroidOutlined, AppleOutlined, WindowsOutlined } from '@ant-design/icons'
import PHComment from '@/components/comment'
import PHPagination from '@/components/pagination'

export default memo(function PHAlbumList(props) {
  const [currentPage, setcurrentPage] = useState(1)
  const [spread, setspread] = useState(true)
  const { albumListDetail, albumSingerAlbum, albumComment } = useSelector(state => ({
    albumListDetail: state.get("albumList").get("albumListDetail"),
    albumSingerAlbum: state.get("albumList").get("albumSingerAlbum"),
    albumComment: state.get("albumList").get("albumComment")
  }),shallowEqual)
  // setsingerId(albumListDetail.album && albumListDetail.album.artists[0].id)
  // console.log(singerId)
  const dispatch = useDispatch();
  // const singerId = 7122;//albumListDetail && albumListDetail.album.artists[0].id
  useEffect(() => {
    dispatch(getAlbumListDetailAction(props.location.id));
    dispatch(getCommentAction(props.location.id))
  }, [dispatch, props.location.id])
  // console.log(props.location)
  // let playlists = songCategoryList.playlists;
  let playlists = [];
  const album = albumListDetail && albumListDetail.album;
  const songs = albumListDetail && albumListDetail.songs;;
  // console.log(albumSingerAlbum);
  const SingerAlbum = albumSingerAlbum && albumSingerAlbum.slice(0, 5)
  const blurPicUrl = album && album.blurPicUrl;
  const name = album && album.name;
  const artist = album && album.artist.name;
  const company = album && album.company;
  // let identityIconUrl = false;
  // if (playlist.creator !== null) {
  //   identityIconUrl = playlist && playlist.creator.avatarDetail.identityIconUrl;
  // }
  // const identityIconUrl = playlist && playlist.creator.avatarDetail.identityIconUrl;
  const publishTime = album && album.publishTime;
  const description = album && album.description;
  const descriptionRes = description && description.split("\n").filter(item => {
    return item !== "" && item !== " ";
  });
  const array = albumComment && albumComment.comments;
  const r = [];
  let flag = true;
  for (var i = 0, l = array && array.length; i < l; i++) {
    for (var j = i + 1; j < l; j++) {
      if (array[i].user.userId === array[j].user.userId) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
    if (flag) r.push(array[i]);
  }
  const subscribers = r.slice(0, 8);
  // console.log(SingerAlbum);
  // console.log(playlist && playlist.tracks);
  const index = playlists && playlists.findIndex(value => (value.id === props.location.id))
  if (playlists) {
    if (index === -1) {
      playlists = playlists.slice(0, 5)
    } else {
      let left = playlists.slice(0, index);
      let right = playlists.slice(index + 1, 6);
      playlists = [...left, ...right]
    }
  }
  const onChange = (page, pageSize) => {
    setcurrentPage(page);
    const offset = 20 * (page - 1);
    dispatch(getCommentAction(props.location.id, 20, offset))
    window.scrollTo(0, 1000);
  }
  const isSpread = (e) => {
    e.preventDefault();
    setspread(!spread);
    window.scrollTo(0, 0);
  }
  // console.log(albumComment);
  return (
    <SongListWrapper className="wrap-v2 wrap-bg">
      <LeftWrapper spread={spread}>
        <div className="song-list-top">
          <div className="img">
            <div className="cover image_cover"></div>
            <img src={getSizeImage(blurPicUrl, 177)} alt="" />
          </div>
          <div className="content">
            <div className="first-line">
              <div className="icon sprite_icon2"></div>
              <div className="list-name">{name}</div>
            </div>
            <div className="second-line">
              <span>歌手:</span>
              <a href="todo" className="nickname">{artist}</a>
            </div>
            <div className="third-line">发行时间: &nbsp;&nbsp;{timestampToDay(publishTime)}</div>
            <div className="third-line">发行公司: &nbsp;&nbsp;{company}</div>
            <div className="forth-line">
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
          </div>
          <div className="description">
            <div className="description-title">专辑介绍: &nbsp; &nbsp;</div>
            <div className="description-list">
              {descriptionRes && descriptionRes.map(item => {
                return <div key={item} className="list-item"><p>{item}</p></div>
              })}
            </div>
            <div className="description-spread">
              <a href="todo" onClick={e => isSpread(e)}>{spread ? "展开" : "收起"}</a>
            </div>
          </div>
        </div>
        <div className="song-list">
          <PHAlbumListRanking info={songs} id={props.location.id} type={3}/>
        </div>
        <PHComment info={albumComment} />
        <PHPagination
          currentPage={currentPage}
          total={albumComment && albumComment.total}
          pageSize={20}
          onPageChange={onChange}
        />
      </LeftWrapper>
      <RightWrapper>
        <div className="lover">
          <div className="lover-title">喜欢这张专辑的人</div>
          <div className="lover-img">
            {
              subscribers && subscribers.map((item, index) => {
                return <img src={getSizeImage(item.user.avatarUrl, 40)} alt="" className="lover-item" key={item.commentId} />
              })
            }
          </div>
        </div>
        <div className="top-songlist">
          <div className="top-songlist-title">
            Ta的其他热门专辑
            <a href="todo">全部&gt;</a>
          </div>
          <div className="top-songlist-list">
            {
              SingerAlbum && SingerAlbum.map((item, index) => {
                return (
                  <div className="top-songlist-item" key={item.id}>
                    <div className="item-img">
                      <img src={getSizeImage(item.blurPicUrl, 50)} alt="" />
                    </div>
                    <div className="item-content">
                      <a href="todo" className="text-nowrap content1">{item.name}</a>
                      <a href="todo" className="text-nowrap content2">{timestampToDay(item.publishTime)}</a>
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
