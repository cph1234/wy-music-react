export function scrollTo(element, to, duration) {
  // .scrollTop获取或者设置对象的最顶部到对象在当前窗口显示的范围内的顶边的距离
  
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;
  console.log(difference);
  setTimeout(function () {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}

// useEffect(() => {
//   if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
//   scrollTo(lyricRef.current, (currentLyricIndex - 3) * 32, 300)
// }, [currentLyricIndex]);