import React, { memo, useState } from 'react';
import { DjRadioWrapper, TopWrapper, CenterWrapper, BottomWrapper } from './style'
import classNames from 'classnames';
import { page1Icons, page2Icons } from '@/common/local-data'
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getRecommendProgramAction, getProgramToplistAction, getRecommendTypeAction } from './store/actionCreators';
import { getSizeImage } from '@/utils/format-utils'

export default memo(function PHDjradio() {
  const [page, setpage] = useState(true);
  const icons = page ? page1Icons : page2Icons;
  const { recommendProgram, programToplist, recommendType } = useSelector(state => ({
    recommendProgram: state.get("djradio").get("recommendProgram"),
    programToplist: state.get("djradio").get("programToplist"),
    recommendType: state.get("djradio").get("recommendType")
  }),shallowEqual)
  // console.log(recommendType[0].djRadios)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecommendProgramAction())
    dispatch(getProgramToplistAction(0, 10))
    dispatch(getRecommendTypeAction())
  }, [dispatch])
  const leftClick = () => {
    setpage(true);
  }
  const rightClick = () => {
    setpage(false);
  }
  const highestScore = programToplist && programToplist[0] && programToplist[0].score;
  return (
    <DjRadioWrapper className="wrap-v2">
      <TopWrapper>
        <button className="btn-left radio_slide" onClick={e => leftClick()}></button>
        {
          icons.map((item, index) => {
            return (
              <a href="todo" className={classNames("item")}>
                <div className={classNames("img", item.class)}></div>
                <div className={classNames("content", item.class === "icon20" ? "color-blue" : "")}>{item.name}</div>
              </a>
            )
          })
        }
        <button className="btn-right radio_slide" onClick={e => rightClick()}></button>
        <button className={classNames("bottom-point1", "radio_slide", page ? "active" : "positive")} onClick={e => leftClick()}></button>
        <button className={classNames("bottom-point2", "radio_slide", !page ? "active" : "positive")} onClick={e => rightClick()}></button>
      </TopWrapper>

      <CenterWrapper>
        <div className="left">
          <div className="left-title">
            <div>推荐节目</div>
            <a href="todo">更多 &gt;</a>
          </div>
          <ul className="left-list">
            {
              recommendProgram && recommendProgram.map((item, index) => {
                return (
                  <li className="list-item" key={item.id}>
                    <a href="todo" className="item-left">
                      <img src={getSizeImage(item.coverUrl, 40)} alt="" />
                    </a>
                    <div className="item-center">
                      <div className="text-nowrap">{item.name}</div>
                      <div className="text-nowrap">{item.radio.name}</div>
                    </div>
                    <a href="todo" className="item-right">{item.radio.category}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="right">
          <div className="right-title">
            <div>节目排行榜</div>
            <a href="todo">更多 &gt;</a>
          </div>
          <ul className="right-list">
            {
              programToplist && programToplist.map((item, index) => {
                let percent = item.score / highestScore > 0.1 ? item.score / highestScore : 0.1;
                return (
                  <li className="list-item" key={item.id}>
                    <div className="item-left">
                      {index + 1 < 10 ? "0" : ""}{index + 1}
                    </div>
                    <a href="todo" className="item-center">
                      <img src={getSizeImage(item.program.coverUrl, 40)} alt="" />
                    </a>
                    <div className="item-right">
                      <div className="text-nowrap">{item.program.mainSong.name}</div>
                      <div className="text-nowrap">{item.program.dj.brand}</div>
                    </div>
                    <div className="score-bg">
                      <div className="score" style={{ width: `${percent * 96}px` }}></div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </CenterWrapper>

      <BottomWrapper>
        {
          recommendType && recommendType.map((item, index) => {
            return (
              <div className="item">
                <div className="item-title">
                  <div className="title-left">
                    {item.djRadios[0].category}
                    <span></span>
                    电台
                  </div>
                  <a href="todo">更多&gt;</a>
                </div>
                <div className="item-img">
                  {
                    item.djRadios.slice(0, 4).map((iten, indey) => {
                      return (
                        <div className="iten">
                          <img src={getSizeImage(iten.intervenePicUrl, 120)} alt="" />
                          <div className="iten-content">
                            <div className="first-line">{iten.name}</div>
                            <div className="second-line">{iten.rcmdtext}</div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </BottomWrapper>
    </DjRadioWrapper>
  )
})
