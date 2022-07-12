import React, { memo } from 'react';
import { MineWrapper } from './style';

export default memo(function PHMine() {
  return (
    <MineWrapper className="wrap-v2 mymusic">
      <div className="bgimg  mymusic"></div>
      <button className="btn mymusic"></button>
    </MineWrapper>
  )
})
