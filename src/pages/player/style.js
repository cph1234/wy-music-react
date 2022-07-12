import styled from 'styled-components';

export const CurrentWrapper = styled.div`
  display:flex;
  background-position:0 0;
  background-repeat:repeat-y;
  height: 2000px;
`

export const LeftWrapper = styled.div`
  .content{
    display:flex;
    position: relative;
    width: 711px;
    .img{
      top:30px;
      left:30px;
      width: 205px;
      height: 205px;
      background-position:-140px -580px;
      img{
      position: absolute;
      border-radius:70px;
      display:block;
      top:34px;
      left:34px;
      }
    }
    
    .song{
      position:absolute;
      top:30px;
      left:260px;
      height: 24px;
      .first{
        display:flex;
        .icon{
          display:block;
          background-position:0 -463px;
          width: 54px;
	        height: 24px;
        }
        .title{
          display:block;
          font-size:24px;
          height: 24px;
          line-height:24px;
          margin-left:8px;
        }
      }
      .second{
        margin-top:15px;
        span{
          color:#999999;
        }
      }
      .third{
        margin-top:10px;
        span{
          color:#999999;
        }
      }
      .btn{
      height: 31px;
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
    .lyric{
      margin-top:40px;
      height: ${props => props.flag ? "300px" : "auto"};
      overflow:hidden;
      .lyric-item{
        margin-top:8px;
      }
    }
    }
  }
`

export const RightWrapper = styled.div`
  .song-list{
    margin:15px 35px;
    font-weight:bold;
    width: 200px;
    height: 30px;
    line-height:30px;
    border-bottom:1px solid #ccc;
  }
  .relevant-information{
    margin-left:20px;
  }
  .download{
    margin:15px 35px;
    font-weight:bold;
    width: 200px;
    height: 30px;
    line-height:30px;
    border-bottom:1px solid #ccc;
  }
  .icons{
    .android{
      margin-left:35px;
      font-size:40px;
      color:#ccc;
      :hover{
        color:#999;
      }
    }
    .apple{
      margin-left:35px;
      font-size:40px;
      color:#ccc;
      :hover{
        color:#999;
      }
    }
    .windows{
      margin-left:35px;
      font-size:40px;
      color:#ccc;
      :hover{
        color:#999;
      }
    }
  }
`