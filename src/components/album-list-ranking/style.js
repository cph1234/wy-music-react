import styled from 'styled-components';

export const RankingWrapper = styled.div`
  
`

export const RankingList = styled.div`
  .list-title{
    display:flex;
    width:640px;
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
      margin-left:20px;
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
    width: 640px;
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
        width: 75px;
      }
      .th-title{
        width: 233px;
      }
      .th-time{
        width: 109px;
      }
      .th-singer{
        width: 87px;
      }
      .th-album{
        width: 126px;
      }
    }
    .tbody{
      tr:nth-child(2n){
        background-color:#fff;
      }
      .empty{
        color:#999999;
      }
      .normal{
        height: 30px;
        td{
          height: 30px;
        }
        .td-num{
          .rank{
            width: 75px;
            display:flex;
            justify-content:between;
            div{
              color:#999999;
            }
            .td-index{
              margin-left:10px;
              width: 14px;
              text-align:center;
              margin-right:20px;
            }
            .td-icon{
              background-position:0 -103px;
              width: 17px;
              height: 17px;
              margin:0 10px 0 5px;
            }
          }
        }
        .td-title{
          .item-name{
            width: 228px;
            margin-left:5px;
            display:flex;
          }
          .item-icon{
            background-position: 0 -151px;
            width: 23px;
            height: 17px;
            margin-left:3px;
          }
        }
        .td-time{
          width: 108px;
          div{
            width: 104px;
            margin-left:5px;
          }
        }
        .td-singer{
          width: 87px;
          div{
            width: 82px;
            margin-left:5px;
          }
        }
        .td-album{
          width: 126px;
          div{
            width: 121px;
            margin-left:5px;
          }
        }
      }
    }
  }
`

