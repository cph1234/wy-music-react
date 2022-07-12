import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  border-left:1px solid #ccc;
  border-right:1px solid #ccc;
`

export const TopWrapper = styled.div`
  padding:40px 35px 20px;
  .top-title{
    font-size:24px;
    border-bottom:2px solid #c20c0c;
    height: 50px;
    line-height:50px;
  }
  .top-image{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
  }
`

export const BottomWrapper = styled.div`
  padding:0 35px 20px;
  .bottom-title{
    display:flex;
    font-size:24px;
    border-bottom:2px solid #c20c0c;
    height: 50px;
    line-height:50px;
    .category{
      margin-top:6px;
      margin-left:20px;
      font-size:12px;
      height: 14px;
      span{
        margin:0 10px;
      }
    }
  }
  .bottom-image{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
  }
`