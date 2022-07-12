import React, { memo } from 'react'
import { PHVideoCoverWrapper } from './style'
import { formatMinuteSecond, getCount } from '@/utils/format-utils'

const PHVideoCover = memo((props) => {
  const info = props.info
  // console.log(info);
  return (
    <PHVideoCoverWrapper>
      <div className='image'>
        <img src={info.coverUrl} alt="" />
        <div className='cover mask'></div>
        <div className='duration'>{formatMinuteSecond(info.durationms)}</div>
        <div className='playCount'>
          <span className='sprite_icon3'></span>
          {getCount(info.playTime)}
        </div>
      </div>
      <div className='title text-nowrap'>
        <span className='sprite_icon3'></span>
        {info.title}
      </div>
      <div className='creator'>{info.creator[0].userName}</div>
    </PHVideoCoverWrapper>
  )
})

export default PHVideoCover