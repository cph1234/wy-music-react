import React, { memo, useEffect, useState } from 'react';
import { AritistWrapper, LeftWrapper, RightWrapper } from './style';
import { singerList, select } from '@/common/local-data';
import { shallowEqual, useDispatch } from 'react-redux';
import { getArtistListAction } from './store/actionCreators'
import { useSelector } from 'react-redux';
import { getSizeImage } from '@/utils/format-utils';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export default memo(function PHArtist() {
  const [type, settype] = useState(-1);
  const [area, setarea] = useState(-1);
  const [initial, setinitial] = useState();
  const [liIndex, setliIndex] = useState(0);
  const [liIndey, setliIndey] = useState(0);
  const [title, settitle] = useState("华语男歌手")
  const { artistList } = useSelector(state => ({
    artistList: state.get("artist").get("artistList")
  }), shallowEqual)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArtistListAction(type, area, initial))
  }, [dispatch, type, area, initial])
  const changeList = (e, item, index, indey, iten) => {
    e.preventDefault();
    setarea(item.area);
    settype(indey + 1);
    setinitial();
    setliIndex(index);
    setliIndey(indey);
    settitle(iten);
  }
  const changeName = (e, item) => {
    e.preventDefault();
    setinitial(item.toLowerCase());
  }
  console.log(artistList)
  return (
    <AritistWrapper className="wrap-v2">
      <LeftWrapper>
        {
          singerList.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <h2 className="item-title">{item.title}</h2>
                {
                  item.list.map((iten, indey) => {
                    return (
                      <li key={iten} className={classNames("item-li", { active: liIndex === index && liIndey === indey })}>
                        <span></span>
                        <a href="todo" onClick={e => changeList(e, item, index, indey, iten)}>{iten}</a>
                      </li>
                    )
                  })
                }
              </div>
            )
          })
        }
      </LeftWrapper>
      <RightWrapper>
        <div className="title">{title}</div>
        <div className="select">
          <a href="todo" className="hot">热门</a>
          {
            select.map((item, index) => {
              return <a href="todo" key={item} className="item" onClick={e => changeName(e, item)}>{item}</a>
            })
          }
          <a href="todo" className="other">其他</a>
        </div>
        <div className="detail">
          {
            artistList && artistList.slice(0, 10).map((item, index) => {
              return (
                <NavLink to={{ pathname: "/discover/artistdetail", id: item.id, artistInformation: item }}>
                  <div className="detail-item" key={item.id}>
                    <img src={getSizeImage(item.picUrl, 130)} alt="" />
                    <div>{item.name}</div>
                  </div>
                </NavLink>
              )
            })
          }
        </div>
        <div className="short">
          {
            artistList && artistList.slice(10).map((item, index) => {
              console.log(item)
              return (
                <NavLink to={{ pathname: "/discover/artistdetail", id: item.id, artistInformation: item }}
                  className="short-item"
                  key={item.id}>
                  {item.name}
                </NavLink>
              )
            })
          }
        </div>
      </RightWrapper>
    </AritistWrapper>
  )
})
