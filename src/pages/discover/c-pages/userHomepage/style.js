import styled from 'styled-components'

export const WrapperHomePage = styled.div`
  background-color:#fff;
  padding:40px;
  border-left:1px solid #DCDCDC;
  border-right:1px solid #DCDCDC;
  .user-top{
    display:flex;
    .top-left{
      width: 196px;
      height: 196px;
      border:1px solid #DCDCDC;
      img{
        margin-top:3px;
        margin-left:3px;
      }
    }
    .top-right{
      margin-left:40px;
      width: 670px;
      .right-1{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding-bottom:20px;
        border-bottom:1px solid #DCDCDC;
        .right-1-1{
          display:flex;
          align-items:center;
          a{
            font-size:22px;
            color:#333;
            /* font-weight:bold; */
          }
          img{
            display:block;
            margin-left:10px;
            width: 57px;
            height: 20px;
          }
          .right-center{
            margin-left:10px;
            background-position: -135px -190px;
            width: 65px;
	          height: 19px;
            span{
              display:block;
              /* margin-left:30px; */
              color:#e03a24;
              font-weight:bold;
              font-style:oblique;
              font-size:14px;
              text-align:center;
              line-height:21px;
            }
          }
          .right-sex{
            margin-left:10px;
            background-position: -41px -57px;
            width: 20px;
            height: 20px;
          }
        }
        .right-1-2{
          .right-btn{
            display:flex;
            background-color:transparent;
            :hover .btn-1{
              background-position:0 -59px;
            }
            :hover .btn-2{
              background-position:-245px -100px;;
            }
            .btn-1{
              padding-left:6px;
              display:block;
              background-position:0 -305px;
              width: 97px;
              height: 31px;
              line-height:31px;
              text-decoration:none;
            }
            .btn-2{
              display:block;
              background-position:-245px -346px;
              width: 5px;
              height: 31px;
            }
          }
        }
      }
      .right-2{
        display:flex;
        /* margin-left:20px; */
        margin-top:10px;
        .bottom-first{
          cursor: pointer;
          padding-right:20px;
          border-right:1px solid #DCDCDC;
          .first-1{
            font-size:20px;
          }
          :hover{
            color:#0c73c2;
          }
        }
        .bottom-second{
          cursor: pointer;
          padding:0 20px;
          border-right:1px solid #DCDCDC;
          .second-1{
            font-size:20px;
          }
          :hover{
            color:#0c73c2;
          }
        }
        .bottom-third{
          cursor: pointer;
          padding-left:20px;
          .third-1{
            font-size:20px;
          }
          :hover{
            color:#0c73c2;
          }
        }
      }
      .right-3{
        margin-top:10px;
        .social-net{
          margin-top:10px;
        }
      }
    }   
  }
  .user-record{
    width: 900px;
    margin-top:20px;
    .record-title{
      height: 35px;
      display:flex;
      
      justify-content:space-between;
      align-items:center;
      border-bottom:2px solid #c20c0c;
      .title-left{
        .title-left-1{
          font-size:20px;
          color:#666666;
        }
        .title-left-2{
          margin-left:10px;
        }
      }
      .title-right{
        .week{
          cursor: pointer;
          font-weight:blod;
        }
        .all-day{
          cursor: pointer;
        }
        .active{
          font-weight:900;
        }
      }
    }
    .record-list{
      border:1px solid #DCDCDC;
      .list-item{
        display:flex;
        position:relative;
        height: 38px;
        background-color:#f7f7f7;
        .li-left{
          width: 72px;
          display:flex;
          align-items:center;
          .li-left-1{
            font-size:16px;
            line-height:38px;
            padding-left:20px;
            width: 40px;
            text-align:right;
          }
          .li-left-2{
            display: inline-block;
            margin-left:10px;
            background-position: 0 -103px;
            width: 17px;
            height: 17px;
            :hover{
              background-position: 0 -128px;
            }
          }
        }
        .li-center{
          margin-left:10px;
          display:flex;
          width: 500px;
          align-items:center;
          .li-song{
            font-weight:bold;
            cursor: pointer;
          }
          .li-singer{
            color:#AEAEAE;
            cursor: pointer;
          }
        }
        .li-right{
          position:absolute;
          top:0;
          left: 582px;
          height: 38px;
          background-color: rgba(238,248,254,0.6);
          line-height:38px;
          color:#999;
          padding-left:10px;
        }
      }
      li:nth-child(odd){
        background-color:#fff;
      }
    }
    .more{
      float:right;
    }
  }
  .user-playlist{
    margin-top:60px;
    .title{
    height: 35px;
    font-size:20px;
    border-bottom:2px solid #c20c0c;
    }
    .playlist-item{
      display:flex;
      font-size:12px;
      .cover-item{
        padding-right:50px;
      }
    }
  }
  .other-playlist{
    margin-top:20px;
    .title{
    height: 35px;
    font-size:20px;
    border-bottom:2px solid #c20c0c;
    }
    .playlist-item{
      display:flex;
      font-size:12px;
      .cover-item{
        padding-right:50px;
      }
    }
  }
`