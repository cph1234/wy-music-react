import React, { memo } from 'react';
import { MenuWrapper } from './style';
import classNames from 'classnames'
import { useDispatch } from 'react-redux';
import { getSongCategoryListAction } from '../store/actionCreators'

export default memo(function PHMenu(props) {
  const dispatch = useDispatch();
  const { sub, categories } = props.info;
  let category = [];
  for (let i = 0; i < 5; i++) {
    let demo = sub && sub.filter(function (n) {
      return n.category === i
    })
    category[i] = demo;
  }
  // console.log(category);
  const changeCategory = (e, name) => {
    dispatch(getSongCategoryListAction(0, name));
    e.preventDefault();
  }
  return (
    <MenuWrapper>
      <div className="triangle"></div>
      <div className="menu-top">
        <button className="btn menu-button">全部风格</button>
      </div>
      <div className="line"></div>
      <div className="category">
        {
          Object.values(categories).map((item, index) => {
            const iconClass = `icon-${index}`;
            return (
              <div className="list" key={item.id}>
                <div className="title">
                  <span className={classNames("sprite_icon2 title-icon", iconClass)}></span>
                  {item}
                </div>
                <div className="item">
                  {
                    category[index].map((iten, indey) => {
                      return (
                        <div className="iten" key={iten.name}>
                          <a href="todo" onClick={e => { changeCategory(e, iten.name) }}>{iten.name}</a>
                          <span>|</span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </MenuWrapper>
  )
})
