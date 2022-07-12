import styled from 'styled-components';

export const AritistWrapper = styled.div`
  display:flex;
`

export const LeftWrapper = styled.div`
  width: 180px;
  border-left:1px solid #DCDCDC;
  padding-top:40px;
  .item{
    margin:10px 10px;
    border-bottom:1px solid #DCDCDC;
    padding-bottom:5px;
    .item-title{
      font-family: "Microsoft Yahei";
      font-size:16px;
      font-weight:bold;
      margin-left:10px;
    }
    .item-li{
      display:flex;
      height: 30px;
      line-height:30px;
      padding-left:10px;
      span{
        display:block;
        width: 4px;
        height:4px;
        background-color:#A9A9A9;
        margin-top:13px;
        margin-right:10px;
      }
    }
    .active{
      border:1px solid #DCDCDC;
      span{
        background-color:#c20c0c;
      }
      a{
        color:#c20c0c;
        text-decoration:none;
      }
    }
  }
`

export const RightWrapper = styled.div`
  width: 800px;
  border-left:1px solid #DCDCDC;
  border-right:1px solid #DCDCDC;
  padding:40px;
  .title{
    height: 42px;
    font-size:24px;
    line-height:42px;
    border-bottom:2px solid #c20c0c;
  }
  .select{
    margin-top:20px;
    display:flex;
    a{
      margin:0 3px;
    }
    .hot{
      display:block;
      height: 24px;
      line-height:24px;
      width: 45px;
      text-align:center;
      background-color:#c20c0c;
      color:#fff;
    }
    .item{
      display:block;
      width: 21px;
      font-size:14px;
      height: 24px;
      line-height:24px;
    }
    .other{
      display:block;
      height: 24px;
      width: 45px;
      line-height:24px;
    }
  }
  .detail{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    .detail-item{
      margin-top:20px;
      div{
        margin-top:5px;
      }
      img{
        border:1px solid #DCDCDC;
      }
    }
  }
  .short{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-top:40px;
    border-top:1px solid #DCDCDC;
    padding-top:10px;
    .short-item{
      display:block;
      margin-top:10px;
      width: 140px;
      color:#333;
    }
  }
`