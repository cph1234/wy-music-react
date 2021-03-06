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
    // const cookie=localStorage.getItem('cookie')
    // // console.log(cookie);
    // if(cookie!==null){
    //   dispatch(loginSuccessAction(false))
    // }
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
      alert('????????????????????????????????????');
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
    // localStorage.removeItem("cookie");
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
    //?????????????????????????????????
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
    //??????????????????
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
              <span>??????</span>
              <i onClick={e => isLogin()}>??</i>
            </div>
            {
              loginWay && !cellphoneNum && (
                <div>
                  <div className="center-login">
                    <div className="center-left phone"></div>
                    <div className="center-right">
                      <div className="center-right-top">????????????</div>
                      <div className="center-right-center">
                        <img src={qrimg} alt="" />
                      </div>
                      <div className="center-right-bottom">
                        ??????<a href="todo">???????????????App</a>????????????
                      </div>
                    </div>
                  </div>
                  <div className="bottom-login">
                    <span onClick={e => setloginWay(false)}>????????????????????????</span>
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
                        <button className="left-btn1-1 sprite_button" onClick={e => isCellphone()}>???????????????</button>
                        <button className="left-btn1-2 sprite_button"></button>
                      </div>
                      <div className="left-btn2">
                        <button className="left-btn2-1 sprite_button">??????</button>
                        <button className="left-btn2-2 sprite_button"></button>
                      </div>
                    </div>
                    <div className="center-right2">
                      <div className="right-1">
                        <a href="todo">
                          <span className="span1 logo"></span>
                          <span className="span2">????????????</span>
                        </a>
                      </div>
                      <div className="right-2">
                        <a href="todo">
                          <span className="span1 logo"></span>
                          <span className="span2">QQ??????</span>
                        </a>
                      </div>
                      <div className="right-3">
                        <a href="todo">
                          <span className="span1 logo"></span>
                          <span className="span2">????????????</span>
                        </a>
                      </div>
                      <div className="right-4">
                        <a href="todo">
                          <span className="span1 logo"></span>
                          <span className="span2">????????????????????????</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-login2">
                    <input type="checkbox" value="??????" style={{ marginRight: "2px" }} ref={inputConfirm} />
                    <span>??????</span>
                    <a href="todo">??????????????????</a>
                    <a href="todo">??????????????????</a>
                    <a href="todo">????????????????????????</a>
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
                    <input type="text" placeholder="??????????????????" size={11} autoComplete="off"
                      ??nf??cus="this.placeholder=''" ??nblur="this.placeholder='??????????????????'"
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
                      <input type="password" placeholder="???????????????" autocomplete="off"
                        ??nf??cus="this.placeholder=''" ??nblur="this.placeholder='???????????????'"
                        onChange={e => getPassword(e)} />
                      <a href="todo">???????????????</a>
                    </div>}

                  {!loginWayPhones &&
                    <div className='captcha'>
                      <input type="text" placeholder="??????????????????" autocomplete="off"
                        ??nf??cus="this.placeholder=''" ??nblur="this.placeholder='??????????????????'"
                        onChange={e => getCaptcha(e)} />
                      <button className='btn1 sprite_button' onClick={e => sendCaptcha()}>???????????????</button>
                      <button className='btn2 sprite_button'></button>
                    </div>}

                  <div className="err-message">{errMessage}</div>
                  <div className="login-way">
                    <a href="todo" onClick={e => loginWayPhone(e)}>{loginWayPhones ? "??????" : "??????"}??????</a>
                    <div className="aotu-login">
                      <input type="checkbox" />
                      <div>????????????</div>
                    </div>
                  </div>
                  <div className="bottom-btn">
                    <button className="left-btn1-1 sprite_button" onClick={e => cellphoneLogin()}>??????</button>
                    <button className="left-btn1-2 sprite_button"></button>
                  </div>
                  <div className="other-bottom">
                    <a href="todo">&lt;&nbsp;??????????????????</a>
                    <a href="todo">???????????????????????????&nbsp;&gt;</a>
                  </div>
                </div>
              )
            }
          </div>
        }
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">???????????????</a>
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
            placeholder="??????/??????/??????/??????"
            prefix={<SearchOutlined />}
            onChange={e => getSearchContent(e)}
            onFocus={e => showSearchFocus()}
            onBlur={e => closeSearch()}
            onKeyUp={e => toSearch(e)}
          />
          {
            showSearch && (
              <div className='search-content'>
                <div className='top'>???"{searchKey}"??????????????? &gt;</div>
                <div className='bottom'>
                  <div className='song'>
                    <div className='song-left'>
                      <i className='song-icon sprite_icon2'></i>
                      <span className='song-text'>??????</span>
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
                      <span className='artists-text'>??????</span>
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
                      <span className='albums-text'>??????</span>
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
                      <span className='playlists-text'>??????</span>
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
          <div className="center">???????????????</div>
          {
            loginSuccess && <div onClick={e => isLogin()} className="right-login">??????</div>
          }
          {
            !loginSuccess && <div className="avatar">
              <img src={getSizeImage(avatar, 30)} alt="" />
              <ul className="user-list">
                <li className="li-first"></li>
                <li className="li-second">
                  <NavLink to="/discover/userpage">????????????</NavLink>
                </li>
                <li className="li-third">
                  <NavLink to="/discover/mymessage">????????????</NavLink>
                </li>
                <li className="li-forth">
                  <NavLink to="/discover/userlevel">????????????</NavLink>
                </li>
                <li className="li-fifth">VIP??????</li>
                <li className="li-sixth">
                  <NavLink to="/discover/userSetting">????????????</NavLink>
                </li>
                <li className="li-seventh">????????????</li>
                <li className="li-eighth" onClick={e => loginOff()}>??????</li>
              </ul>
            </div>
          }
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper >
  )
})
