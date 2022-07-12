import styled from 'styled-components';

export const MessageWrapper = styled.div`
  position: absolute;
  bottom:45px;
  left:-860px;
  height: 300px;
  .top{
    display:flex;
    background-position:0 0;
    width: 986px;
	  height: 41px;
    .top-left{
      display:flex;
      position:relative;
      align-items:center;
      width: 557px;
      .title{
        margin-left:40px;
        line-height:41px;
        color:#fff;
        font-weight:bold;
        font-size:14px;
      }
      .add-div{
        position:absolute;
        top:12px;
        left:398px;
        width: 80px;
        height: 15px;
        a{
          display:flex;
          width: 80px;
          height: 15px;
          line-height:15px;
          line-height:15px;
          text-align:center;
          color:#ccc;
          .add{
            margin-right:4px;
            width: 16px;
	          height: 15px;
            background-position: -24px 0;
          }
        }
      }
      .diliver{
        position: absolute;
        top: 13px;
        left: 477px;
        height: 15px;
        border-left: 1px solid #000;
        border-right: 1px solid #2c2c2c;
      }
      .delete-div{
        position:absolute;
        top:12px;
        left:498px;
        width: 80px;
        height: 15px;
        a{
          display:flex;
          width: 80px;
          height: 15px;
          line-height:15px;
          line-height:15px;
          text-align:center;
          color:#ccc;
          .delete{
            margin-right:4px;
            width: 16px;
	          height: 15px;
            background-position: -51px 0;
          }
        }
      }
    }
    .top-right{
      position:relative;
      width: 429px;
      height: 41px;
      line-height:41px;
      text-align:center;
      color:#fff;
      font-size:14px;
      &:hover span{
          background-position: -205px 0;
        }
      span{
        display:inline-block;
        position:absolute;
        top:15px;
        right:20px;
        background-position: -205px 30px;
        width: 10px;
        height: 10px;
      }
    }
  }
  .bottom{
    display:flex;
    background-position: -1014px 0;
    width: 986px;
    height: 259px;
    background-repeat:repeat-y;
    .bottom-left{
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      width: 557px;
      .active{
        
        background-color: rgba(0,0,0,0.3);
        .playing{
          .icon{
            background-position: -182px 0;
          }
        }
      }
      .item{
        display:flex;
        color:#cccccc;
        height: 28px;
        line-height:28px;
        margin-left:2px;
        &:hover{
          color:#ffffff;
        }
        &:hover .icons2{
          background-position:-80px -20px;
        }
        &:hover .icons{
          .icon1{
            background-position: -24px 0;
            width: 16px;
            height: 15px;
            margin-right:12px;
            cursor: pointer;
            :hover{
              background-position:-24px -20px;
            }
          }
          .icon2{
            background-position: 0 0;
            width: 16px;
            height: 15px;
            margin-right:10px;
            cursor: pointer;
            :hover{
              background-position:0 -20px;
            }
          }
          .icon3{
            background-position: -57px -50px;
            width: 16px;
            height: 15px;
            margin-right:10px;
            cursor: pointer;
            :hover{
              background-position:-80px -50px;
            }
          }
          .icon4{
            background-position: -51px 0;
            width: 16px;
            height: 15px;
            cursor: pointer;
            :hover{
              background-position:-51px -20px;
            }
          }
        }
        .playing{
          width: 40px;
          height: 28px;
          .icon{
            height: 13px;
            width: 10px;
            margin-left:15px;
            margin-top:8px;
          }
        }
        .song-name{
          width: 220px;

        }
        .icons{
          display:flex; 
          align-items:center;
          width: 120px;
          height: 28px;
        }
        .singer-name{
            width: 80px;
        }
        .duration{
          width: 38px;
        }
        .icons2{
          background-position: -80px 0;
          margin-left:25px;
          margin-top:6px;
          width: 16px;
          height: 15px;
          cursor: pointer;
          :hover{
            background-position:-80px -20px;
          }
        }
      }
    }
    .bottom-right{
      /* width: 429px; */
      /* height: 300px; */
      position: relative;
      flex: 1;
      margin: 21px 0 20px 0;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      .item{
        text-align:center;
        height: 32px;
        color: #989898;
      }
      .active{
        color: #fff;
        font-size: 14px;
      }
    }
  }
 

  /* background-color:rgba(0, 0, 0, .8); */
`