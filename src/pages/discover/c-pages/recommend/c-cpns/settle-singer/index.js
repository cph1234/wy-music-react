import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { SingerWrapper } from './style';
import { getSettleSingerAction } from '../../store/actionCreators';
import PHSettleSingerItem from '@/components/settle-singer-item';
import { NavLink } from 'react-router-dom';

export default memo(function PHSinger() {
  const { settleSinger } = useSelector(state => ({
    settleSinger: state.get("recommend").get("settleSinger")
  }), shallowEqual)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSettleSingerAction(5))
  }, [dispatch])
  return (
    <SingerWrapper>
      <div className="tabbar">
        <span className="title">入驻歌手</span>
        <a href="todo" className="more">查看全部 &gt;</a>
      </div>
      <div className="list">
        {
          settleSinger && settleSinger.map((item, index) => {
            return (
              <NavLink to={{ pathname: "/discover/personpage", accountId: item.accountId, artistInformation: item }} key={item.id}>
                <PHSettleSingerItem info={item}></PHSettleSingerItem>
              </NavLink>
              
            )
          })
        }
      </div>
      <a href="https://music.163.com/st/musician" className="btn sprite_button">申请成为网易音乐人</a>
    </SingerWrapper>
  )
})
