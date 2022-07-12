import React, { memo, useEffect } from 'react';
import { RankingWrapper, LeftWrapper, RightWrapper } from './style';
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { shallowEqual, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { getRanking, getAllTopListAction } from './store/actionCreator';
import PHAnchorItem from '@/components/anchor-item';

export default memo(function PHRanking(props) {
  const { route } = props;
  const { upRanking, newRanking, originRanking, hotRanking, allList } = useSelector(state => ({
    upRanking: state.get('ranking').get('upRanking'),
    newRanking: state.get('ranking').get('newRanking'),
    originRanking: state.get('ranking').get('originRanking'),
    hotRanking: state.get('ranking').get('hotRanking'),
    allList: state.get('ranking').get('allList'),
  }), shallowEqual)
  // console.log(allList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRanking(19723756));
    dispatch(getRanking(3779629));
    dispatch(getRanking(2884035));
    dispatch(getRanking(3778678));
    dispatch(getAllTopListAction())
  }, [dispatch])
  return (
    <RankingWrapper>
      <div className="content wrap-v2">
        <LeftWrapper>
          <div className="tabber">云音乐特色榜</div>
          <div className="link">
            <NavLink to={"/discover/ranking/up"}>
              <PHAnchorItem info={upRanking}></PHAnchorItem>
            </NavLink>
            <NavLink to={"/discover/ranking/new"}>
              <PHAnchorItem info={newRanking}></PHAnchorItem>
            </NavLink>
            <NavLink to={"/discover/ranking/origin"}>
              <PHAnchorItem info={originRanking}></PHAnchorItem>
            </NavLink>
            <NavLink to={"/discover/ranking/top"}>
              <PHAnchorItem info={hotRanking}></PHAnchorItem>
            </NavLink>
          </div>
          <div className="tabber">全球媒体榜</div>
          <div className="link">
            {
              allList && allList.slice(4).map((item, index) => {
                return <PHAnchorItem info={item} key={item.id}></PHAnchorItem>
              })
            }
          </div>
        </LeftWrapper>
        <RightWrapper>
          {renderRoutes(route.routes)}
        </RightWrapper>
      </div>
    </RankingWrapper>
  )
})
