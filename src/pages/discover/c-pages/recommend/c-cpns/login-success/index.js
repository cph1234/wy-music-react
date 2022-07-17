import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { WrapperLoginSuccess } from './style'
import { getSizeImage } from '@/utils/format-utils'
import { vipLevel } from '@/common/local-data'
import { useDispatch } from 'react-redux'
import { getSigninAction } from '../../store/actionCreators'

export default memo(function PHLoginSuccess() {
  const [isClick, setisClick] = useState(false)
  const { userInformation } = useSelector(state => ({
    userInformation: state.get("recommend").get("userInformation")
  }),shallowEqual)
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getSigninAction())
  // }, [dispatch])
  const avatar = userInformation && userInformation.profile && userInformation.profile.avatarUrl
  const nickname = userInformation && userInformation.profile && userInformation.profile.nickname
  // const uVipLevel = (userInformation && userInformation.level) || 2;
  const uVipLevel = 2;
  const vipUrl = vipLevel[uVipLevel - 1].url;
  const eventCount = userInformation && userInformation.profile && userInformation.profile.eventCount;
  const follows = userInformation && userInformation.profile && userInformation.profile.follows;
  const followeds = userInformation && userInformation.profile && userInformation.profile.followeds;
  // console.log(userInformation)
  const signin = () => {
    setisClick(true)
    dispatch(getSigninAction())
  }
  return (
    <WrapperLoginSuccess className="sprite_02">
      <div className="login-top">
        <div className="top-left">
          <img src={getSizeImage(avatar, 80)} alt="" />
        </div>
        <div className="top-right">
          <div className="right-top">
            <a href="todo">{nickname}</a>
            <img src={vipUrl} alt="" />
          </div>
          <div className="right-center sprite_icon3">
            <span>{uVipLevel}</span>
          </div>
          <div className="right-bottom">
            {
              !isClick && <button onClick={e => signin()} className="not-click">签到</button>
            }
            {
              isClick && <button className="has-click">已签到</button>
            }
          </div>
        </div>
      </div>
      <div className="login-bottom">
        <div className="bottom-first">
          <div className="first-1">{eventCount}</div>
          <div className="first-2">动态</div>
        </div>
        <div className="bottom-second">
          <div className="second-1">{follows}</div>
          <div className="second-2">关注</div>
        </div>
        <div className="bottom-third">
          <div className="third-1">{followeds}</div>
          <div className="third-2">粉丝</div>
        </div>
      </div>
    </WrapperLoginSuccess>
  )
})
