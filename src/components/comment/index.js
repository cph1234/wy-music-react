import React, { memo } from 'react';
import { CommentsWrapper } from './style';
import { getSizeImage } from '@/utils/format-utils';
import { vipLevel } from '@/common/local-data';
import classNames from 'classnames';
import { timestampToTime } from '@/utils/format-utils'
// import { useState } from 'react';
import { getCommentLikeAction, getCommentAction } from '@/pages/discover/c-pages/song-list/store/actionCreators'
import { useDispatch } from 'react-redux';
import { useRef } from 'react';


export default memo(function PHComment(props) {
  const commentRef = useRef()
  const dispatch = useDispatch()
  const comment = props && props.info;
  const id = props && props.id;
  const type = props && props.type;
  // console.log(comment)
  // const comments = comment && comment.comments;
  const normalComments = comment && comment.comments;
  // const hotComments = comment && comment.hotComments;
  // console.log(hotComments);
  // console.log(comments)
  const commentLike = (index) => {
    const target = normalComments[index]
    const t = target.liked === false ? 1 : 0;
    // console.log(id, target.commentId, t, type)
    dispatch(getCommentLikeAction(id, target.commentId, t, type))
  }
  const commentSend = () => {
    const content = commentRef.current.value;
    dispatch(getCommentAction(1, type, id, content))
  }
  return (
    <CommentsWrapper>
      <div className="comment-title">
        <div className="title-top">
          <span className="top-first">评论</span>
          <span className="top-second">共{comment.total}条评论</span>
        </div>
      </div>
      <div className="comment-content">
        <div className="content-avatar">
          <img src={getSizeImage("https://p4.music.126.net/kvwkj0bp9SHasaugJRMdYg==/109951164051771539.jpg", 50)} alt="" />
        </div>
        <div className="content-input">
          <div className="arr1"></div>
          <div className="arr2"></div>
          <textarea name="评论" id="" placeholder="评论" maxLength="140" className="input-text" ref={commentRef}></textarea>
          <div className="content-icons">
            <div className="left">
              <button className="icons-icon1 sprite_icon2"></button>
              <button className="icons-icon2 sprite_icon2"></button>
            </div>
            <div className="right">
              <div className="icons-limit">140</div>
              <button className="icons-icon3 menu-button" onClick={e => commentSend()}>评论</button>
            </div>
          </div>
        </div>
      </div>
      <div className="wonderful-comments">
        <div className="wc-title">精彩评论</div>
        {
          normalComments && normalComments.map((item, index) => {
            let level = item.user.vipRights && (item.user.vipRights.redVipLevel - 1);
            // const level = 1
            if(level===-1) level=1
            const levelImg = level ? vipLevel[level].url : "";
            const avatarDetail = item.user.avatarDetail && item.user.avatarDetail.identityIconUrl ? item.user.avatarDetail.identityIconUrl : "";
            const position = item.liked ? "-170px 0" : "-150px 0";
            return (
              <div className="wc-item" key={item.id}>
                <div className="content-avatar">
                  <img src={getSizeImage(item.user.avatarUrl, 50)} alt="" />
                </div>
                <div className="item-content">
                  <a href="todo">{item.user.nickname}</a>
                  <img src={avatarDetail} alt="" className={classNames("img2", { empty: avatarDetail === "" })} />
                  <img src={levelImg} alt="" className={classNames("img1", { empty: levelImg === "" })} />
                  <span className="item-comment">: {item.content}</span>
                  <div className="item-bottom">
                    <div className="item-time">{timestampToTime(item.time)}</div>
                    <div className="item-right">
                      <span className="right-first" onClick={e => commentLike(index)}>
                        <span className="a-icon sprite_icon3" style={{ backgroundPosition: position }}></span>
                        <span className="a-num">({item.likedCount})</span>
                      </span>
                      <span className="right-second"> | </span>
                      <a href="todo" className="right-third">回复</a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </CommentsWrapper>
  )
})
