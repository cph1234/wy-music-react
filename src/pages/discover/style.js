import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  .top{
    height: 30px;
    background-color: #C20202;
  }
`

export const TopMenu = styled.div`
  padding-left: 180px;
  display:flex;
  align-items:center;
  /* top: -4px; */
  .item{
    a{
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 3px 17px 0;
      color: #fff;
      border-radius: 20px;
      &:hover,&.active{
        text-decoration: none;
        background-color: #9B0909;
    }
    }
  }
`