import styled from 'styled-components';
export const SongListWrapper = styled.div`
  display:flex;
  background-position:0 0;
  background-repeat:repeat-y;
  /* height: 3000px; */
`
export const LeftWrapper = styled.div`
  width: 709px;
  /* height: 3000px; */
  .song-list-top{
    display:flex;
    padding:40px;
    .img{
      position: relative;
      width: 208px;
      height: 208px;
      .cover{
        background-position:0 -1285px;
        width: 208px;
        height: 208px;
      }
    }
    .content{
      margin-left:20px;
      width: 400px;
      .first-line{
        margin-top:5px;
        display:flex;
        .icon{
          background-position: 0 -243px;
          width: 54px;
          height: 24px;
          margin-right:10px;
        }
        .list-name{
          font-size:20px;
          line-height:20px;
        }
      }
      .second-line{
        margin-top:10px;
        .avatar{

        }
        .nickname{
          margin-left:10px;
          color:#0C73C2;
        }
        .identityIconUrl{
          height: 13px;
          width: 13px;
        }
        .createTime{
          color:#999999;
          margin-left:20px;
        }
      }
      .third-line{
        height: 31px;
        width: 400px;
        margin-top:15px;
      a{
        position:relative;
        span{
          position:absolute;
          left:30px;
          bottom:6px;
        }
      }
      .btn1{
        display:inline-block;
        background-position:0 -633px;
        width: 66px;
        height: 31px;
        span{
          left:33px;
          color:#fff;
        }
      }
      .btn2{
        display:inline-block;
        background-position:0 -1588px;
        width: 32px;
        height: 31px;
      }
      .btn3_1{
        margin-left:5px;
        display:inline-block;
        background-position:0 -977px;
        width: 62px;
        height: 31px;
      }
      .btn3_2{
        display:inline-block;
        background-position:-245px -1020px;
        width: 5px;
        height: 31px;
      }
      .btn4_1{
        margin-left:5px;
        display:inline-block;
        background-position:0 -1225px;
        width: 62px;
        height: 31px;
      }
      .btn4_2{
        display:inline-block;
        background-position:-245px -1020px;
        width: 5px;
        height: 31px;
      }
      .btn5_1{
        margin-left:5px;
        display:inline-block;
        background-position: 0 -2761px;
        width: 62px;
        height: 31px;
      }
      .btn5_2{
        display:inline-block;
        background-position:-245px -1020px;
        width: 5px;
        height: 31px;
      }
      .btn6_1{
        margin-left:5px;
        display:inline-block;
        background-position: 0 -1465px;
        width: 62px;
        height: 31px;

      }
      .btn6_2{
        display:inline-block;
        background-position:-245px -1020px;
        width: 5px;
        height: 31px;
      }
      }
    }
    .forth-line{
      margin:20px 2px;
      color:#999999;
      a{
        margin-left:4px;
      }
    }
    .fifth-line{
      margin:20px 2px;
      color:#999999;
    }
  }
`
export const DownLoadWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top:30px;
  .d-title{
    font-size:13px;
  }
  .d-btn{
    display:block;
    margin-top:20px;
    width: 120px;
    height: 30px;
    color:#fff;
    line-height:30px;
    text-align:center;
    border-radius:15px;
    background-color:#ff5a4c;
    text-decoration:none;
  }
`
export const RightWrapper = styled.div`
  margin-left:40px;
  .lover{
    .lover-title{
      padding-top:30px;
      height: 55px;
      width: 196px;;
      border-bottom:1px solid #999;
      font-weight:bold;
    }
    .lover-img{
      display:flex;
      margin-top:10px;
      
      flex-wrap: wrap;
      .lover-item{
        margin-right:12px;
        display:block;
        margin-bottom:12px;
      }
    }
  }
  .download{
    margin:15px 0;
    font-weight:bold;
    width: 200px;
    height: 30px;
    line-height:30px;
    border-bottom:1px solid #ccc;
  }
  .download-icons{
    .android{
      margin-left:20px;
      font-size:40px;
      color:#ccc;
      :hover{
        color:#999;
      }
    }
    .apple{
      margin-left:20px;
      font-size:40px;
      color:#ccc;
      :hover{
        color:#999;
      }
    }
    .windows{
      margin-left:20px;
      font-size:40px;
      color:#ccc;
      :hover{
        color:#999;
      }
    }
  }
  .top-songlist{
    margin-top:20px;
    margin-bottom:30px;
    .top-songlist-title{
      margin:15px 0;
      font-weight:bold;
      width: 200px;
      height: 30px;
      line-height:30px;
      border-bottom:1px solid #ccc;
    }
    .top-songlist-list{
      .top-songlist-item{
        margin-top:15px;
        display:flex;
        .item-content{
          width: 140px;
          margin-left:10px;
          .content1{
            display:block;
            font-size:14px;
            color:#000000;
          }
          .content2{
            display:block;
            margin-top:5px;
            color:#999999;
          }
        }
      }
    }
  }
`