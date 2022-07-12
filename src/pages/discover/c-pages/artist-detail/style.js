import styled from 'styled-components';

export const WrapperAtistDetail = styled.div`
  display:flex;
  background-color:#fff;
`

export const WrapperLeft = styled.div`
  width: 709px;
  border-left:1px solid #DCDCDC;
  border-right:1px solid #DCDCDC;
  .detail-top{
    padding:35px;
    padding-bottom:0;
    .top-name{
      font-size:24px;
      .name-en{
        font-size:14px;
        color:#999;
        margin-left:10px;
      }
    }
    .avatar{
      position:relative;
      width: 640px;
      height: 300px;
      border:1px solid #DCDCDC;
      img{
        display:block;
      }
      .bgcolor{
        position:absolute;
        bottom: -2px;
        left: 0;
        width: 640px;
        height: 80px;
        background:linear-gradient(to bottom,transparent,rgba(112,112,112,0.8));
      }
      .avatar-btn{
        position:absolute;
        right:20px;
        bottom: 20px;
        .avatar-btn-1{
          background-position: 0 -1156px;
          width: 95px;
          height: 32px;
          :hover{
            background-position: 0 -1196px;
          }
        }
        .avatar-btn-2{
          margin-left:10px;
          background-position: 0 -500px;
          width: 76px;
          height: 32px;
          :hover{
            background-position: 0 -540px;
          }
        }
      }
    }
  }
  .detail-choice{
    display:flex;
    margin-left:35px;
    height: 39px;
    background-position:0 0;
    width: 640px;
    z-index:10;
    .active{
      background-position:0 -90px;
    }
    div{
      width: 136px;
      font-size:14px;
      text-align:center;
      line-height:40px;
      cursor: pointer;
      background-position:-20px -140px;
      :hover{
        background-position:0 -90px;
      }
    }
  }
  .artist1{
    padding-left:35px;
    .artist1-btn{
      display:flex;
      justify-content:space-between;
      height: 31px;
      margin-top:25px;
      width: 640px;
      .btn-left{
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
      }
      .btn-right{
        a{
          position:relative;
          span{
            position:absolute;
            left:30px;
            bottom:6px;
          }
        }
        .btn3_1{
          margin-left:5px;
          display:inline-block;
          background-position:0 -59px;
          width: 102px;
          height: 31px;
        }
        .btn3_2{
          display:inline-block;
          background-position:-245px -100px;
          width: 5px;
          height: 31px;
        }
      }
    }
    .artist1-list{
      margin-top:10px;
      .list-item{
        display:flex;
        align-items:center;
        height: 30px;
        .item-1{
          width: 94px;
          display:flex;
          align-items:center;
          .li-left-1{
            line-height:30px;
            color:#999999;
            width: 30px;
            text-align:right;
          }
          .li-left-2{
            display: inline-block;
            margin-left:40px;
            background-position: 0 -103px;
            width: 17px;
            height: 17px;
            :hover{
              background-position: 0 -128px;
            }
          }
        }
        .item-2{
          width: 289px;
          margin-left:15px;
          .item-2-name{

          }
          .item-2-alia{
            color:#999;
          }
        }
        .item-3{
          width: 90px;
        }
      }
      li:nth-child(2n-1){
        background-color:#f7f7f7;
      }
    }
  }
  .artist2{
    display:flex;
    padding-left:35px;
    flex-wrap:wrap;
    .artist2-item{
      margin-right: 15px;
    }
  }
  .artist3{
    display:flex;
    flex-wrap:wrap;
    padding-left:35px;
    padding-top:25px;
    .list-item{
      margin-right:25px;
      margin-bottom:25px;
      width: 137px;
      img{
        border:1px solid #999;
      }
      div{
        font-size:14px;
        margin-top:5px;
      }
    }
  }
  .artist4{
    padding-left:35px;
    margin-top:40px;
    .brief-title{
      display:flex;
      height: 19px;
      .title-1{
        width: 3px;
        background-color:#c10d0c;
      }
      .title-2{
        margin-left:5px;
        font-size:14px;
        font-weight:bold;
        line-height:19px;
      }
    }
    .brief-content{
      text-indent:25px;
      line-height:30px;
      color:#666;
    }
    .intro{
      margin-top:40px;
      .intro-title{
        font-size:14px;
        font-weight:bold;
      }
      .intro-content{

        .content-item{
          line-height:30px;
          color:#666;
        }
      }
    }
  }
`

export const WrapperRight = styled.div`
  width: 280px;
  border-right:1px solid #DCDCDC;
  padding:30px;
  .hot-title{
    height: 24px;
    line-height:24px;
    font-weight:bold;
    border-bottom:1px solid #DCDCDC;
  }
  .hot-list{
    display:flex;
    flex-wrap:wrap;
    .hot-item{
      width: 50px;
      margin-top:20px;
      margin-right:30px;
      :nth-child(3n){
        margin-right:0;
      }
    }
  }
  .download{
    margin:15px 0;
    font-weight:bold;
    width: 200px;
    height: 30px;
    line-height:30px;
    border-bottom:1px solid #ccc;
  }
  .download-icons{
    .android{
      margin-left:20px;
      font-size:40px;
      color:#ccc;
      :hover{
        color:#999;
      }
    }
    .apple{
      margin-left:20px;
      font-size:40px;
      color:#ccc;
      :hover{
        color:#999;
      }
    }
    .windows{
      margin-left:20px;
      font-size:40px;
      color:#ccc;
      :hover{
        color:#999;
      }
    }
  }
`