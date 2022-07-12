import React, { memo } from 'react'
import { AlbumWrapper } from './style'
import PHNewAlbumCover from '@/components/new-album-cover'

const PHAlbum = memo((props) => {
  const album = props.searchContent.albums
  // console.log(album);
  return (
    <AlbumWrapper>
      {
        album && album.map(item=>{
          return(
            <PHNewAlbumCover info={item}></PHNewAlbumCover>
          )
        })
      }
    </AlbumWrapper>
  )
})

export default PHAlbum