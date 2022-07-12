import React, { memo } from 'react';
import { HeaderWrapper } from './style';
import { NavLink } from 'react-router-dom';

export default memo(function PHThemeHeaderRCM(props) {
  const { title, keywords = [], routeTo = "" } = props;
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map(item => {
              return (
                <div key={item}>
                  <NavLink to={{
                    pathname: "/discover/songs",
                    hotRecommendCategory: item
                  }}>
                    {item}
                  </NavLink>
                  {/* <NavLink to="/discover/album" >
                    <a href="todo" onClick={e => changeCategory(e, item)}>{item}</a>
                  </NavLink> */}
                  <i className="divider">|</i>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <NavLink to={routeTo}>更多</NavLink>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})
