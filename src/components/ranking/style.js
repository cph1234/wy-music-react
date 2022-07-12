import styled from 'styled-components';

export const RankingWrapper = styled.div`
  
`

export const RankingTop = styled.div`
  display:flex;
  margin:44px;
  .image{
    position:relative;
    width: 158px;
    height: 158px;
    border:1px solid #ccc;
    /* background-position:bottom left; */
    img{
      margin-left:3px;
      margin-top:3px;
      width: 150px;
      height: 150px;
    }
    span{
      background-position: -230px -380px;
    }
  }
  .info{
    margin-top:10px;
    margin-left:44px;
    .title{
      color:#333;
      font-size:20px;
    }
    .content{
      height: 35px;
      span{
        line-height:35px;
      }
      .icon{
        background-position: -18px -682px;
        height: 13px;
        width: 13px;
        margin-top:11px;
        margin-right:5px;
      }
      .description{
        margin-left:10px;
        width:200px;
        color:#ccc;
      }
    }
    .btn{
      height: 31px;
      margin-top:25px;
      a{
        position:relative;
        span{
          position:absolute;
          left:30px;
          bottom:6px;
        }
      }
      .btn1{
        display:inline-block;
        background-position:0 -633px;
        width: 66px;
        height: 31px;
        span{
          left:33px;
          color:#fff;
        }
      }
      .btn2{
        display:inline-block;
        background-position:0 -1588px;
        width: 32px;
        height: 31px;
      }
      .btn3_1{
        margin-left:5px;
        display:inline-block;
        background-position:0 -977px;
        width: 87px;
        height: 31px;
      }
      .btn3_2{
        display:inline-block;
        background-position:-245px -1020px;
        width: 5px;
        height: 31px;
      }
      .btn4_1{
        margin-left:5px;
        display:inline-block;
        background-position:0 -1225px;
        width: 75px;
        height: 31px;
      }
      .btn4_2{
        display:inline-block;
        background-position:-245px -1020px;
        width: 5px;
        height: 31px;
      }
      .btn5_1{
        margin-left:5px;
        display:inline-block;
        background-position: 0 -2761px;
        width: 57px;
        height: 31px;
      }
      .btn5_2{
        display:inline-block;
        background-position:-245px -1020px;
        width: 5px;
        height: 31px;
      }
      .btn6_1{
        margin-left:5px;
        display:inline-block;
        background-position: 0 -1465px;
        width: 81px;
        height: 31px;
        
      }
      .btn6_2{
        display:inline-block;
        background-position:-245px -1020px;
        width: 5px;
        height: 31px;
      }
    }
  }

`

export const RankingList = styled.div`
  .list-title{
    display:flex;
    justify-content: space-between;
    width:652px;
    margin-left:44px;
    height: 30px;
    align-items:center;
    padding-bottom:10px;
    border-bottom:2px solid #c20c0c;
    .title{
      font-size:20px;
    }
    .music-count{
      margin-top:5px;
      margin-left:-370px;
    }
    .play-count{
      text-align:right;
      span{
        color:#c20c0c;
        font-weight:bold;
      }
    }
  }
  .table{
    background-color: #f7f7f7;
    width: 652px;
    margin-left:44px;
    border-collapse: collapse;
    border:1px solid #ccc;
    .thead{
      height: 35px;
      th{
        border-left:1px solid #ccc;
        text-align: left;
        font-weight: normal;
        color: #666;
        background-position:0 0;
        background-repeat: repeat-x;
        padding-left:5px;
      }
      .th-blank{
        width: 77px;
      }
      .th-title{
        width: 326px;
      }
      .th-time{
        width: 91px;
      }
    }
    .tbody{
      tr:nth-child(2n){
        background-color:#fff;
      }
      .top-three{
        height: 70px;
        td{
          height: 70px;
        }
        .td-num{
          .rank{
          width: 78px;
          display:flex;
          justify-content:between;
          div{
            color:#999999;
          }
          .index{
            margin-left:20px;
            width: 14px;
            text-align:center;
          }
          .rank-item{
            margin-left:15px;
            margin-top:6px;
            width: 16px;
            height: 14px;
            span{
              display:block;
              margin-top:-5px;
              margin-left:8px;
            }
          }
          }
          
        }
        .td-title{
          display:flex;
          align-items: center;
          .icon{
            background-position:0 -103px;
            width: 17px;
            height: 17px;
            margin:0 10px 0 15px;
          }
          .item-name{
            width: 160px;
          }
        }
      }
      .normal{
        height: 30px;
        td{
          height: 30px;
        }
        .td-num{
          .rank{
          width: 78px;
          display:flex;
          justify-content:between;
          div{
            color:#999999;
          }
          .index{
            margin-left:20px;
            width: 14px;
            text-align:center;
          }
          .rank-item{
            margin-left:15px;
            margin-top:6px;
            width: 16px;
            height: 14px;
            span{
              display:block;
              margin-top:-5px;
              margin-left:8px;
            }
          }
          }
        }
        .td-title{

          display:flex;
          align-items: center;
          img{
            margin-left:5px;
          }
          .icon{
            display:block;
            background-position:0 -103px;
            width: 17px;
            height: 17px;
            margin:0 10px 0 5px;
          }
          .item-name{
            width: 160px;
          }
        }
      }
    }
  }
`
