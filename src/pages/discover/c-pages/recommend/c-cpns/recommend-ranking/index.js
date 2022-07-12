import React, { memo, useEffect } from 'react';
import PHThemeHeaderRCM from '@/components/theme-header-rcm';
import { RankingWrapper } from './style'
import { shallowEqual, useDispatch } from 'react-redux';
import { getRanking } from '../../store/actionCreators';
import PHTopRanking from '@/components/top-ranking'
import { useSelector } from 'react-redux';

export default memo(function PHRecommendRanking() {
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.get('recommend').get("upRanking"),
    newRanking: state.get('recommend').get("newRanking"),
    originRanking: state.get('recommend').get("originRanking"),
  }), shallowEqual)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRanking(19723756))
    dispatch(getRanking(3779629))
    dispatch(getRanking(2884035))
    // dispatch(getRanking())
  }, [dispatch])
  return (
    <RankingWrapper>
      <PHThemeHeaderRCM title="榜单" routeTo="/discover/ranking"></PHThemeHeaderRCM>
      <div className="tops">
        <PHTopRanking info={upRanking} routeTo="/discover/ranking/up"></PHTopRanking>
        <PHTopRanking info={newRanking} routeTo="/discover/ranking/new"></PHTopRanking>
        <PHTopRanking info={originRanking} routeTo="/discover/ranking/origin"></PHTopRanking>
      </div>
    </RankingWrapper>
  )
})
