import styled from "styled-components";

export const BaseWrapper = styled.div`
  display:flex;
  margin-top:20px;
  .base-left{
    .left-first{
      input{
        width: 304px;
        height: 30px;
        border:1px solid #DCDCDC;
        padding:5px 6px 6px;
      }
    }
    .left-second{
      display:flex;
      align-items:top;
      margin-top:10px;
      textarea{
        width: 304px;
        height: 133px;
        border:1px solid #DCDCDC;
      }
    }
    .left-third{
      margin-top:10px;
      span{
        margin-left:5px;
        margin-right:20px;
      }
    }
    .left-fifth{
      margin-top:10px;
    }
    .left-sixth{
      margin-top:10px;
    }
    .left-seventh{
      display:flex;
      margin:40px;
      .btn1{
        cursor: pointer;
        background-position:0 -1650px;
        width: 80px;
	      height: 35px;
        color:#fff;
        padding-left:8px;
      }
      .btn2{
        cursor: pointer;
        background-position:-245px -1690px;
        width: 5px;
        height: 35px;
      }
      :hover{
        .btn1{
          background-position:0 -1730px;
        }
        .btn2{
          background-position:-245px -1770px;
        }
      }
    }
  }
  .base-right{
    width: 140px;
    height: 140px;
    position:relative;
    margin-left:40px;
    img{
      width: 140px;
      height: 140px;
    }
    .change{
      position:absolute;
      bottom: 0;
      left: 0;
      width: 140px;
      height: 30px;
      line-height:30px;
      text-align:center;
      background: #8e8e8e;
      opacity: 0.8;
      color:#fff;
      cursor: pointer;
    }
  }
`