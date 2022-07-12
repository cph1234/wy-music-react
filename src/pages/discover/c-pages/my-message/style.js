import styled from "styled-components";

export const WrapperMyMessage = styled.div`
  display:flex;
  background-color:#fff;
  /* height: 2000px; */
  border-left:1px solid #DCDCDC;
  border-right:1px solid #DCDCDC;
`

export const WrapperLeft = styled.div`
  border-right:1px solid #DCDCDC;
  width: 184px;
  .message-title{
    padding-left:40px;
    margin-top:20px;
    font-size:20px;
    width: 184px;
    height: 60px;
    line-height:60px;
    border-bottom:1px solid #DCDCDC;
  }
  .title-1{
    display:flex;
    align-items:center;
    padding-left:40px;
    height: 54px;
    cursor: pointer;
    border-bottom:1px solid #DCDCDC;
    :hover{
      background-color:#f5f5f5;
    }
    .title-1-1{
      display:inline-block;
      background-position: -65px -166px;
      width: 18px;
      height: 19px;
    }
    .title-1-2{
      margin-left:12px;
    }
  }
  .title-2{
    display:flex;
    align-items:center;
    padding-left:40px;
    height: 54px;
    cursor: pointer;
    border-bottom:1px solid #DCDCDC;
    :hover{
      background-color:#f5f5f5;
    }
    .title-2-1{
      display:inline-block;
      background-position: -64px -196px;
      width: 20px;
	    height: 16px;
    }
    .title-2-2{
      margin-left:10px;
    }
  }
  .title-3{
    display:flex;
    align-items:center;
    padding-left:40px;
    height: 54px;
    cursor: pointer;
    border-bottom:1px solid #DCDCDC;
    :hover{
      background-color:#f5f5f5;
    }
    .title-3-1{
      display:inline-block;
      background-position: -64px -248px;
      width: 20px;
      height: 17px;
    }
    .title-3-2{
      margin-left:10px;
    }
  }
  .title-4{
    display:flex;
    align-items:center;
    padding-left:40px;
    height: 54px;
    cursor: pointer;
    border-bottom:1px solid #DCDCDC;
    :hover{
      background-color:#f5f5f5;
    }
    .title-4-1{
      display:inline-block;
      background-position: -58px -400px;
      width: 22px;
      height: 21px;
    }
    .title-4-2{
      margin-left:8px;
    }
  }
  .title-5{
    cursor: pointer;
    margin-left:40px;
    margin-top:20px;
    width: 114px;
    height: 30px;
    border-radius:15px;
    border:1px solid #DCDCDC;
    line-height:30px;
    text-align:center;
    :hover{
      background-color:#f5f5f5;
    }
  }
`

export const WrapperRight = styled.div`
  width: 795px;
  padding:40px;
  .private-title{
    display:flex;
    justify-content:space-between;
    border-bottom:2px solid #d13030;
    /* width: 715px; */
    height: 37px;
    line-height:37px;
    font-weight:bold;
    font-size:14px;
    button{
      padding-left:26px;
      background-position: 0 -845px;
      width: 80px;
      height: 31px;
      line-height:31px;
    }
  }
  .no-message{
    display:flex;
    align-items:center;
    margin-left:230px;
    height: 600px;
    .no-message-1{
      background-position: 0 -560px;
      width: 83px;
      height: 65px;     
    }
    .no-message-2{
      font-size:18px;
      font-weight:bold;
      margin-left:10px;
    }
  }
  .private-item{
    display:flex;
    padding-top:16px;
    padding-bottom:16px;
    height: 83px;
    border-bottom:1px solid #DCDCDC;
    cursor: pointer;
    :hover{
      background-color:#f5f5f5;
    }
    .item-1{

    }
    .item-2{
      margin-left:20px;
      width: 550px;
      .item-2-1{
        font-weight:bold;
        font-size:14px;
      }
      .item-2-2{
        margin-top:6px;
        color:#999;
      }
    }
    .item-3{
      color:#999;
    }
  }
  .history-title{
    display:flex;
    justify-content:space-between;
    border-bottom:2px solid #d13030;
    /* width: 715px; */
    height: 37px;
    line-height:37px;
    font-weight:bold;
    font-size:14px;
    .title-left{
      display:flex;
      justify-content:space-between;
      width: 128px;
      .left-1{
        color: #0c73c2;
        cursor: pointer;
      }
      .left-2{
        font-weight:normal;
      }
    }
    .title-right{
      display: flex;
      align-items:center;
      cursor: pointer;
      span{
        display: inline-block;
        color:#888888;
      }
      .right-1{
        background-position: 0 -284px;
        width: 15px;
        height: 14px;
        margin-right:5px;
      }
    }
  }
  .communicate{
    height: 860px;
    overflow-y:auto;
    border-bottom:1px solid #DCDCDC;
    display: flex;
    flex-direction: column-reverse;

    .communicate-item{
      /* height: 200px; */
      cursor: pointer;
      margin-bottom:40px;
      .item-1{
        text-align:center;
        color:#888888;
        margin-top:20px;
        margin-bottom:20px;
      }
      .item-2{
        display: flex;
        img{
          width: 50px;
          height: 50px;
        }
        .item-2-2{
          margin-left:20px;
          width: 440px;
          /* height: 137px; */
          background-color: #f4f4f4;
          border-radius:10px;
          padding: 16px 20px;
          .item-2-2-2{
            width: 400px;
            height: 80px;
            background-color:#fff;
            padding:10px;
            img{
              height: 60px;
            }
            span{
              font-size:14px;
              margin-left:10px;
            }
          }
        }
      }
    }
  }
  .communicate::-webkit-scrollbar {/*滚动条整体样式*/
    width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
  }

  .communicate::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
    /* -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2); */
    background: #dcdcdc;
    }

  .communicate::-webkit-scrollbar-track {/*滚动条里面轨道*/
    /* -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2); */
    border-radius: 10px;
    background: #fff;
  }
  .text{
    margin-top:20px;
    textarea{
      width: 715px;
      height: 63px;
      border:1px solid #DCDCDC;
      background-color:#fff;
    }
  }
`