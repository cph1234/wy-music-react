import React, { memo, useEffect } from 'react';
import PHThemeHeaderRCM from '@/components/theme-header-rcm';

import PHSongsCover from '../../../../../../components/songs-cover'
import { getHotRecommendAction } from '../../store/actionCreators'
import { shallowEqual, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { HotRecommendWrapper } from './style'
import { NavLink } from 'react-router-dom';



export default memo(function PHHotRecommend() {
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.get('recommend').get("hotRecommends")
  }),shallowEqual)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotRecommendAction())
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <PHThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]} routeTo="/discover/songs"></PHThemeHeaderRCM>
      <div className="recommend-list">
        {
          hotRecommends && hotRecommends.map((item, index) => {
            return (
              <NavLink to={{
                pathname: "/discover/songlist",
                id: item.id
              }} key={item.id}>
                <PHSongsCover info={item} key={item.id} flag={false}></PHSongsCover>
              </NavLink>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
