import React, { memo, useEffect, useRef, useState } from 'react'
import { WrapperUserSetting } from './style'
// import { getUserLevelAction } from './store/actionCreators'
import { useDispatch } from 'react-redux'
import PHBaseSetting from './c-pages/base'
import PHBindSetting from './c-pages/bind'
import PHPrivacySetting from './c-pages/privacy'

import classNames from 'classnames'

export default memo(function PHUserSetting() {
  const [show, setshow] = useState(true)
  const [base, setbase] = useState(true)
  const [bind, setbind] = useState(false)
  const [privacy, setprivacy] = useState(false)
  const [imgUrl, setimgUrl] = useState("https://music.163.com/style/web2/img/default/default_cover.png")
  const [imgHW, setimgHW] = useState(["auto", "auto", "auto"])
  const dispatch = useDispatch();
  const imgRef = useRef()
  useEffect(() => {
    // dispatch(getUserLevelAction())
  }, [dispatch])
  const baseClick = () => {
    setbase(true);
    setbind(false);
    setprivacy(false);
  }
  const bindClick = () => {
    setbase(false);
    setbind(true);
    setprivacy(false);
  }
  const privacyClick = () => {
    setbase(false);
    setbind(false);
    setprivacy(true);
  }
  const selectImg = () => {
    // console.log(imgRef)
    console.log(document.getElementById("file").src)
    let url = null;
    let fileObj = imgRef.current.files[0];
    if (window.createObjcectURL !== undefined) {
      url = window.createOjcectURL(fileObj);
    } else if (window.URL !== undefined) {
      url = window.URL.createObjectURL(fileObj);
    } else if (window.webkitURL !== undefined) {
      url = window.webkitURL.createObjectURL(fileObj);
    }
    setimgUrl(url)
    // 创建对象
    let img = new Image();
    // 改变图片的src
    img.src = url;
    // 加载完成执行
    img.onload = function () {
      // 打印
      let h = "auto";
      let w = "auto";
      let l = "auto";
      if (img.height > img.width) {
        h = "322px";
        w = "auto";
        l = img.width * 322 / img.height;
      } else {
        w = "322px";
        h = "auto";
        l = img.height * 322 / img.width;
      }
      setimgHW([h, w, l])
      console.log([img.height, img.width, l])
    };
  }
  return (
    <WrapperUserSetting className="wrap-v2">
      {
        show && <div className='default'>
          <div className="first-line">个人设置</div>
          <div className="second-line">
            <div className={classNames(base ? "active" : "")} onClick={e => baseClick()}>基本设置</div>
            <div className={classNames(bind ? "active" : "")} onClick={e => bindClick()}>绑定设置</div>
            <div className={classNames(privacy ? "active" : "")} onClick={e => privacyClick()}>隐私设置</div>
          </div>
          <div>
            {base && <PHBaseSetting showFlag={e => setshow(!show)}></PHBaseSetting>}
            {bind && <PHBindSetting></PHBindSetting>}
            {privacy && <PHPrivacySetting></PHPrivacySetting>}
          </div>
        </div>
      }
      {
        !show && <div className='change-img'>
          <div className='first-line'>
            <a href="todo">个人设置 </a>
            <span>&gt;</span>
            <span> 更换头像</span>
          </div>
          <div className='second-line'>
            <input type="file" className="select-file" ref={imgRef} onChange={e => selectImg()} />
            <button className="btn1 sprite_button">上传头像</button>
            <button className="btn2 sprite_button"></button>
            <div>支持jpg、png、bmp格式的图片，且文件小于20M</div>
          </div>
          <div className='three-line'>
            <div className='three-1'>
              <div className='image' style={{ height: imgHW[0], width: imgHW[1] }}>
                <img className='bottom-img' src={imgUrl} alt="" style={{ height: imgHW[0], width: imgHW[1] }} />
                <img className='top-img' src={imgUrl} alt="" style={{ height: imgHW[0], width: imgHW[1], clip: "rect(0, 60px, 100px, 0)" }} />
                <div className='choose' style={{ height: imgHW[2] + "px", width: imgHW[2] + "px", left: imgHW[0] === "auto" ? `${161 - imgHW[2] / 2}px` : 0, top: imgHW[1] === "auto" ? `${161 - imgHW[2] / 2}px` : 0 }} >
                </div>
              </div>
            </div>
            <div className='three-2'>

            </div>
          </div>
          <div className='forth-line'>
            <button className="btn1 sprite_button">保存</button>
            <button className="btn2 sprite_button"></button>
            <button className="btn1 sprite_button">取消</button>
            <button className="btn2 sprite_button"></button>
          </div>
        </div>
      }
    </WrapperUserSetting>
  )
})
