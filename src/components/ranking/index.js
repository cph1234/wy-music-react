import React, { memo } from 'react';
import { RankingList, RankingWrapper, RankingTop } from './style';
import { getSizeImage, formatMinuteSecond } from '@/utils/format-utils';

export default memo(function PHRanking(props) {
  const { info } = props;
  const tracks = info && info.tracks;
  // console.log(info);
  const date = new Date();
  let labelX = "0px";
  let labelY = "0px";
  let color = "#fff";
  return (
    <RankingWrapper labelX={labelX} labelY={labelY} color={color}>
      <RankingTop>
        <div className="image">
          <img src={info && info.coverImgUrl} alt="" />
          <span className="image_cover"></span>
        </div>
        <div className="info">
          <h2 className="title">{info && info.name}</h2>
          <div className="content">
            <span className="icon sprite_icon2"></span>
            <span className="date">最近更新：{date.getMonth() + 1}月{date.getDate() + 1}日</span>
            <span className="description text-nowrap">{info && info.description}</span>
          </div>
          <div className="btn">
            <a href="todo" className="btn1 sprite_button"><span>播放</span></a>
            <a href="todo" className="btn2 sprite_button"> </a>
            <a href="todo" className="btn3_1 sprite_button"><span>{info && info.subscribedCount}</span></a>
            <a href="todo" className="btn3_2 sprite_button"> </a>
            <a href="todo" className="btn4_1 sprite_button"><span>{info && info.shareCount}</span></a>
            <a href="todo" className="btn4_2 sprite_button"> </a>
            <a href="todo" className="btn5_1 sprite_button"><span>下载</span></a>
            <a href="todo" className="btn5_2 sprite_button"> </a>
            <a href="todo" className="btn6_1 sprite_button"><span>{info && info.commentCount}</span></a>
            <a href="todo" className="btn6_2 sprite_button"> </a>
          </div>
        </div>
      </RankingTop>
      <RankingList>
        <div className="list-title">
          <div className="title">歌曲列表</div>
          <div className="music-count">{info && info.trackCount}首歌</div>
          <div className="play-count">播放：<span>{info && info.playCount}</span>次</div>
        </div>
        <table className="table">
          <thead className="thead">
            <tr>
              <th className="th-blank sprite_table"></th>
              <th className="th-title sprite_table">标题</th>
              <th className="th-time sprite_table">时长</th>
              <th className="th-singer sprite_table">歌手</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {
              tracks && tracks.map((item, index) => {
                let rank = info && info.trackIds[index].lr - index;

                if ((info && info.trackIds[index].lr == null) || rank === 0) {
                  labelX = "-67px";
                  labelY = "-289px";
                  rank = null;
                } else if (rank > 0) {
                  labelX = "-74px";
                  labelY = "-304px";
                  color = "red";
                  rank = Math.abs(rank);
                } else {
                  labelX = "-74px";
                  labelY = "-324px";
                  color = "green";
                  rank = Math.abs(rank);
                }
                if (index < 3) {
                  return (
                    <tr className="top-three" key={item.id}>
                      <td className="td-num">
                        <div className="rank">
                          <div className="index">{index + 1}</div>
                          <div className="rank-item sprite_icon2" style={{ color: color, backgroundPosition: `${labelX} ${labelY}` }}>
                            <span>{rank}</span>
                          </div>
                        </div>
                      </td>
                      <td className="td-title">
                        <img src={getSizeImage(item.al.picUrl, 50)} alt="" />
                        <div className="icon sprite_table"></div>
                        <div className="item-name text-nowrap">{item.name}</div>
                      </td>
                      <td className="td-time">{formatMinuteSecond(item.dt)}</td>
                      <td className="td-singer">
                        <span>{item.ar[0].name}</span>
                      </td>
                    </tr>
                  )
                } else {
                  return (
                    <tr className="normal" key={item.id}>
                      <td className="td-num">
                        <div className="rank">
                          <div className="index">{index + 1}</div>
                          <div className="rank-item sprite_icon2" style={{ color: color, backgroundPosition: `${labelX} ${labelY}` }}>
                            <span>{rank}</span>
                          </div>
                        </div>
                      </td>
                      <td className="td-title">
                        <div className="icon sprite_table"></div>
                        <div className="item-name text-nowrap">{item.name}</div>
                      </td>
                      <td className="td-time">{formatMinuteSecond(item.dt)}</td>
                      <td className="td-singer">
                        <span>{item.ar[0].name}</span>
                      </td>
                    </tr>
                  )
                }
              })
            }
          </tbody>
        </table>
      </RankingList>
    </RankingWrapper>
  )
})
