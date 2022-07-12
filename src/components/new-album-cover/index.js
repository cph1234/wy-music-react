import React, { memo } from 'react';
import { NewAlbumCoverWrapper } from './style';
import { getSizeImage } from '@/utils/format-utils'

export default memo(function PHNewAlbumCover(props) {
  const { info, size = 130, width = 153, bgp = "-845px" } = props;
  return (
    <NewAlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl || info.coverImgUrl, size)} alt="" />
        <span className="cover image_cover"> </span>
      </div>
      <div className="name text-nowrap">{info.name}</div>
      <div className="artist-name text-nowrap">{info.artist.name}</div>
    </NewAlbumCoverWrapper>
  )
})
