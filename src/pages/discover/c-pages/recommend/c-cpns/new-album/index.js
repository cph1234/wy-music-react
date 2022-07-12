import React, { memo, useEffect, useRef } from 'react';
import PHThemeHeaderRCM from '@/components/theme-header-rcm';
import { getNewAlbumAction } from '../../store/actionCreators'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { NewAlbumWrapper } from './style';
import { Carousel } from 'antd';
import PHNewAlbumCover from '@/components/new-album-cover'
import { NavLink } from 'react-router-dom';

export default memo(function PHNewAlbum() {
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.get('recommend').get("newAlbums")
  }), shallowEqual)
  // console.log(newAlbums);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumAction())
  }, [dispatch])

  const pageRef = useRef();

  return (
    <NewAlbumWrapper>
      <PHThemeHeaderRCM title="新碟上架" routeTo="/discover/album"></PHThemeHeaderRCM>
      <div className="content">
        <button className="arrow arrow-left sprite_02"
          onClick={e => pageRef.current.prev()}>
        </button>
        <div className="album">
          <Carousel ref={pageRef} dots={false}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums && newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                        // console.log(iten);
                        return (
                          <NavLink to={{
                            pathname: "/discover/albumlist",
                            id: iten.id
                          }} key={iten.id}>
                            <div>
                              <PHNewAlbumCover key={iten.id} info={iten} size={100} width={118} bgp={"-570px"}>{iten.name}</PHNewAlbumCover>
                            </div>
                          </NavLink>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02"
          onClick={e => pageRef.current.next()}></button>
      </div>
    </NewAlbumWrapper >
  )
})
