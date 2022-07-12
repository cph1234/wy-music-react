import React, { memo } from 'react';
import { SingerWrapper } from './style';

export default memo(function PHSettleSingerItem(props) {
  const { name, picUrl, alias } = props.info;
  return (
    <SingerWrapper>
      <div className="image">
        <img src={picUrl} alt="" />
      </div>
      <div className="info">
        <h4 className="name text-nowrap">{alias.join("") || name}</h4>
        <p>{name}</p>
      </div>
    </SingerWrapper>
  )
})
