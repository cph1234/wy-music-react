import styled from 'styled-components';

export const FriendWrapper=styled.div`
  position:relative;
  background-color:#fff;
  height: 600px;
  .bgimg{
    position:absolute;
    left:80px;
    top:80px;
    background-position:0 0;
    width: 857px;
    height: 400px;
  }
  .btn{
    top:340px;
    left:615px;
    position:absolute;
    width: 157px;
    height: 48px;
    &:hover{
      background-position:0 -430px;
    }
  }
`