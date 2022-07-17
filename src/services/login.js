import request from './request';
//二维码
export function getQrKey() {
  return request({
    method: "post",
    url: `/login/qr/key?timerstamp=${Date.now()}`,
    withCredentials: true, //关键
  })
}

export function getQrCreate(key) {
  return request({
    url: `/login/qr/create?qrimg=true&timerstamp=${Date.now()}`,
    withCredentials: true, //关键
    params: {
      key
    }
  })
}

export function getQrCheck(key) {
  return request({
    method: "post",
    url: `/login/qr/check?timerstamp=${Date.now()}`,
    withCredentials: true, //关键
    params:{
      key
    }
  })
}

//手机登录
export function getCellphone(phone, password) {
  return request({
    url: "/login/cellphone",
    params: {
      phone,
      password
    }
  })
}
//发送验证码
export function getCaptchaSent(phone) {
  return request({
    url: "/captcha/sent",
    params: {
      phone
    }
  })
}
//验证验证码
export function getCaptchaVerify(phone,password=null,captcha) {
  console.log(captcha);
  return request({
    url: "/login/cellphone",
    params: {
      phone,
      captcha
    }
  })
}