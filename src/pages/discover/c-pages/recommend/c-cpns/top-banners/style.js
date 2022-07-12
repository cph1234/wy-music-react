import styled from 'styled-components';

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;
  .banner{
    display:flex;
    background-color:red;
    height:270px;
    position:relative;
  }
`

export const LeftWrapper = styled.div`
  width: 730px;
  .banner-item{
    overflow:hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
`

export const RightWrapper = styled.div`
  position:relative;
  a{
    display:block;
    width: 254px;
    height: 270px;
    background-position:0 0;
    cursor:default;
  }
  .btn{
    position:absolute;
    top:185px;
    left:19px;
    background-position: -19px -185px;
    width: 215px;
    height: 56px;
    z-index:99;
    cursor: pointer;
    &:hover{
      background-position: 0 -289px;
    }
  }
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  .btn{
    position:absolute;
    width: 37px;
    height: 63px;
    transform: translateY(-50%);
    background-color: transparent;
    cursor: pointer;
    &:hover{
      background-color: rgba(0, 0, 0, .1);
    }
  }
  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`