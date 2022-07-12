import React, { memo } from 'react';
import { RankingList, RankingWrapper} from './style';
import { formatMinuteSecond } from '@/utils/format-utils';
import classNames from 'classnames';

export default memo(function PHSongListRanking(props) {
  const info = props && props.info;
  const tracks = info && info.tracks;
  // console.log(info);
  let labelX = "0px";
  let labelY = "0px";
  let color = "#fff";
  return (
    <RankingWrapper labelX={labelX} labelY={labelY} color={color}>
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
              <th className="th-title sprite_table">歌曲标题</th>
              <th className="th-time sprite_table">时长</th>
              <th className="th-singer sprite_table">歌手</th>
              <th className="th-album sprite_table">专辑</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {
              tracks && tracks.map((item, index) => {
                return (
                  <tr className="normal" key={item.id}>
                    <td className="td-num">
                      <div className="rank">
                        <div className="td-index">{index + 1}</div>
                        <div className="td-icon sprite_table"></div>
                      </div>
                    </td>
                    <td className="td-title">
                      <div className="item-name text-nowrap">
                        {item.name}
                        <div className={classNames("sprite_table", { "item-icon": !(item.mv === 0) })}></div>
                      </div>

                    </td>
                    <td className="td-time">
                      <div>{formatMinuteSecond(item.dt)}</div>
                    </td>
                    <td className="td-singer">
                      <div className="text-nowrap">{item.ar[0].name}</div>
                    </td>
                    <td className="td-album">
                      <div className="text-nowrap">{item.al.name}</div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </RankingList>
      
    </RankingWrapper>
  )
})
