import * as actionTypes from './constants';

import { getTopBanners, getHotRecommends, getNewAlbum, getTopList, settleSinger, getUserAccount, getUserInformation, getVip } from '@/services/recommend';
import { getQrKey, getQrCheck, getQrCreate, getCellphone, getCaptchaSent, getCaptchaVerify } from '@/services/login'
import { getSignin } from '@/services/user'
import { getSearchContent, getSearchSuggest } from '@/services/search'
import storageUtils from '@/utils/storage'
import axios from 'axios';

export const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannersAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const changeHotRecommendAction = res => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

export const getHotRecommendAction = () => {
  return dispatch => {
    getHotRecommends().then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

export const getNewAlbumAction = () => {
  return dispatch => {
    getNewAlbum().then(res => {
      dispatch(changeAlbumAction(res))
    })
  }
}

export const changeAlbumAction = res => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

export const changeUpRanking = res => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

export const changeNewRanking = res => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

export const changeOriginRanking = res => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

export const getRanking = (id) => {
  return dispatch => {
    // const upRanking = getTopList(19723756)
    // const newRanking = getTopList(3779629)
    // const originRanking = getTopList(2884035)
    // axios.all([upRanking, newRanking, originRanking]).then(([res1, res2, res3]) => {
    //   console.log(res1, res2, res3);
    //   dispatch(changeUpRanking(res1));
    //   dispatch(changeNewRanking(res2));
    //   dispatch(changeOriginRanking(res3));
    // })
    getTopList(id).then(res => {
      switch (id) {
        case 19723756:
          dispatch(changeUpRanking(res));
          break;
        case 3779629:
          dispatch(changeNewRanking(res));
          break;
        case 2884035:
          dispatch(changeOriginRanking(res));
          break;
        default:
          break;
      }
    })
  }
}

export const getSettleSingerAction = (limit) => {
  return dispatch => {
    settleSinger(limit).then(res => {
      dispatch(changeSettleSingerAction(res))
    })
  }
}

export const changeSettleSingerAction = res => ({
  type: actionTypes.CHANGE_SETTLE_SINGER,
  settleSinger: res.artists
})

export const getQrCreateAction = () => {
  return dispatch => {
    getQrKey().then(res => {
      // console.log(res.data.unikey)
      getQrCreate(res.data.unikey).then(res2 => {
        // console.log(res2)
        dispatch(changeQrCreateAction(res2))
      })
      //获取状态
      let timer = setInterval(async () => {
        const statusRes = await getQrCheck(res.data.unikey)
        if (statusRes.code === 800) {
          // alert('二维码已过期,请重新获取')
          clearInterval(timer)
        }
        if (statusRes.code === 803) {
          // 这一步会返回cookie
          clearInterval(timer)
          // alert('授权登录成功')
          dispatch(changeQrCheckAction(statusRes))
          // console.log(statusRes);
          dispatch(errMessageAction(("")))
          dispatch(loginSuccessAction(false))
          localStorage.setItem('cookie', statusRes.cookie)
          let userAccount=await getUserAccount()
          console.log(userAccount);
          dispatch(getUserInformationAction(userAccount.account.id))
          storageUtils.saveUser(userAccount, statusRes.cookie)
          
        }
      }, 3000)
      // getQrCheck(res.data.unikey).then(res => {
      //   //800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功
      //   let flag = true
      //   console.log(res);
      //   while (flag) {
      //     if (res.code === 800) {
      //       getQrCreateAction()
      //       flag = false
      //     } else if (res.code === 801) {
      //       setTimeout(() => {
      //         console.log('801,100ms', res);
      //       }, 1000)
      //     } else if (res.code === 802) {
      //       setTimeout(() => {
      //         console.log('802,100ms', res);
      //       }, 1000)
      //     } else if (res.code === 803) {
      //       console.log(res);
      //       dispatch(changeQrCheckAction(res))
      //       flag = false
      //     }
      //   }
      // })
    })
  }
}

// export const getQrCheckAction = (key) => {
//   return dispatch => {
//     getQrCheck(key).then(res => {
//       dispatch(changeQrCheckAction(res))
//     })
//   }
// }

export const changeQrCheckAction = res => ({
  type: actionTypes.CHANGE_QR_CHECK,
  qrCheck: res
})
export const changeQrCreateAction = res => ({
  type: actionTypes.CHANGE_QR_CREATE,
  qrCreate: res
})

export const getCellphoneAction = (phone, password) => {
  let flag = false;
  return dispatch => {
    getCellphone(phone, password).then(res => {
      console.log(res);
      if (phone.length === 0) {
        dispatch(errMessageAction("请输入手机号"))
      } else if (password.length === 0) {
        dispatch(errMessageAction("请输入密码"))
      } else if (phone.length !== 11) {
        dispatch(errMessageAction("请输入正确的手机号"))
      } else if (/^[a-zA-Z]+$/.test(password) || /^[0-9]+$/.test(password)) {
        dispatch(errMessageAction("密码错误超过限制"))
      } else {
        dispatch(changeCellphone(res));
        const code = res.code;
        if (code === 502)
          dispatch(errMessageAction(("手机号或密码错误")))
        else {
          dispatch(errMessageAction(("")))
          dispatch(loginSuccessAction(false))
          dispatch(getUserInformationAction(res.account.id))
          storageUtils.saveUser(res)
          flag = true;
        }
      }
    }).then(res => {
      if (flag) {
        console.log(localStorage)
        dispatch(getVipAction())
      }
    })
  }
}

export const changeCellphone = res => ({
  type: actionTypes.CHANGE_CELLPHONE,
  cellphone: res
})

export const errMessageAction = res => ({
  type: actionTypes.ERR_MESSAGE,
  errMessage: res
})

export const loginSuccessAction = res => ({
  type: actionTypes.LOGIN_SUCEESS,
  loginSuccess: res
})

export const getUserInformationAction = uid => {
  return dispatch => {
    getUserInformation(uid).then(res => {
      dispatch(changeUserInformationAction(res))
    })
  }
}

export const changeUserInformationAction = res => ({
  type: actionTypes.USER_INFORMATION,
  userInformation: res
})

export const getVipAction = () => {
  return dispatch => {
    getVip().then(res => {
      dispatch(changeVipAction(res))
    })
  }
}

export const changeVipAction = res => ({
  type: actionTypes.VIP,
  vip: res
})

export const getSigninAction = (type = 1) => {
  return dispatch => {
    getSignin(type).then(res => {
      dispatch(changeSigninAction(res))
    })
  }
}

export const changeSigninAction = res => ({
  type: actionTypes.USER_SIGNIN,
  signin: res
})

export const getCaptchaSentAction = (phone) => {
  return dispatch => {
    getCaptchaSent(phone)
  }
}

export const getCaptchaVerifyAction = (phone, captcha) => {
  return dispatch => {
    getCaptchaVerify(phone, null, captcha)
  }
}

export const getSearchContentAction = (keywords, type = 1, limit = 30, offset = 0) => {
  return dispatch => {
    if (typeof type === "number") {
      getSearchContent(keywords, limit, offset, type).then(res => {
        dispatch(changeSearchContentAction(res))
      })
    } else if (typeof type === "object") {
      let request0 = getSearchContent(keywords, limit, offset, type[0])
      let request1 = getSearchContent(keywords, limit, offset, type[1])
      let request2 = getSearchContent(keywords, limit, offset, type[2])
      let request3 = getSearchContent(keywords, limit, offset, type[3])
      axios.all([request0, request1, request2, request3]).then(([res1, res2, res3, res4]) => {
        dispatch(changeSearchContentAction([res1.result, res2.result, res3.result, res4.result]))
      })
    }

  }
}

export const changeSearchContentAction = res => ({
  type: actionTypes.SEARCH_CONTENT,
  searchContent: res
})

export const getSearchSuggestAction = (keywords) => {
  return dispatch => {
    getSearchSuggest(keywords).then(res => {
      dispatch(changeSearchSuggestAction(res))
    })
  }
}

export const changeSearchSuggestAction = res => ({
  type: actionTypes.SEARCH_SUGGEST,
  searchSuggest: res.result
})
