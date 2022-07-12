import styled from 'styled-components';

export const SingerWrapper = styled.div`
  height: 455px;
  margin-top:10px;
  .tabbar{
    margin:0 20px 0 20px;
    font-size:12px;
    height: 24px;
    border-bottom: 1px solid #ccc;
    .title{
      font-weight:bold;
    }
    .more{
      margin-left:100px;
    }
  }
  .list{
    a{
      text-decoration:none;
    }
  }
  .btn{
    margin-left:20px;
    display:block;
    width: 210px;
    height: 31px;
    background-color: #f5f5f5;
    border: 1px solid #c3c3c3;
    border-radius: 4px;
    text-align:center;
    line-height:31px;
    color:#333;
    font-weight:bold;
    :hover{
      background-color: #fafafa;
      text-decoration:none;
    }
  }
`