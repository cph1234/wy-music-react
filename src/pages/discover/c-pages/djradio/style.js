import styled from "styled-components";

export const DjRadioWrapper = styled.div`
  border-left:1px solid #d3d3d3;
  border-right:1px solid #d3d3d3;
  padding:40px;
  background-color:#fff;
`

export const TopWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  position: relative;
  height: 184px;
  .btn-left{
    display:block;
    position: absolute;
    background-position:-4px -35px;
    width: 10px;
    height: 20px;
    left:-10px;
    top:75px;
  }
  .btn-right{
    display:block;
    position: absolute;
    background-position:-35px -35px;
    width: 10px;
    height: 20px;
    right:-5px;
    top:75px;
  }
  a{
    display:block;
    text-decoration:none;
  }
  .item{
    margin:0 19px 25px 19px;
    width: 61px;
    .img{
      margin-left:6px;
      width: 48px;
      height: 48px;
      background-position:0 0;
    }
    .color-blue{
      color: #5ab5e7;
    }
    .content{
      width: 48px;
      text-align:center;
      width: 61px;
    }
  }
  .bottom-point1{
    position: absolute;
    height: 6px;
    width: 6px;
    bottom:0;
    left:430px;
    cursor: pointer;
    :hover{
      background-position: -37px -7px;
    }
  }
  .bottom-point2{
    position: absolute;
    height: 6px;
    width: 6px;
    bottom:0;
    left:450px;
    cursor: pointer;
    :hover{
      background-position: -37px -7px;
    }
  }
  .active{
    background-position: -37px -7px;
    width: 6px;
    height: 6px;
  }
  .positive{
    background-position: -7px -7px;
    width: 6px;
    height: 6px;
  }
`

export const CenterWrapper = styled.div`
  display:flex;
  margin-top:20px;
  .left{
    width: 426px;
    .left-title{
      display:flex;
      justify-content:space-between;
      border-bottom:2px solid #c20c0c;
      div{
        font-size:24px;
      }
      a{
        margin-top:10px;
        display:block;
        height: 16px;
        line-height:16px;
      }
    }
    .left-list{
      border-left:1px solid #e2e2e2;
      border-right:1px solid #e2e2e2;
      li:nth-child(2n){
        background-color:#f7f7f7;
      }
      li:nth-child(2n-1){
        background-color:#fff;
      }
      .list-item{
        :hover{
          background-color:#e2e2e2;
          cursor: pointer;
        }
        height: 60px;
        padding:10px 20px;
        display:flex;
        .item-left{
          display:block;
        }
        .item-center{
          width: 280px;
          padding:0 10px;
        }
        .item-right{
          display:block;
          margin-top:10px;
          width: 62px;
          height: 18px;
          line-height:18px;
          text-align:center;
          border:1px solid #999;
          color:#999;
          text-decoration:none;
          :hover{
            border:1px solid #333;
            color:#333;
          }
        }
      }
    }
  }
  .right{
    margin-left:40px;
    width: 426px;
    .right-title{
      display:flex;
      justify-content:space-between;
      border-bottom:2px solid #c20c0c;
      div{
        font-size:24px;
      }
      a{
        margin-top:10px;
        display:block;
        height: 16px;
        line-height:16px;
      }
    }
    .right-list{
      border-left:1px solid #e2e2e2;
      border-right:1px solid #e2e2e2;
      li:nth-child(2n){
        background-color:#f7f7f7;
      }
      li:nth-child(2n-1){
        background-color:#fff;
      }
      .list-item{
        :hover{
          background-color:#e2e2e2;
          cursor: pointer;
        }
        height: 60px;
        padding:10px 20px;
        display:flex; 
        .item-left{
          font-size:14px;
          color:#da4545;
          
        }
        :nth-child(n+4) .item-left{
          color:#999;
        }
        .item-center{
          display:block;
          margin-left:15px;
        }
        .item-right{
          width: 208px;
          margin-left:10px;
        }
        .score-bg{
          position:relative;
          width: 96px;
          height: 8px;
          border-radius:4px;
          margin-top:14px;
          border:1px solid #C0C0C0;
          background-color:#e2e2e2;
          .score{
            position:absolute;
            left:0;
            top:-1px;
            /* width: 96px; */
            height: 8px;
            border-radius:4px;
            border:1px solid #C0C0C0;
            background-color:#C0C0C0;
          }
        }
      }
    }
  }
`

export const BottomWrapper = styled.div`
  .item{
    margin-top:40px;
    .item-title{
      display:flex;
      font-size:24px;
      width: 900px;
      height: 40px;
      border-bottom:2px solid #c20c0c;
      .title-left{
        width: 200px;
        display:flex;
      }
      span{
        margin:16px 5px 0;
        display:block;
        width: 6px;
        height: 6px;
        border-radius:3px;
        background-color:#333;
      }
      a{
        font-size:12px;
        margin-top:16px;
        margin-left: 665px;
      }
    }
    .item-img{
      display:flex;
      flex-wrap:wrap;
      .iten{
        display:flex;
        margin:20px 0;
        width: 435px;
        .iten-content{
          margin-left:20px;
          margin-top:20px;
          .first-line{
            font-size:18px;
            font-weight: bold;
          }
          .second-line{
            margin-top:20px;
            color:#999;
          }
        }
      }
    }
  }
`
