import React, { memo, useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { headerLinks, countrys_cn, codes } from '@/common/local-data';

import { HeaderLeft, HeaderRight, HeaderWrapper } from './style';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { shallowEqual, useDispatch } from 'react-redux';
import { getSearchKeywordAction } from '@/pages/discover/c-pages/search/store/actionCreators'
import { getCellphoneAction, loginSuccessAction, getQrCreateAction, getCaptchaSentAction, getCaptchaVerifyAction, getSearchSuggestAction } from '../../pages/discover/c-pages/recommend/store/actionCreators'
import classNames from 'classnames'
import { useSelector } from 'react-redux';
import { getSizeImage } from '@/utils/format-utils';
import storageUtils from '@/utils/storage'
import { useRef } from 'react';


export default memo(function PHAppHeader(props) {
  const { errMessage, loginSuccess, userInformation,
    searchSuggest, searchKeyWord, qrCreate } = useSelector(state => ({
      errMessage: state.get("recommend").get("errMessage"),
      loginSuccess: state.get("recommend").get("loginSuccess"),
      userInformation: state.get("recommend").get("userInformation"),
      searchSuggest: state.get("recommend").get("searchSuggest"),
      searchKeyWord: state.get("search").get("searchKeyWord"),
      qrCreate: state.get("recommend").get("qrCreate")
    }), shallowEqual)

  const [login, setlogin] = useState(false);
  const [loginWay, setloginWay] = useState(true)
  const [cellphoneNum, setcellphoneNum] = useState(false)
  const [active, setactive] = useState(false);
  const [phoneNum, setphoneNum] = useState();
  const [password, setpassword] = useState("");
  const [captcha, setcaptcha] = useState("");
  const [loginWayPhones, setloginWayPhones] = useState(false)
  const [showSearch, setshowSearch] = useState(false)
  const [searchKey, setsearchKey] = useState('')
  const dispatch = useDispatch()
  const inputConfirm = useRef(false);
  const history = useHistory()
  const qrimg = qrCreate && qrCreate.data && qrCreate.data.qrimg
  // useEffect(() => {
  //   dispatch(getCellphoneAction(17854298582, "cph971010"))
  // }, [dispatch])
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return <NavLink exact to={item.link}>
        {item.title}
        <i className="sprite_01 icon"></i>
      </NavLink>
    }
    return <a href={item.link}>{item.title}</a>
  }
  useEffect(() => {
    setsearchKey(searchKeyWord)
  }, [searchKeyWord])

  const avatar = userInformation && userInformation.profile && userInformation.profile.avatarUrl;
  const isLogin = () => {
    setlogin(!login)
    setloginWay(true)
    setcellphoneNum(false)
    dispatch(getQrCreateAction())
  }
  const isCellphone = () => {
    if (inputConfirm.current.checked) {
      setcellphoneNum(true)
    } else {
      alert('您需要同意我们的服务协议');
    }
  }
  const getPhoneNum = (e) => {
    setphoneNum(e.target.value)
  }
  const getPassword = (e) => {
    setpassword(e.target.value)
  }
  const getCaptcha = (e) => {
    setcaptcha(e.target.value)
  }
  const cellphoneLogin = () => {
    if (loginWayPhones) {
      dispatch(getCellphoneAction(phoneNum, password))
    } else {
      dispatch(getCaptchaVerifyAction(phoneNum, captcha))
    }

  }
  const loginOff = () => {
    dispatch(loginSuccessAction(true))
    storageUtils.deleteUser()
  }
  const loginWayPhone = (e) => {
    e.preventDefault();
    setloginWayPhones(!loginWayPhones)
  }
  const sendCaptcha = () => {
    dispatch(getCaptchaSentAction(phoneNum))
  }
  const getSearchContent = (event) => {
    //单曲，歌手，专辑，歌单
    if (event.target.value) {
      dispatch(getSearchSuggestAction(event.target.value))
      setshowSearch(true)
    } else {
      setshowSearch(false)
    }
    setsearchKey(event.target.value)
  }
  let timer;
  const showSearchFocus = () => {
    if (searchKey === '') {
      setshowSearch(false)
    } else {
      setshowSearch(true)
    }
    clearTimeout(timer)
  }
  const toSearch = (e) => {
    // console.log(history);
    if (e.keyCode === 13 && searchKey !== '') {
      dispatch(getSearchKeywordAction(searchKey))
      history.push({ pathname: '/search', state: { searchKey: searchKey } })
      setshowSearch(false)
    }
  }
  const closeSearch = () => {
    //解决冲突问题
    timer = setTimeout(() => {
      setshowSearch(false)
    }, 100)
  }
  // console.log(new Date().getTime())
  // console.log(inputConfirm.current.checked);
  return (
    <HeaderWrapper>

      <div className="content wrap-v1">
        {
          loginSuccess && login && <div className="login">
            <div className="top-login">
              <span>登录</span>
              <i onClick={e => isLogin()}>×</i>
            </div>
            {
              loginWay && !cellphoneNum && (
                <div>
                  <div className="center-login">
                    <div className="center-left phone"></div>
                    <div className="center-right">
                      <div className="center-right-top">扫码登录</div>
                      <div className="center-right-center">
                        <img src={qrimg} alt="" />
                      </div>
                      <div className="center-right-bottom">
                        使用<a href="todo">网易云音乐App</a>扫码登录
                      </div>
                    </div>
                  </div>
                  <div className="bottom-login">
                    <span onClick={e => setloginWay(false)}>选择其他登录模式</span>
                  </div>
                </div>
              )
            }
            {
              !loginWay && !cellphoneNum && (
                <div>
                  <div className="center-login2">
                    <div className="center-left2">
                      <div className="left-img platform"></div>
                      <div className="left-btn1">
                        <button className="left-btn1-1 sprite_button" onClick={e => isCellphone()}>手机号登录</button>
                        <button className="left-btn1-2 sprite_button"></button>
                      </div>
                      <div className="left-btn2">
                        <button className="left-btn2-1 sprite_button">注册</button>
                        <button className="left-btn2-2 sprite_button"></button>
                      </div>
                    </div>
                    <div className="center-right2">
                      <div className="right-1">
                        <a href="todo">
                          <span className="span1 logo"></span>
                          <span className="span2">微信登录</span>
                        </a>
                      </div>
                      <div className="right-2">
                        <a href="todo">
                          <span className="span1 logo"></span>
                          <span className="span2">QQ登录</span>
                        </a>
                      </div>
                      <div className="right-3">
                        <a href="todo">
                          <span className="span1 logo"></span>
                          <span className="span2">微博登录</span>
                        </a>
                      </div>
                      <div className="right-4">
                        <a href="todo">
                          <span className="span1 logo"></span>
                          <span className="span2">网易邮箱账号登录</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-login2">
                    <input type="checkbox" value="同意" style={{ marginRight: "2px" }} ref={inputConfirm} />
                    <span>同意</span>
                    <a href="todo">《服务条款》</a>
                    <a href="todo">《隐私政策》</a>
                    <a href="todo">《儿童隐私政策》</a>
                    <div className="qr qr_login_icon" onClick={e => setloginWay(true)}></div>
                  </div>
                </div>
              )
            }
            {
              cellphoneNum && (
                <div className="cellphone">
                  <div className="dropdown">
                    <div className="dropdown-left" onClick={e => setactive(!active)}>+86</div>
                    <input type="text" placeholder="请输入手机号" size={11} autoComplete="off"
                      οnfοcus="this.placeholder=''" οnblur="this.placeholder='请输入手机号'"
                      onChange={e => { getPhoneNum(e) }} />
                    <div className={classNames("dropdown-content", active ? "country-active" : "")}>
                      {
                        countrys_cn.map((item, index) => {
                          return (
                            <div className="content-item" key={item}>
                              <div>{item}</div>
                              <div>{codes[index]}</div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                  {loginWayPhones &&
                    <div className="password">
                      <input type="password" placeholder="请输入密码" autocomplete="off"
                        οnfοcus="this.placeholder=''" οnblur="this.placeholder='请输入密码'"
                        onChange={e => getPassword(e)} />
                      <a href="todo">忘记密码？</a>
                    </div>}

                  {!loginWayPhones &&
                    <div className='captcha'>
                      <input type="text" placeholder="请输入验证码" autocomplete="off"
                        οnfοcus="this.placeholder=''" οnblur="this.placeholder='请输入验证码'"
                        onChange={e => getCaptcha(e)} />
                      <button className='btn1 sprite_button' onClick={e => sendCaptcha()}>获取验证码</button>
                      <button className='btn2 sprite_button'></button>
                    </div>}

                  <div className="err-message">{errMessage}</div>
                  <div className="login-way">
                    <a href="todo" onClick={e => loginWayPhone(e)}>{loginWayPhones ? "短信" : "密码"}登录</a>
                    <div className="aotu-login">
                      <input type="checkbox" />
                      <div>自动登录</div>
                    </div>
                  </div>
                  <div className="bottom-btn">
                    <button className="left-btn1-1 sprite_button" onClick={e => cellphoneLogin()}>登录</button>
                    <button className="left-btn1-2 sprite_button"></button>
                  </div>
                  <div className="other-bottom">
                    <a href="todo">&lt;&nbsp;其他登录方式</a>
                    <a href="todo">没有帐号？免费注册&nbsp;&gt;</a>
                  </div>
                </div>
              )
            }
          </div>
        }
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
            onChange={e => getSearchContent(e)}
            onFocus={e => showSearchFocus()}
            onBlur={e => closeSearch()}
            onKeyUp={e => toSearch(e)}
          />
          {
            showSearch && (
              <div className='search-content'>
                <div className='top'>搜"{searchKey}"相关的用户 &gt;</div>
                <div className='bottom'>
                  <div className='song'>
                    <div className='song-left'>
                      <i className='song-icon sprite_icon2'></i>
                      <span className='song-text'>单曲</span>
                    </div>
                    <div className='song-right text-nowrap'>
                      {
                        searchSuggest && searchSuggest.songs && searchSuggest.songs.map(item => {
                          return (
                            <NavLink to={{ pathname: "/discover/singleSong", ids: item.id }} key={item.id}>
                              <div className='song-item-bcc' onClick={e => setshowSearch(false)}>
                                <div className='song-item text-nowrap'>{item.name}-{item.artists[0].name}</div>
                              </div>
                            </NavLink>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className='artists'>
                    <div className='artists-left'>
                      <i className='artists-icon sprite_icon2'></i>
                      <span className='artists-text'>歌手</span>
                    </div>
                    <div className='artists-right text-nowrap'>
                      {
                        searchSuggest && searchSuggest.artists && searchSuggest.artists.map(item => {
                          return (
                            <div className='artists-item-bcc' key={item.id}>
                              <div className='artists-item text-nowrap'>{item.name}</div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className='albums'>
                    <div className='albums-left'>
                      <i className='albums-icon sprite_icon2'></i>
                      <span className='albums-text'>专辑</span>
                    </div>
                    <div className='albums-right text-nowrap'>
                      {
                        searchSuggest && searchSuggest.albums && searchSuggest.albums.map(item => {
                          return (
                            <div className='albums-item-bcc' key={item.id}>
                              <div className='albums-item text-nowrap'>{item.name}-{item.artist.name}</div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className='playlists'>
                    <div className='playlists-left'>
                      <i className='playlists-icon sprite_icon2'></i>
                      <span className='playlists-text'>歌手</span>
                    </div>
                    <div className='playlists-right text-nowrap'>
                      {
                        searchSuggest && searchSuggest.playlists && searchSuggest.playlists.map(item => {
                          return (
                            <div className='playlists-item-bcc' key={item.id}>
                              <div className='playlists-item text-nowrap'>{item.name}</div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          <div className="center">创作者中心</div>
          {
            loginSuccess && <div onClick={e => isLogin()} className="right-login">登录</div>
          }
          {
            !loginSuccess && <div className="avatar">
              <img src={getSizeImage(avatar, 30)} alt="" />
              <ul className="user-list">
                <li className="li-first"></li>
                <li className="li-second">
                  <NavLink to="/discover/userpage">我的主页</NavLink>
                </li>
                <li className="li-third">
                  <NavLink to="/discover/mymessage">我的消息</NavLink>
                </li>
                <li className="li-forth">
                  <NavLink to="/discover/userlevel">我的等级</NavLink>
                </li>
                <li className="li-fifth">VIP会员</li>
                <li className="li-sixth">
                  <NavLink to="/discover/userSetting">个人设置</NavLink>
                </li>
                <li className="li-seventh">实名认证</li>
                <li className="li-eighth" onClick={e => loginOff()}>退出</li>
              </ul>
            </div>
          }
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper >
  )
})
