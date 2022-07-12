import React, { memo } from 'react'
import { SingerWrapper } from './style'

export default memo(function PHSinger(props) {
  const artists = props.searchContent.artists
  // console.log(artists);
  return (
    <SingerWrapper>
      {
        artists && artists.map(item => {
          return (
            <div key={item.id} className="item">
              <img src={item.img1v1Url} alt="" className='image'/>
              <div className='text'>{item.name}</div>
            </div>
          )
        })
      }
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SingerWrapper>
  )
})
