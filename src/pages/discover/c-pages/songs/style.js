import styled from "styled-components";

export const SongsWrapper = styled.div`
  background-color:#fff;
  padding: 40px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
`
export const TopWrapper = styled.div`
  display:flex;
  border-bottom: 2px solid #c20c0c;
  height: 42px;
  .left{
    font-size:24px;
    line-height:42px;
    width: 50px;
  }
  .center{
    margin-top:5px;
    margin-left: 10px;
    display:flex;
    justify-content:center;
    &:hover{
      .a1{
        background-position:0 -141px;
      }
      .a2{
        background-position:-245px -182px;
      }
    }
    .a1{
      display:flex;
      position:relative;
      text-decoration:none;
      background-position:0 -59px;
      width: 90px;
	    height: 31px;
      .a11{
        text-align:center;
        width: 70px;
        color:#0c73c2;
        line-height:31px;
      }
      .a12{
        display:block;
        margin-top:13px;
        margin-left:-5px;
        background-position: -70px -543px;
        width: 8px;
        height: 5px;
      }
    }
    .a2{
      background-position:-245px -100px;
      width: 5px;
	    height: 31px;
    }
  }
  .right{
    margin-top:5px;
    margin-left: 690px;
    display:flex;
    justify-content:center;
    &:hover{
      .a1{
        background-position:0 -2925px;
      }
      .a2{
        background-position:-245px -2969px;
      }
    }
    .a1{
      display:block;
      text-decoration:none;
      background-position:0 -2855px;
      line-height:31px;
      text-align:center;
      color:#fff;
      width: 45px;
	    height: 31px;
    }
    .a2{
      background-position:-245px -2894px;
      width: 5px;
	    height: 31px;
    }
  }
`
export const ListWrapper = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content:space-between;
  .item{
    margin:0 10px;
  }
`
export const BottomWrapper = styled.div`

`