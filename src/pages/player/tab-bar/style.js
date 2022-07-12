import styled from 'styled-components';

export const PlayerWrapper = styled.div`
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  height: 53px;
  background-position:0 -1px;
  background-repeat: repeat;
  .wrap{
    display:flex;
    align-items:center;
    /* justify-content:space-between */
  }
`

export const LeftWrapper = styled.div`
  display:flex;
  align-items:center;
  height: 53px;
  margin-top:3px;
  .btn1{
    display:block;
    width: 28px;
	  height: 28px;
    background-position:-2px -131px;
    margin-right:5px;
    margin-top:3px;
  }
  .btn2{
    display:block;
    width: 36px;
	  height: 36px;
    background-position:-2px ${props => props.isPlaying ? "-165px" : "-204px"};
    margin-right:8px;
  }
  .btn3{
    display:block;
    width: 28px;
	  height: 28px;
    background-position:-82px -131px;
    margin-top:3px;
  }
`
export const CenterWrapper = styled.div`
  display:flex;
  margin-left:15px;
  margin-top:6px;
  .image{
    img{
      border-radius:5px;
      width: 35px;
      height: 35px;
    }
  }
  .info{
    margin-left:10px;
    .content{
      display:flex;
      padding-top:-2px;
      padding-left:6px;
      .song{
        color:#e8e8e8;
      }
      .icon{
        display:block;
        background-position:-1px -58px;
        width: 17px;
	      height: 16px;
        margin:3px 15px 0 5px;
      }
      .singer{
        color:#9B9B9B;  
      }
    }
    .progress {
      display: flex;
      align-items: center;
      margin-top:-10px;
      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png").default}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png").default}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require("@/assets/img/sprite_icon.png").default}) 0 -250px;
        }
      }

      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
  .time{
    margin-top:15px;
    display:flex;
    width: 70px;
    color:#A1A1A1;
    .divider{
      margin:0 3px 0 3px;
      color:#797979;
    }
    .duration{
      color:#797979;
    }
  }
  .func-one{
    display:flex;
    margin-left:15px;
    .btn1{
      display:block;
      background-position:-1px -26px;
      width: 23px;
	    height: 23px;
      margin-top:6px;
      margin-right:5px;
    }
    .btn2{
      display:block;
      background-position:-89px -189px;
      width: 24px;
    	height: 24px;
      margin-top:6px;
      margin-right:5px;
    }
    .btn3{
      display:block;
      background-position:-115px -190px;
      width: 24px;
	    height: 24px;
      margin-top:6px;
      margin-right:5px;
      
    }
  }
  .divider2{
    width: 2px;
	  height: 27px;
    background-position:-149px -248px;
    margin:6px 8px 0 6px;

  }
  .func-two{
    display:flex;
    position:relative;
    /* .message{
      position: absolute;
      bottom:20px;
      left:-400px;
    } */
    .btn1{
      display:block;
      background-position:-31px -248px;
      width: 25px;
	    height: 23px;
      margin-top:6px;
      margin-right:5px;
    }
    .btn2{
      display:block;
      background-position:${props => {
        if (props.order === 0) {
          return "-3px -344px"
        } else if (props.order === 1) {
          return "-66px -248px"
        } else {
          return "-66px -344px"
        }
      }};
      width: 24px;
    	height: 23px;
      margin-top:6px;
      margin-right:5px;
    }
    .btn3{
      display:block;
      background-position:-42px -98px;
      width: 59px;
    	height: 28px;
      margin-top:6px;
      margin-right:5px;
      padding-left:25px;
      color:#666;
      font-size:12px;
    }
  }
`
export const RightWrapper = styled.div`

`