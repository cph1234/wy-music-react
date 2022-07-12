import React, { memo } from 'react'
import { SingleSongWrapper } from './style'
import { formatMinuteSecond }from '@/utils/format-utils'

export default memo(function PHSingleSong(props) {
  const songs = props.searchContent.songs
  // console.log(props);
  return (
    <SingleSongWrapper>
      {songs && songs.map(item => {
        return (
          <div key={item.id} className="item">
            <div className='sprite_table icon'></div>
            <div className='name text-nowrap'>{item.name}</div>
            <div className='icons'></div>
            <div className='artist text-nowrap'>{item.artists[0].name}</div>
            <div className='album text-nowrap'>{item.album.name}</div>
            <div className='duration'>{formatMinuteSecond(item.duration)}</div>
          </div>
        )
      })}
    </SingleSongWrapper>
  )
})

