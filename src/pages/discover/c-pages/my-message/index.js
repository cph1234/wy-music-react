import React, { memo, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch } from 'react-redux'
import { WrapperMyMessage, WrapperLeft, WrapperRight } from './style'
import { getMymessageAction, getPrivateHistoryAction } from './store/actionCreators'
import { useSelector } from 'react-redux'
import { getSizeImage, timestampToTime, timestampToTime2 } from '@/utils/format-utils'

export default memo(function PHMyMessage() {
  // const [totalnum, settotalnum] = useState(200)
  const [message1, setmessage1] = useState(false)
  const [message2, setmessage2] = useState(true)
  const [message3, setmessage3] = useState(false)
  const [message4, setmessage4] = useState(false)
  const [privateFlag, setprivateFlag] = useState(true);
  const { privateInfo, privateHistory } = useSelector(state => ({
    privateInfo: state.get("myMessage").get("privateInfo"),
    privateHistory: state.get("myMessage").get("privateHistory")
  }), shallowEqual)
  const dispatch = useDispatch()
  const testRef = useRef();
  useEffect(() => {
    dispatch(getMymessageAction())
  }, [dispatch])
  const msgs = privateInfo && privateInfo.msgs;
  // console.log(msgs)
  const history = privateHistory && privateHistory.msgs && privateHistory.msgs;
  const nickname = history && history[0].fromUser.nickname;
  const getHistory = (uid) => {
    dispatch(getPrivateHistoryAction(uid))
    setprivateFlag(false)
  }
  let count = 200
  function countChar() {
    count = 200 - testRef?.current?.value?.length;
    // settotalnum(count)
    // count = 200 - document.getElementById("text")?.value.length;
  }
  const setflag1 = () => {
    setmessage1(true)
    setmessage2(false)
    setmessage3(false)
    setmessage4(false)
  }
  const setflag2 = () => {
    setmessage1(false)
    setmessage2(true)
    setmessage3(false)
    setmessage4(false)
  }
  const setflag3 = () => {
    setmessage1(false)
    setmessage2(false)
    setmessage3(true)
    setmessage4(false)
  }
  const setflag4 = () => {
    setmessage1(false)
    setmessage2(false)
    setmessage3(false)
    setmessage4(true)
  }
  return (
    <WrapperMyMessage className="wrap-v2">
      <WrapperLeft>
        <div className="message-title">我的消息</div>
        <div className="title-1" onClick={e => { setflag1() }}>
          <span className="title-1-1 sprite_icon2"></span>
          <span className="title-1-2">我的</span>
        </div>
        <div className="title-2" onClick={e => { setflag2() }}>
          <span className="title-2-1 sprite_icon2"></span>
          <span className="title-2-2">私信</span>
        </div>
        <div className="title-3" onClick={e => { setflag3() }}>
          <span className="title-3-1 sprite_icon2"></span>
          <span className="title-3-2">评论</span>
        </div>
        <div className="title-4" onClick={e => { setflag4() }}>
          <span className="title-4-1 sprite_icon2"></span>
          <span className="title-4-2">通知</span>
        </div>
        <div className="title-5">
          一键已读
        </div>
      </WrapperLeft>
      <WrapperRight>
        {
          message1 && <div>
            <div className="private-title"><span>@我的</span></div>
            <div className="no-message">
              <div className="no-message-1 sprite_icon2"></div>
              <div className="no-message-2">暂时还没收到通知</div>
            </div>
          </div>
        }
        {
          message2 && <div>
            {
              privateFlag && <div>
                <div className="private-title">
                  <span>私信</span>
                  <button className="menu-button">发新私信</button>
                </div>
                <div className="private-list">
                  {
                    msgs && msgs.map((item, index) => {
                      const msg = JSON.parse(item.lastMsg);
                      // console.log(msg)
                      return (
                        <div key={item.lastMsgTime} className="private-item" onClick={e => getHistory(item.fromUser.userId)}>
                          <div className="item-1">
                            <img src={getSizeImage(item.fromUser.avatarUrl, 50)} alt="" />
                          </div>
                          <div className="item-2">
                            <div className="item-2-1">{item.fromUser.nickname}</div>
                            <div className="item-2-2 text-nowrap">{msg.msg}</div>
                          </div>
                          <div className="item-3">
                            {timestampToTime2(item.lastMsgTime)}
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            }
            {
              !privateFlag && <div>
                <div className="history-title">
                  <div className="title-left">
                    <span className="left-1" onClick={e => setprivateFlag(true)}>私信</span>
                    <span className="left-2">&gt;</span>
                    <span className="left-3">{nickname}</span>
                  </div>
                  <div className="title-right">
                    <span className="right-1 sprite_icon2"></span>
                    <span className="right-2">清除对话</span>
                  </div>
                </div>
                <div className="communicate">
                  {
                    history && history.map((item, index) => {
                      const msg = JSON.parse(item.msg);
                      let cover = null;
                      let w = 60;
                      let title = null;
                      let url = "todo";
                      if (msg.generalMsg) {
                        cover = getSizeImage(msg.generalMsg.cover, 60);
                        title = msg.generalMsg.title;
                        url = msg.generalMsg.webUrl
                      } else if (msg.promotionUrl) {
                        cover = msg.promotionUrl.coverUrl
                        title = msg.title;
                        url = msg.promotionUrl.url
                        w = 90;
                      }
                      // console.log(msg)
                      return <div key={item.id} className="communicate-item">
                        <div className="item-1">{timestampToTime(item.time)}</div>
                        <div className="item-2">
                          <img src={getSizeImage(item.fromUser.avatarUrl, 50)} alt="" />
                          <div className="item-2-2">
                            <div>{msg.msg}</div>
                            {cover && <a href={url}>
                              <div className="item-2-2-2">
                                <img src={cover} alt="" style={{ width: w }} />
                                <span>{title}</span>
                              </div>
                            </a>}
                          </div>
                        </div>
                      </div>
                    })
                  }
                </div>
                <div className="text">
                  <textarea
                    maxlength="200"
                    id="text"
                    ref={testRef}
                    onKeyUp={countChar()}
                    onKeyDown={countChar()}
                    onKeyPress={countChar()}></textarea>
                </div>
                <div>{count}</div>
              </div>
            }
          </div>
        }
        {
          message3 && <div>
            <div className="private-title">
              <span>评论</span>
            </div>
            <div className="no-message">
              <div className="no-message-1 sprite_icon2"></div>
              <div className="no-message-2">暂时还没收到通知</div>
            </div>
          </div>
        }
        {
          message4 && <div>
            <div className="private-title">
              <span>通知</span>
            </div>
            <div className="no-message">
              <div className="no-message-1 sprite_icon2"></div>
              <div className="no-message-2">暂时还没收到通知</div>
            </div>
          </div>
        }
      </WrapperRight>
    </WrapperMyMessage>
  )
})
