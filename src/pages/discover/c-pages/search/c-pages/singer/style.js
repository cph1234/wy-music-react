import styled from "styled-components";

export const SingerWrapper = styled.div`
margin-top:20px;
width: 880px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
.item{
  padding:10px 0;
  width: 130px;
  .image{
    width: 100%;
    height: 130px;
    border:1px solid #d3d3d3;
  }
  .text{
    margin-top:8px;
  }
}
div{
  width: 130px;
}
`