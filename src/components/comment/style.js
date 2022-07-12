import styled from 'styled-components';

export const CommentsWrapper = styled.div`
  margin-top:40px;
  margin-left:40px;
  .comment-title{
    width: 640px;
    .title-top{
      border-bottom: 2px solid #c20c0c;
      height: 35px;
      .top-first{
        line-height:35px;
        font-size:20px;
      }
      .top-second{
        margin-left:20px;
        line-height:35px;
      }
    }
  }
  .comment-content{
    display:flex;
    padding-top:20px;
    .content-avatar{
      width: 50px;
    }
    .content-input{
      position:relative;
      margin-left:12px;
      .arr1{
        position:absolute;
        top:10px;
        left: -7px;
        border-right:7px solid #999;
        border-top:6px solid transparent;
        border-bottom:6px solid transparent;
      }
      .arr1:after{
        content: "";
        width: 0;
        height: 0;
        position:absolute;
        top:-6px;
        left: 1px;;
        border-right:7px solid #fff;
        border-top:6px solid transparent;
        border-bottom:6px solid transparent;
      }
      .input-text{
        height: 60px;
        width: 578px;
        background-color:#fff;
        border:1px solid #cdcdcd;
      }
      .content-icons{
        display:flex;
        justify-content:space-between;
        margin-top:5px;
        .left{
          display:flex;
          .icons-icon1{
            background-position: -40px -490px;
            width: 18px;
            height: 18px;
          }
          .icons-icon2{
            background-position: -60px -490px;
            margin-left:10px;
            width: 18px;
            height: 18px;
          }
        }
        .right{
          display:flex;
          .icons-limit{
            color:#cdcdcd;
            line-height: 25px;
            margin-right:10px;
          }
          .icons-icon3{
            background-position: -84px -64px;
            width: 46px;
            height: 25px;
            color:#fff;
          }
        }
      }
    }
  }
  .wonderful-comments{
    margin-top:20px;
    .wc-title{
      font-weight:bold;
      border-bottom:1px solid #cdcdcd;
      width: 640px;
    }
    .wc-item{
      display:flex;
      padding:15px 0;
      border-bottom:1px dotted #999;
      width: 640px;
      :last-child{
        border-bottom:0;
      }
      .content-avatar{
        /* height: 71px; */
      }
      .item-content{
        margin-left:10px;
        a{
          color:#0c73c2;
        }
        .img1{
          width: 35px;
          height: 12px;
          margin-left:5px;
        }
        .img2{
          width: 12px;
          height: 12px;
          margin-left:5px;
        }
        .empty{
          width: 0;
        }
        .item-comment{
          margin-left:5px;
        }
        .item-bottom{
          display:flex;
          justify-content:space-between;
          width: 580px;
          margin-top:15px;
          .item-time{
            color:#999;
          }
          .item-right{
            .right-first{
              cursor: pointer;
              .a-icon{
                display:inline-block;
                
                width: 15px;
                height: 14px;
              }
              .a-num{
                margin-left:5px;
                color:#999;
              }
            }
            .right-second{
              color:#999;
            }
            .right-third{
              color:#999;
            }
          }
        }
      }
    }
  }
`