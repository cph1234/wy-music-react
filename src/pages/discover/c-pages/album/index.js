import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import { AlbumWrapper, TopWrapper, BottomWrapper } from './style';
import { getHotAlbumsAction, getTopAlbumsAction } from './store/actionCreators'
import { useSelector } from 'react-redux';
import PHNewAlbumCover from '@/components/new-album-cover'
import PHPagination from '@/components/pagination'
import { NavLink } from 'react-router-dom';

export default memo(function PHAlbum() {
  const [currentPage, setcurrentPage] = useState(1)
  const { hotAlbums, topAlbums } = useSelector(state => ({
    hotAlbums: state.get("album").get("hotAlbums"),
    topAlbums: state.get("album").get("topAlbums"),
  }), shallowEqual)
  const hotAlbums10 = hotAlbums && hotAlbums.slice(0, 10);
  const albums = topAlbums && topAlbums.albums;
  // console.log(topAlbums.total)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotAlbumsAction());
    dispatch(getTopAlbumsAction());
  }, [dispatch])
  const onChange = (page, pageSize) => {
    setcurrentPage(page);
    const offset = 35 * (page - 1);
    dispatch(getTopAlbumsAction(offset))
  }
  return (
    <AlbumWrapper className="wrap-v2">
      <TopWrapper>
        <div className="top-title">
          热门新碟
        </div>
        <div className="top-image">
          {
            hotAlbums10 && hotAlbums10.map((item, index) => {
              return (
                <NavLink to={{
                  pathname: "/discover/albumlist",
                  id: item.id
                }} key={item.id}>
                  <PHNewAlbumCover
                    key={item.id}
                    info={item}
                    className="top-image-item" />
                </NavLink>
              )
            })
          }
        </div>
      </TopWrapper>
      <BottomWrapper>
        <div className="bottom-title">
          全部新碟
          <div className="category">
            <a href="todo">全部</a>
            <span>|</span>
            <a href="todo">华语</a>
            <span>|</span>
            <a href="todo">欧美</a>
            <span>|</span>
            <a href="todo">韩国</a>
            <span>|</span>
            <a href="todo">日本</a>
          </div>
        </div>
        <div className="bottom-image">
          {
            albums && albums.map((item, index) => {
              return (
                <NavLink to={{
                  pathname: "/discover/albumlist",
                  id: item.id
                }} key={item.id}>
                  <PHNewAlbumCover
                    key={item.id}
                    info={item}
                    className="top-image-item" />
                </NavLink>

              )
            })
          }
        </div>
        <PHPagination
          currentPage={currentPage}
          total={topAlbums.total}
          onPageChange={onChange}
        />
      </BottomWrapper>
    </AlbumWrapper>
  )
})
