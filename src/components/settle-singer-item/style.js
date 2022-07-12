import styled from 'styled-components';

export const SingerWrapper = styled.div`
  width: 210px;
  height: 62px;
  display:flex;
  margin:15px 20px 15px 20px;
  border:1px solid #ccc;
  .image{
    width: 62px;
    height: 62px;
    img{
      width: 60px;
      height: 60px;
    }
  }
  .info{
    width: 148px;
    padding:10px 15px 10px 15px;
    :hover{
      background-color:#DCDCDC;
    }
    .name{
      font-weight:bold;
      font-size:14px;
    }
  }
`