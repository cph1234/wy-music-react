import React, { memo } from 'react';
import { FriendWrapper } from './style';

export default memo(function PHFriend() {
  return (
    <FriendWrapper className="wrap-v2">
      <div className="bgimg notlogin"></div>
      <button className="btn notlogin"></button>
    </FriendWrapper>
  )
})




