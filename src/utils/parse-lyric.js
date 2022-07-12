
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export function parseLyric(lyric) {
  const lineString = lyric.split("\n");
  const lyrics = [];
  for (let line of lineString) {
    if (line) {
      const result = parseExp.exec(line);
      if (!result) continue;
      const time1 = result[1] * 1000 * 60;
      const time2 = result[2] * 1000;
      const time3 = result[3].length === 2 ? result[3] * 10 : result[3] * 1;
      const time = time1 + time2 + time3;
      //去掉正则表达式匹配到的内容
      const content = line.replace(parseExp, "").trim();
      const info = { time, content };
      lyrics.push(info);
      // console.log(info);
    }
  }
  return lyrics;
}