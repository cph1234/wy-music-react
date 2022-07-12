import styled from 'styled-components';

export const AnchorWrapper = styled.div`
  width: 210px;
  height: 50px;
  display:flex;
  margin:15px 20px 15px 20px;
  .image{
    width: 40px;
    height: 40px;
    img{
      width: 40px;
      height: 40px;
    }
  }
  .info{
    width: 148px;
    margin:0 10px 5px 10px;
    font-size:12px;
    .identify{
      margin-top:3px;
      color:#666666;
    }
  }
`