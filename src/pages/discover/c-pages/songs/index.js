import React, { memo, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSongCategoryAction, getSongCategoryListAction } from './store/actionCreators';
import { SongsWrapper, TopWrapper, ListWrapper, BottomWrapper } from './style';
import PHSongsCover from '@/components/songs-cover';
import PaginationWrapper from '@/components/pagination';
import { useState } from 'react';
import PHMenu from './drop-down-menu'
import { NavLink } from 'react-router-dom';


export default memo(function PHSongs(props) {
  const [currentPage, setcurrentPage] = useState(1);
  const [showMenu, setshowMenu] = useState(false);
  const dispatch = useDispatch();
  const { songCategory, songCategoryList, name } = useSelector(state => ({
    songCategory: state.get("songs").get("songCategory"),
    songCategoryList: state.get("songs").get("songCategoryList"),
    name: state.get("songs").get("name"),
  }), shallowEqual)
  const hotRecommendCategory = props.location.hotRecommendCategory;
  console.log(hotRecommendCategory || "全部");

  useEffect(() => {
    dispatch(getSongCategoryAction())
    // dispatch(getSongCategoryListAction())
    dispatch(getSongCategoryListAction(0, hotRecommendCategory));
  }, [dispatch, hotRecommendCategory])
  let playlist = songCategoryList && songCategoryList.playlists;
  let topPlaylist = playlist && playlist.slice(0, 6);
  console.log(topPlaylist);
  const onChange = (page, pageSize) => {
    setcurrentPage(page);
    const offset = 35 * (page - 1);
    dispatch(getSongCategoryListAction(offset))
  }
  return (
    <SongsWrapper className="wrap-v2">
      <TopWrapper>
        <div className="left">{name}</div>
        <div className="center">
          <button href="todo" className="a1 sprite_button" onClick={e => setshowMenu(!showMenu)}>
            <div className="a11">选择分类</div>
            <span className="sprite_icon2 a12"></span>
            {showMenu && <PHMenu info={songCategory} />}
          </button>
          <a href="todo" className="a2 sprite_button"> </a>
        </div>
        <div className="right">
          <a href="todo" className="a1 sprite_button">
            热门
          </a>
          <a href="todo" className="a2 sprite_button"> </a>
        </div>
      </TopWrapper>

      <ListWrapper>
        {
          playlist && playlist.map((item, index) => {

            return (
              <div className="item" key={index}>
                <NavLink to={{
                  pathname: "/discover/songlist",
                  id: item.id,
                  topPlaylist: topPlaylist
                }}>
                  <PHSongsCover info={item} flag={true} />
                </NavLink>
              </div>
            )
          })
        }
      </ListWrapper>

      <BottomWrapper>
        <PaginationWrapper
          currentPage={currentPage}
          total={songCategoryList && songCategoryList.total}
          onPageChange={onChange}
        />
      </BottomWrapper>
    </SongsWrapper>
  )
})
