import React, { memo } from 'react';
import { AnchorWrapper } from './style';
import { getSizeImage } from '@/utils/format-utils';

export default memo(function PHAnchorItem(props) {
  const { info } = props;
  const picUrl = info && info.picUrl;
  const coverImgUrl = info && info.coverImgUrl;
  return (
    <AnchorWrapper>
      <div className="image">
        <img src={getSizeImage(picUrl || coverImgUrl, 40)} alt="" />
      </div>
      <div className="info">
        <p className="name text-nowrap">{info && info.name}</p>
        <p className="identify text-nowrap">{(info && info.position) || ((info && info.creator) && (info && info.creator.nickname)) || (info && info.description)}</p>
      </div>
    </AnchorWrapper>
  )
})
