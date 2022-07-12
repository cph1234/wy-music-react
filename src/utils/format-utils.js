export function getCount(count) {
  if (count < 0) return;
  if (count < 100000) {
    return count;
  } else {
    return Math.floor(count / 10000) + "万";
  }
}

export function getSizeImage(imgUrl, size) {
  return `${imgUrl}?param=${size}y${size}`
}

export function formatDate(time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};

export function formatMonthDay(time) {
  return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss");
}

export function currentMusicUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}


export function timestampToTime(timestamp) {
  const date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = date.getFullYear() + '-';
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  const s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  const strDate = Y + M + D + h + m + s;
  return strDate;
}

export function timestampToTime2(timestamp) {
  const date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月';
  const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '日 ';
  const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
  const strDate = M + D + h + m;
  return strDate;
}

export function timestampToDay(timestamp) {
  const date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = date.getFullYear() + '-';
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  const strDate = Y + M + D;
  return strDate;
}

export function timestampToYearMonthDay(timestamp) {
  const date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = date.getFullYear();
  const M = (date.getMonth() + 1);
  const D = (date.getDate());
  const strDate = [Y, M, D];
  return strDate;
}