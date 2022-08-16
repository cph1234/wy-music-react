import React, { memo, useState } from 'react'
import { WrapperAtistDetail, WrapperLeft, WrapperRight } from './style'
import { getArtistsAction, getArtistMvAction, getArtistAlbumAction, getArtistDescAction, getSimiArtistAction } from './store/actionCreators'
import { shallowEqual, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getSizeImage } from '@/utils/format-utils'
import { formatMinuteSecond } from '@/utils/format-utils'
import classNames from 'classnames'
import PHNewAlbumCover from '@/components/new-album-cover'
import { AndroidOutlined, AppleOutlined, WindowsOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'


export default memo(function PHArtistDetail(props) {
  // const [offset, setoffset] = useState(0)
  const [art1, setart1] = useState(true);
  const [art2, setart2] = useState(false);
  const [art3, setart3] = useState(false);
  const [art4, setart4] = useState(false);
  const { artists, artistMv, artistAlbum, artistDesc, simiArtist } = useSelector(state => ({
    artists: state.get("artistDetail").get("artists"),
    artistMv: state.get("artistDetail").get("artistMv"),
    artistAlbum: state.get("artistDetail").get("artistAlbum"),
    artistDesc: state.get("artistDetail").get("artistDesc"),
    simiArtist: state.get("artistDetail").get("simiArtist"),
  }), shallowEqual)
  const location = props.location.id ? props.location : JSON.parse(localStorage.getItem("location"));
  // console.log(JSON.parse(localStorage.getItem("location")))
  console.log(location);
  localStorage.setItem("location", JSON.stringify(location))
  const id = location.id;
  const artistInformation = location.artistInformation;
  // console.log(artistInformation)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArtistsAction(id));
    dispatch(getArtistMvAction(id));
    dispatch(getArtistAlbumAction(id));
    dispatch(getArtistDescAction(id));
    dispatch(getSimiArtistAction(id));
  }, [dispatch, id])
  const artistName = artistInformation.name;
  const alias = artistInformation.alias[0];
  const avatarUrl = artistInformation.picUrl;
  const hotSongs = artists && artists.hotSongs;
  const hotAlbums = artistAlbum && artistAlbum.hotAlbums;
  const mvs = artistMv && artistMv.mvs;
  const introduction = artistDesc.introduction;
  console.log(simiArtist);
  const hotArtists = simiArtist && simiArtist.slice(0, 6);
  const artist1 = () => {
    setart1(true)
    setart2(false)
    setart3(false)
    setart4(false)
  }
  const artist2 = () => {
    setart1(false)
    setart2(true)
    setart3(false)
    setart4(false)
  }
  const artist3 = () => {
    setart1(false)
    setart2(false)
    setart3(true)
    setart4(false)
  }
  const artist4 = () => {
    setart1(false)
    setart2(false)
    setart3(false)
    setart4(true)
  }
  return (
    <WrapperAtistDetail className="wrap-v2">
      <WrapperLeft>
        <div className="detail-top">
          <div className="top-name">
            <span className="name-ch">{artistName}</span>
            <span className="name-en">{alias}</span>
          </div>
          <div className="avatar">
            <img src={`${avatarUrl}?param=640y300`} alt="" />
            <div className="bgcolor"></div>
            <div className="avatar-btn">
              <NavLink to={{ pathname: "/discover/personpage", accountId: artistInformation.accountId, artistInformation: artistInformation }}>
                <button className="avatar-btn-1 sprite_icon"></button>
              </NavLink>
              <button className="avatar-btn-2 sprite_icon"></button>
            </div>
          </div>
        </div>
        <div className="detail-choice tab">
          <div className={classNames("artists tab", art1 ? "active" : "")} onClick={e => artist1()}>热门作品</div>
          <div className={classNames("artist_album tab", art2 ? "active" : "")} onClick={e => artist2()}>所有专辑</div>
          <div className={classNames("artist_mv tab", art3 ? "active" : "")} onClick={e => artist3()}>相关MV</div>
          <div className={classNames("artist_desc tab", art4 ? "active" : "")} onClick={e => artist4()}>艺人介绍</div>
        </div>
        {art1 && <div className="artist1">
          <div className="artist1-btn">
            <div className="btn-left">
              <a href="todo" className="btn1 sprite_button"><span>播放</span></a>
              <a href="todo" className="btn2 sprite_button"> </a>
              <a href="todo" className="btn3_1 sprite_button"><span>收藏热门</span></a>
              <a href="todo" className="btn3_2 sprite_button"> </a>
            </div>
            <div className="btn-right">
              <a href="todo" className="btn3_1 sprite_button"><span>热门单曲</span></a>
              <a href="todo" className="btn3_2 sprite_button"> </a>
            </div>
          </div>
          <ul className="artist1-list">
            {
              hotSongs && hotSongs.map((item, index) => {
                return (
                  <li key={item.id} className="list-item">
                    <div className="item-1">
                      <span className="li-left-1">{index + 1}.</span>
                      <span className="li-left-2 sprite_table"></span>
                    </div>
                    <div className="item-2">
                      <span className="item-2-name">{item.name}</span>
                      {item.alia[0] && <span className="item-2-alia">&nbsp;-&nbsp;({item.alia[0]})</span>}
                    </div>
                    <div className="item-3">
                      {formatMinuteSecond(item.dt)}
                    </div>
                    <div className="item-4">{item.al.name}</div>
                  </li>
                )
              })
            }
          </ul>
        </div>}
        {
          art2 && <div className="artist2">
            {
              hotAlbums.map((item, index) => {
                return <div className="artist2-item">
                  <PHNewAlbumCover info={item} key={item.id}></PHNewAlbumCover>
                </div>
              })
            }
          </div>
        }
        {
          art3 && <div className="artist3">
            {
              mvs.map((item, index) => {
                return <div className="list-item">
                  <img src={`${item.imgurl16v9}?param=137y103`} alt="" />
                  <div className="text-nowrap">{item.name}</div>
                </div>
              })
            }
          </div>
        }
        {
          art4 && <div className="artist4">
            <div className="brief-title">
              <div className="title-1"></div>
              <div className="title-2">{artistName}简介</div>
            </div>
            <div className="brief-content">
              {artistDesc && artistDesc.briefDesc}
            </div>
            {
              introduction.map((item, index) => {
                return <div key={item.ti} className="intro">
                  <div className="intro-title">{item.ti}</div>
                  <div className="intro-content">
                    {
                      item.txt.split("\n").map(iten => {
                        return <div className="content-item">{iten}</div>
                      })
                    }
                  </div>
                </div>
              })
            }
          </div>
        }
      </WrapperLeft>
      <WrapperRight>
        <div className="hot-title">热门歌手</div>
        <div className="hot-list">
          {
            hotArtists.map((item, index) => {
              return <div className="hot-item">
                <img src={getSizeImage(item.picUrl, 50)} alt="" />
                <div className="text-nowrap">{item.name}</div>
              </div>
            })
          }
        </div>
        <div className="download">网易云音乐多端下载</div>
        <div className="download-icons">
          <AppleOutlined className="apple" />
          <AndroidOutlined className="android" />
          <WindowsOutlined className="windows" />
        </div>
      </WrapperRight>
    </WrapperAtistDetail>
  )
})
