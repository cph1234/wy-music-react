import React, { memo, useEffect, useRef, useState } from 'react'
import { BaseWrapper } from './style'
import { province } from '@/common/province'
import { city2 } from '@/common/city2'
import { useSelector } from 'react-redux'
import { timestampToYearMonthDay } from '@/utils/format-utils'
import { getUserSettingAction } from '../../store/actionCreators'
import { useDispatch } from 'react-redux'


export default memo(function PHBaseSetting(props) {
  const { userInformation } = useSelector(state => ({
    userInformation: state.get("recommend").get("userInformation")
  }))
  const dispatch = useDispatch();
  const [yearSelect, setYearSelect] = useState(null)
  const [monthSelect, setMonthSelect] = useState(null)
  // const [daySelect, setDaySelect] = useState(null)
  const [days, setdays] = useState([])
  // const [provinceSelect, setprovinceSelect] = useState(null)
  const [citys, setcitys] = useState([])
  // const [citySelect, setcitySelect] = useState(null)
  const nameRef = useRef();
  const descriptionRef = useRef();
  const genderRef = useRef();
  const yearRef = useRef();
  const monthRef = useRef();
  const dayRef = useRef();
  const provinceRef = useRef();
  const cityRef = useRef();
  const years = [];
  const months = [];
  const provinces = Object.keys(city2);
  const profile = userInformation && userInformation.profile;
  const nickname = profile && profile.nickname;
  const description = profile && profile.description;
  const gender = profile && profile.gender;
  const birthday = profile && profile.birthday;
  const avatarUrl = profile && profile.avatarUrl;
  const timeRef = useRef([...timestampToYearMonthDay(birthday)])
  // console.log(timeRef.current)
  // let time = [];
  // if (birthday > 0) {
  //   time = timestampToYearMonthDay(birthday)
  // }
  // console.log(profile)
  const city = profile && profile.city;
  let cityName = "";
  let provinceName = "";
  let location = -1;
  Object.keys(city2).forEach(function (key) {
    if (location === -1) {
      location = city2[key].findIndex(item => {
        return item[1] === city
      })
      if (location !== -1) {
        provinceName = key;
        cityName = city2[key][location][0];
      }
    }
  });
  useEffect(() => {
    setcitys(city2[provinceName])
    setdays(getDays(timeRef.current[0], timeRef.current[1]))
  }, [provinceName, timeRef])
  // console.log(birthday)
  for (let i = 0; i < 102; i++) {
    years[i] = 2021 - i;
  }
  for (let i = 0; i < 12; i++) {
    months[i] = i + 1;
  }
  function getDays(year, month) {
    const days = [];
    let dayCount = [31, 28, 31, 30, 31, 30, 31, 30, 30, 31, 30, 31]
    if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
      dayCount[1] = 29
    }
    for (let i = 0; i < dayCount[month - 1]; i++) {
      days[i] = i + 1;
    }
    return days
  }
  const getYear = () => {
    setYearSelect(yearRef.current.value)
    if (monthSelect !== null) {
      setdays(getDays(yearRef.current.value, monthSelect))
    }
  }
  const getMonth = () => {
    setMonthSelect(monthRef.current.value)
    if (yearSelect !== null) {
      console.log("here")
      setdays(getDays(yearSelect, monthRef.current.value))
    }
  }
  // const getDay = () => {
  //   setDaySelect(dayRef.current.value)
  // }
  const getProvince = () => {
    // setprovinceSelect(provinceRef.current.value)
    setcitys(city2[provinceRef.current.value])
  }
  const getCity = () => {
    // setcitySelect(cityRef.current.value)
  }
  const changeSetting = () => {
    let name = nameRef.current.value;
    let description = descriptionRef.current.value;
    let gender = 0;
    for (let i = 0; i < 3; i++) {
      if (genderRef.current[i].checked === true) {
        gender = (i + 1) % 3;
      }
    }
    let time = yearRef.current.value + "-" + monthRef.current.value + "-" + dayRef.current.value
    let timestamp = new Date(time).getTime();
    let prov = provinceRef.current.value;
    for (let item of province) {
      if (item[1] === prov) {
        prov = item[0];
        break;
      }
    }
    let city = cityRef.current.value;
    dispatch(getUserSettingAction(gender, birthday, nickname, prov, city, description))
    console.log(name, description, gender, timestamp, prov, city)
  }
  // console.log(province)
  // console.log(genderRef && genderRef.current && genderRef.current[0].checked)
  // console.log(nameRef)
  // console.log(yearSelect,monthSelect,daySelect)
  // console.log(yearRef.current.value, monthRef.current.value, dayRef.current.value)
  // console.log(provinceName, cityName)
  const changeImg = () => {
    const { showFlag } = props;
    showFlag()
  }
  return (
    <BaseWrapper>
      <div className="base-left">
        <div className="left-first">
          昵称：
          <input type="text" defaultValue={nickname} ref={nameRef} />
        </div>
        <div className="left-second">
          <span>介绍：</span>
          <textarea name="" id="" cols="30" rows="10" defaultValue={description} ref={descriptionRef}></textarea>
        </div>
        <div className="left-third">
          性别：
          <form ref={genderRef} onChange={e => console.log(genderRef)}>
            <input type="radio" value="1" name="sex" defaultChecked={gender === 1 ? true : false} /><span>男</span>
            <input type="radio" value="2" name="sex" defaultChecked={gender === 2 ? true : false} /><span>女</span>
            <input type="radio" value="0" name="sex" defaultChecked={gender === 0 ? true : false} /><span>保密</span>
          </form>
        </div>
        <div className="left-fifth">
          生日：
          <select ref={yearRef} onChange={e => { getYear() }} defaultValue={timeRef.current[0]}>
            {
              years.map(item => {
                return <option value={item} key={item}>{item}</option>
              })
            }
          </select>年
          <select ref={monthRef} onChange={e => { getMonth() }} defaultValue={timeRef.current[1] > 10 ? timeRef.current[1] : ("0" + timeRef.current[1])}>
            {
              months.map(item => {
                return <option value={item > 10 ? item : ("0" + item)} key={item}>{item > 10 ? item : ("0" + item)}</option>
              })
            }
          </select>月
          <select ref={dayRef} defaultValue={timeRef.current[2] > 10 ? timeRef.current[2] : ("0" + timeRef.current[2])}>
            {
              days.map(item => {
                return <option value={item > 10 ? item : ("0" + item)} key={item} selected={item === timeRef.current[2]}>{item > 10 ? item : ("0" + item)}</option>
              })
            }
          </select>日
        </div>
        <div className="left-sixth">
          地区：
          <select ref={provinceRef} onChange={e => getProvince()} defaultValue={provinceName}>
            {
              provinces.map(item => {
                return <option value={item} key={item}>{item}</option>
              })
            }
          </select>
          <select ref={cityRef} onChange={e => getCity()} defaultValue={cityName}>
            {
              citys && citys.map(item => {
                return <option value={item[1]} key={item[1]} selected={item[0] === cityName}>{item[0]}</option>
              })
            }
          </select>
        </div>
        <div className="left-seventh">
          <button className="btn1 sprite_button" onClick={e => changeSetting()}>保 存</button>
          <button className="btn2 sprite_button"></button>
        </div>
      </div>
      <div className="base-right">
        <img src={avatarUrl} alt="" />
        <div className="change" onClick={e => changeImg()}>更换头像</div>
      </div>
    </BaseWrapper>
  )
})
