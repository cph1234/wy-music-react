import React, { memo } from 'react';
import { SongsCoverWrapper } from './style';
import { getCount, getSizeImage } from '@/utils/format-utils'

export default memo(function PHSongsCover(props) {
  const { info, flag = false } = props;
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage((info && info.picUrl) || (info && info.coverImgUrl), 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info && info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      {flag && <div className="cover-bottom text-nowrap">{info && info.name}</div>}
      {flag && <div className="singer text-nowrap">by {info && info.creator.nickname}</div>}
      {!flag && <div className="cover-bottom">{info && info.name}</div>}
      {/* <div className="cover-bottom">{info.name}</div> */}
    </SongsCoverWrapper>
  )
})
