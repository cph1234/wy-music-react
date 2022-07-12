import styled from "styled-components";

export const SingleSongWrapper=styled.div`
  margin-top:10px;
  width: 880px;
  .item{
    display:flex;
    padding:10px 10px 8px 18px;
    height: 41px;
    align-items:center;
    &:nth-child(2n){
      background-color:#f7f7f7;
    }
    &:hover{
      background-color:#f2f2f2;
    }
    .icon{
      background-position: 0 -103px;
      width: 17px;
      height: 17px;
      margin:0 8px;
      &:hover{
        background-position: 0 -128px;
      }
    }
    .name{
      width: 360px;
    }
    .icons{
      width: 96px;
    }
    .artist{
      width: 130px;
    }
    .album{
      width: 160px;
    }
    .duration{
      flex:1;
      padding-left:10px;
    }
  }
`