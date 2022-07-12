import styled from 'styled-components';

export const MenuWrapper = styled.div`
  position:absolute;
  top:40px;
  left:-90px;
  width: 720px;
  height: 413px;
  background-color:#fff;
  text-align:left;
  border-radius:5px;
  z-index:2;
  box-shadow:0px 0px 10px rgba(0,0,0,0.5);
  .triangle{
    position:absolute;
    top:-15px;
    left:120px;
    border-style: solid;
    border-width: 5px 10px 10px 10px;
    border-color: transparent transparent #fff transparent;
    width: 0px;
    height: 0px;
  }
  .menu-top{
    height: 40px;
    border-bottom:1px solid #D8D8D8;

    .btn{
      display:block;
      background-position:0 -64px;
      width: 75px;
      height: 26px;
      line-height:26px;
      margin-top:20px;
      margin-left:25px;
    }
  }
  .line{
    position: absolute;
    left:94px;
    height:353px;
    border-right:1px solid #D8D8D8;
  }
  .category{
    .list{
      display:flex;
      margin-top:10px;
      .title{
        display:flex;
        margin-right:20px;
        width: 80px;
        height: 43px;
        line-height:43px;
        font-weight: bold;
        text-align:center;
        .title-icon{
          display:block;
          background-position:-20px -735px;
          width: 24px;
	        height: 23px;
          margin-top:10px;
          margin-left:20px;
          margin-right:10px;
        }
        .icon-0{
          background-position:-20px -735px;
        }
        .icon-1{
          margin-top:13px;
          background-position:-2px -64px;
        }
        .icon-2{
          background-position:0 -88px;
        }
        .icon-3{
          background-position:0 -118px;
        }
        .icon-4{
          margin-top:13px;
          background-position:0px -145px;
          height: 20px;
        }
      }
      .item{
        display:flex;
        flex-wrap:wrap;
        flex:1;
        align-items:flex-start;
        margin-top:12px;
        .iten{
          height: 32px;
          a{
            margin:0 8px;
            color:#333;
          }
          span{
            color:#D8D8D8;
          }
        }
      }
    }
  }
`