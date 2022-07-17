import styled from "styled-components";

export const WrapperLoginSuccess = styled.div`
  width: 250px;
  height: 185px;
  background-position:0 -271px;
  width: 250px;
	height: 186px;
  .login-top{
    display:flex;
    padding:20px 20px 15px;
    .top-left{
      width: 86px;
      height: 86px;
      border:1px solid #DCDCDC;
      img{
        margin-top:2px;
        margin-left:2px;
      }
    }
    .top-right{
      margin-left:15px;
      .right-top{
        a{
          font-size:14px;
          font-weight:bold;
        }
        img{
          margin-left:5px;
          width: 43px;
          height: 16px;
        }
      }
      .right-center{
        margin-top:5px;
        background-position: -130px -64px;
        width: 70px;
        height: 17px;
        color:#999999;
        font-style:italic;
        :hover{
          background-position: -130px -84px;
        }
        span{
          margin-left:26px;
          font-weight:bold;
        }
      }
      .right-bottom{
        margin-top:10px;
        .not-click{
          height: 31px;
          width: 76px;
          border-radius:4px;
          background-color:#0c73c2;
          color:#fff;
          cursor: pointer;
        }
        .has-click{
          height: 31px;
          width: 76px;
          border-radius:4px;
          background-color:rgb(240,240,240);
          color:#bebebe;
          cursor: pointer;
        }
      }
    }
  }
  .login-bottom{
    display:flex;
    margin-left:20px;
    .bottom-first{
      cursor: pointer;
      padding-right:20px;
      border-right:1px solid #DCDCDC;
      .first-1{
        font-size:20px;
      }
      :hover{
        color:#0c73c2;
      }
    }
    .bottom-second{
      cursor: pointer;
      padding:0 20px;
      border-right:1px solid #DCDCDC;
      .second-1{
        font-size:20px;
      }
      :hover{
        color:#0c73c2;
      }
    }
    .bottom-third{
      cursor: pointer;
      padding-left:20px;
      .third-1{
        font-size:20px;
      }
      :hover{
        color:#0c73c2;
      }
    }
  }
`