import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch } from 'react-redux'
import { WrapperHomePage } from './style'
import { getUserPlaylistAction, getUserRecordAction } from './store/actionCreators'
import { useSelector } from 'react-redux'
import { vipLevel } from '@/common/local-data'
import { getSizeImage } from '@/utils/format-utils'
// import { city } from '@/common/city'
import { city2 } from '@/common/city2'
import classNames from 'classnames'
import PHSongsCover from '@/components/songs-cover'

export default memo(function PHUserHomepage() {
  const [type, settype] = useState(1)
  const [choice, setchoice] = useState(true)
  const { userInformation, userPlaylist, userRecord } = useSelector(state => ({
    userInformation: state.get("recommend").get("userInformation"),
    userPlaylist: state.get("user").get("userPlaylist"),
    userRecord: state.get("user").get("userRecord"),
  }), shallowEqual)
  const avatar = userInformation && userInformation.profile && userInformation.profile.avatarUrl
  const nickname = userInformation && userInformation.profile && userInformation.profile.nickname
  const uVipLevel = (userInformation && userInformation.level) || 1;
  const vipUrl = vipLevel[uVipLevel - 1].url;
  const eventCount = userInformation && userInformation.profile && userInformation.profile.eventCount;
  const follows = userInformation && userInformation.profile && userInformation.profile.follows;
  const followeds = userInformation && userInformation.profile && userInformation.profile.followeds;
  const city = userInformation && userInformation.profile && userInformation.profile.city;
  const userId = userInformation && userInformation.userPoint && userInformation.userPoint.userId
  let userSongRecord = userRecord && userRecord.weekData && userRecord.weekData.slice(0, 10);
  if (type === 0) {
    userSongRecord = userRecord && userRecord.allData && userRecord.allData.slice(0, 10);
  }
  console.log(userPlaylist)
  let mineList = [];
  let otherList = [];
  const playlist = (userPlaylist && userPlaylist.playlist) || []
  for (let item of playlist) {
    if (item.creator.userId === userId) {
      mineList.push(item)
    } else {
      otherList.push(item)
    }
  }
  console.log(mineList)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserPlaylistAction(userId))
    dispatch(getUserRecordAction(userId, type))
  }, [dispatch, userId, type])
  let location = -1;
  let userCity = '';
  Object.keys(city2).forEach(function (key) {
    if (location === -1) {
      location = city2[key].findIndex(item => {
        return item[1] === city
      })
      if (location !== -1) {
        userCity = `${key} - ${city2[key][location][0]}`
      }
    }
  });
  const week = () => {
    setchoice(true);
    settype(1)
  }
  const allDay = () => {
    setchoice(false);
    settype(0)
  }
  // console.log(userCity)
  // // const location=city2.map((item,index)=>{
  // //   return item.findIndex()
  // // })
  // console.log(city2)
  return (
    <WrapperHomePage className="wrap-v2" style={{}}>
      <div className="user-top">
        <div className="top-left">
          <img src={getSizeImage(avatar, 188)} alt="" />
        </div>
        <div className="top-right">
          <div className="right-1">
            <div className="right-1-1">
              <a href="todo">{nickname}</a>
              <img src={vipUrl} alt="" />
              <div className="right-center sprite_icon3">
                <span>{uVipLevel}</span>
              </div>
              <div className="sprite_icon2 right-sex"></div>
            </div>
            <div className="right-1-2">
              <button className="right-btn">
                <a href="todo" className="btn-1 sprite_button"><span>编辑个人资料</span></a>
                <a href="todo" className="btn-2 sprite_button"> </a>
              </button>
            </div>
          </div>
          <div className="right-2">
            <div className="bottom-first">
              <div className="first-1">{eventCount}</div>
              <div className="first-2">动态</div>
            </div>
            <div className="bottom-second">
              <div className="second-1">{follows}</div>
              <div className="second-2">关注</div>
            </div>
            <div className="bottom-third">
              <div className="third-1">{followeds}</div>
              <div className="third-2">粉丝</div>
            </div>
          </div>
          <div className="right-3">
            <div className="location">所在地区：{userCity}</div>
            <div className="social-net">社交网络：</div>
          </div>
        </div>
      </div>
      <div className="user-record">
        <div className="record-title">
          <div className="title-left">
            <span className="title-left-1">听歌排行</span>
            <span className="title-left-2">累计听歌首</span>
          </div>
          <div className="title-right">
            <span onClick={e => week()} className={classNames("week", choice ? "active" : "")}>最近一周</span>
            <span> | </span>
            <span onClick={e => allDay()} className={classNames("all-day", choice ? "" : "active")}>所有时间</span>
          </div>
        </div>
        <ul className="record-list">
          {
            userSongRecord && userSongRecord.map((item, index) => {
              const wid = item.score * 316 / 100;
              return (
                <li key={item.song.id} className="list-item">
                  <div className="li-left">
                    <span className="li-left-1">{index + 1}.</span>
                    <span className="li-left-2 sprite_table"></span>
                  </div>
                  <div className="li-center">
                    <span className="li-song">{item.song.name}</span>
                    <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
                    <span className="li-singer">{item.song.ar[0].name}</span>
                  </div>
                  <div className="li-right" style={{ width: wid }}>{item.playCount}次</div>
                </li>
              )
            })
          }
        </ul>
        <div className="more"><a href="todo">查看更多 &gt;</a></div>
      </div>
      <div className="user-playlist">
        <div className="title">
          <span className="title-1">我创建的歌单</span>
          <span className="title-2">({mineList.length})</span>
        </div>
        <div className="playlist-item">
          {
            mineList.map((item, index) => {
              return <div key={index} className="cover-item">
                <PHSongsCover info={item}></PHSongsCover>
              </div>
            })
          }
        </div>
      </div>
      <div className="other-playlist">
        <div className="title">
          <span className="title-1">我收藏的歌单</span>
          <span className="title-2">({otherList.length})</span>
        </div>
        <div className="playlist-item">
          {
            otherList.map((item, index) => {
              return <div key={index} className="cover-item">
                <PHSongsCover info={item}></PHSongsCover>
              </div>
            })
          }
        </div>
      </div>
    </WrapperHomePage >
  )
})
