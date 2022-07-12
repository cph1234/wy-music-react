import React, { memo } from 'react'
import { PHVideoWrapper } from './style'
import PHVideoCover from '@/components/video-cover'

const PHVideo = memo((props) => {
  const video = props.searchContent.videos
  // console.log(props.searchContent);
  return (
    <PHVideoWrapper>
      {
        video && video.map(item => {
          return (
            <PHVideoCover info={item} key={item.id}></PHVideoCover>
          )
        })
      }
    </PHVideoWrapper>
  )
})

export default PHVideo