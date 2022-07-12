import styled from 'styled-components';

export const MineWrapper=styled.div`
  position:relative;
  background-color:#fff;
  height: 600px;
  .bgimg{
    position:absolute;
    left:80px;
    top:80px;
    background-position:0 0;
    width: 807px;
    height: 268px;
  }
  .btn{
    top:282px;
    left:562px;
    position:absolute;
    width: 167px;
    height: 45px;
    &:hover{
      top:282px;
      left:562px;
      position:absolute;
      background-position:0 -278px;
      width: 167px;
      height: 45px;
    }
  }
`