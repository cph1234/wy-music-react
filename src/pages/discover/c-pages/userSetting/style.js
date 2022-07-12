import styled from "styled-components";

export const WrapperUserSetting = styled.div`
  padding:40px;
  border-left:1px solid #DCDCDC;
  border-right:1px solid #DCDCDC;
  background:#fff;
  .default{
    .first-line{
      font-size:24px;
    }
    .second-line{
      display:flex;
      height: 39px;
      border:1px solid #DCDCDC;
      border-top:3px solid #DCDCDC;
      div{
        width: 136px;
        font-size:14px;
        text-align:center;
        line-height:39px;
      }
      .active{
        border-top:3px solid #C20C0C;
        margin-top:-3px;
      }
    }
  }
  .change-img{
    .first-line{
      height: 39px;
      line-height:39px;
      border-bottom: 1px solid #DCDCDC;
      font-size:14px;
      font-weight:bold;
      a{
        color: #0c73c2;
      }
    }
    .second-line{
      display:flex;
      margin-top:30px;
      position: relative;
      .select-file{
        position: absolute;
        width: 90px;
        height: 31px;
        opacity: 0;
        cursor: pointer;
      }
      .btn1{
        cursor: pointer;
        background-position:0 -141px;
        width: 90px;
        height: 31px;
        padding-left:8px;
      }
      .btn2{
        cursor: pointer;
        background-position:-245px -182px;
        width: 10px;
        height: 31px;
      }
      div{
        line-height: 31px;
        margin-left: 5px;
        color: #999999;
      }
    }
    .three-line{
      display: flex;
      margin-top: 20px;
      .three-1{
        display: flex;
        
        align-items: center;
        width: 324px;
        height: 324px;
        border:1px solid #DCDCDC;
        .image{
          position: relative;
          margin: auto;
          
          img{
            /* width: auto;
            height: auto; */
            max-width: 100%;
            max-height: 100%;

          }
          .bottom-img{
            opacity: 0.5;
          }
          .top-img{
            position: absolute;
            left: 0;
            top: 0;
          }
          .choose{
            position: absolute;
            background-color: transparent;
            z-index:10;
            border:2px solid #fff;
            /* left:50%;
            top:50%; */
          }
        }
        
      }
      .three-2{
        margin-left: 40px;
        border-left:1px solid #DCDCDC;
      }
    }
    .forth-line{
      display:flex;
      margin-top:30px;
      .btn1{
        cursor: pointer;
        background-position:0 -141px;
        width: 90px;
        height: 31px;
        padding-left:8px;
      }
      .btn2{
        margin-right: 10px;
        cursor: pointer;
        background-position:-245px -182px;
        width: 10px;
        height: 31px;
      }
    }
  }
`