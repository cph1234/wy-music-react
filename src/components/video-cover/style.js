import styled from "styled-components";

export const PHVideoCoverWrapper = styled.div`

  margin-bottom:20px;
  .image{
    position:relative;
    width: 159px;
    img{
      width: 159px;
      height: 90px;
    }
    .cover{
      position:absolute;
      top:0;
      right:0;
      background-position: -2px 0;
      width: 88px;
      height: 20px;
    }
    .duration{
      position:absolute;
      bottom:0;
      left:4px;
      color:#fff;
    }
    .playCount{
      display:flex;
      align-items:center;
      position:absolute;
      top:0;
      right:4px;
      color:#fff;
      height: 20px;
      line-height:20px;
      span{
        display:inline-block;
        margin-right:2px;
        background-position: -60px -310px;
        width: 15px;
        height: 10px;
      }
    }
  }
  .title{
    margin-top:4px;
    font-size:16px;
    width: 159px;
    span{
      position:relative;
      top:2px;
      display:inline-block;
      margin-right:2px;
      background-position: -230px -480px;
      width: 29px;
	    height: 18px;
    }
  }
  .creator{
    color:#666;
  }
`