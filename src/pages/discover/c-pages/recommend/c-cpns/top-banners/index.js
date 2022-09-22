import React, { memo, useCallback, useRef, useState } from 'react';
import { getTopBannersAction } from '../../store/actionCreators';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { LeftWrapper, RightWrapper, BannerWrapper, BannerControl } from './style';
import { Carousel } from 'antd';

export default memo(function PHTopBanners() {
  const [currentState, setcurrentState] = useState(0);
  const dispatch = useDispatch();
  const { topBanners } = useSelector(state => ({
    topBanners: state.get("recommend").get("topBanners"),
  }), shallowEqual)

  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch])
  const bannerRef = useRef();

  const beforeChange = useCallback(
    (from, to) => {
      setcurrentState(to)
    }, [])

  const bgImage = topBanners && topBanners[currentState] && topBanners[currentState].imageUrl && topBanners[currentState].imageUrl + "?imageView&blur=40x20";
  return (
    <div>
      <BannerWrapper bgImage={bgImage}>
        <div className="wrap-v2 banner">
          <LeftWrapper>
            <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={beforeChange}>
              {
                topBanners && topBanners.map((item, index) => {
                  return (
                    <div className="banner-item" key={item.imageUrl}>
                      <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                    </div>
                  )
                })
              }
            </Carousel>
          </LeftWrapper>
          <RightWrapper>
            <a className='download' href="https://music.163.com/#/download" target="_blank" rel="noreferrer"> </a>
            <div className='download btn'></div>
          </RightWrapper>
          <BannerControl>
            {/* 控制左右的翻页 */}
            <button className="btn left banner_sprite" onClick={e => bannerRef.current.prev()}></button>
            <button className="btn right banner_sprite" onClick={e => bannerRef.current.next()}></button>
          </BannerControl>
        </div>
      </BannerWrapper>
    </div>
  )
})
