import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format-utils'
import { RankingWrapper } from './style'
import { useDispatch } from 'react-redux';

import { getCurrentSongAction, getLyricAction, getCurrentRankAction } from '@/pages/player/store/actionCreators'
import { NavLink } from 'react-router-dom';

export default memo(function PHTopRanking(props) {
  const dispatch = useDispatch();
  const { info, routeTo = "" } = props;
  // console.log(info);
  const tracks = (info && info.tracks) || [];
  console.log(tracks);
  const playRank = () => {
    dispatch(getCurrentRankAction(tracks))
  }

  const playMusic = (item) => {
    dispatch(getCurrentSongAction(item.id));
    dispatch(getLyricAction(item.id));
  }

  return (
    <RankingWrapper>
      <div className="header">
        <NavLink to={routeTo} onClick={e => window.scrollTo(0, 0)}>
          <div className="image">
            <img src={getSizeImage(info && info.coverImgUrl, 50)} alt="" />
          </div>
        </NavLink>
        <div className="info">
          <a href="todo">{info && info.name}</a>
          <div>
            <button className="btn play sprite_02" onClick={e => playRank()}></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks && tracks.slice(0, 10).map((item, index) => {
            return (
              <NavLink to={{ pathname: "/discover/singleSong", ids: item.id }} key={item.id}>
                <div className="item">
                  <div className="rank">{index + 1}</div>
                  <div className="info">
                    <span className="name text-nowrap">{item.name}</span>
                    <div className="operate">
                      <button className="btn sprite_02 play" onClick={e => playMusic(item)}></button>
                      <button className="btn sprite_icon2 addto"></button>
                      <button className="btn sprite_02 favor"></button>
                    </div>
                  </div>
                </div>
              </NavLink>
            )
          })
        }
      </div>
      <div className="footer">
        <NavLink to={routeTo} onClick={e => window.scrollTo(0, 0)}>
          查看全部 &gt;
        </NavLink>
      </div>
    </RankingWrapper>
  )
})
