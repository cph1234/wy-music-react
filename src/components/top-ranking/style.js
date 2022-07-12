import styled from 'styled-components';

export const RankingWrapper = styled.div`
  border-left:1px solid #cccccc;
  border-top:1px solid #cccccc;
  border-bottom:1px solid #cccccc;
  flex:1;
  .header{
    display:flex;
    padding: 20px 0 20px 20px;
    background-color:#f4f4f4;
    .image{
      position:relative;
      width:80px;
      img{
        width:80px;
        height: 80px;
      }
    }
    .info{
      margin: 5px 0 0 10px;
      a{
        font-size:14px;
        color: #333;
        font-weight: 700;
      }
      .btn{
        width: 22px;
        height: 22px;
        margin: 10px 10px 0 0;
        cursor: pointer;
      }
      .play {
        background-position: -267px -205px;
      }

      .favor {
        background-position: -300px -205px;
      }
    }
  }
  .list a:nth-child(2n){
    background-color:#f4f4f4;
  }
  .list a:nth-child(2n+1){
    background-color:#e8e8e8;
  }
  .list{
    a{
      display:block;
      text-decoration:none;
    }
    .item{
      /* position: relative; */
      display:flex;
      align-items: center;
      height: 32px;
      line-height:32px;

      :nth-child(-n+3) .rank {
        color: #c10d0c;
      }
      .rank{
        width: 35px;
        margin-left:10px;
        font-weight:300;
        font-size:16px;
        text-align:center;
      }
      .info{
        display: flex;
        justify-content: space-between;
        width: 170px;
        height: 17px;
        line-height: 17px;
        .name{
          flex:1;
        }
        .operate{
          display: flex;
          align-items: center;
          display: none;
          width: 82px;
          .btn{
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }
          .play {
            background-position: -267px -268px;
          }

          .addto {
            background-position: 0 -700px;
            position:relative;
            top:2px;
          }

          .favor {
            background-position: -297px -268px;
          }
        }
      }
      &:hover{
        .operate{
        display:block;
      }
      }
    }
  }
  .footer{
    padding-right:32px;
    text-align:right;
    height: 32px;
    line-height:32px;
    background-color:#e8e8e8;
    a{
      color:#000000;
    }
  }
`