import styled from 'styled-components';

export const RankingWrapper=styled.div`
  .content{
    display:flex;
  }
`
export const LeftWrapper = styled.div`
  width: 240px;
  height: 2000px;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  .tabber{
    margin-top:40px;
    font-weight:bold;
    font-size:14px;
    padding: 0 10px 0 15px;
  }
  .link{
    display:block;
    a{
      text-decoration:none;
    }
  }
`

export const RightWrapper = styled.div`
  width: 740px;
  border-right: 1px solid #d3d3d3;
  background-color:#fff;
`