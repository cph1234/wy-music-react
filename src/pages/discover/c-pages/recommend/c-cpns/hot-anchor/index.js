import React, { memo } from 'react';
import { HotAnchorWrapper } from './style';
import { hotRadios } from '@/services/local-data';
import PHAnchorItem from '@/components/anchor-item'
import { NavLink } from 'react-router-dom';


export default memo(function PHHotAnchor(props) {
  return (
    <HotAnchorWrapper>
      <div className="tabbar">
        <span className="title">热门主播</span>
      </div>
      <div>
        {
          hotRadios.map((item, index) => {
            return (
              <NavLink to={{ pathname: "/discover/personpage", accountId: item.accountId, artistInformation: item }} key={item.url}>
                <PHAnchorItem info={item}></PHAnchorItem>
              </NavLink>

            )
          })
        }
      </div>
    </HotAnchorWrapper>
  )
})
