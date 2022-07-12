import React, { memo } from 'react';
import { LoginWrapper } from './style';

export default memo(function PHLogin() {
  return (
    <LoginWrapper className="sprite_02">
      <div className="content">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </div>
      <a href="todo" className="btn sprite_02">用户登录</a>
    </LoginWrapper>
  )
})
