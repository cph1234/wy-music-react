import styled from "styled-components";
import sprite_01 from "@/assets/img/sprite_01.png"

export const HeaderWrapper = styled.div`
  position:relative;
  height:75px;
  background-color:#242424;
  font-size:14px;
  color:#fff;
  .content{
    height:70px;
    display:flex;
    justify-content:space-between;
  }
  .divider{
    height:5px;
    background-color: #C20202;
  }
  .login{
    position:absolute;
    top:${window.innerHeight / 2 - 186}px;
    left:${window.innerWidth / 2 - 265}px;
    z-index:999;
    width: 530px;
    height: 372px;
    
    .top-login{
      height: 38px;
      width: 100%;
      border-bottom: 1px solid #191919;
      border-radius: 4px 4px 0 0;
      background: #2d2d2d;
      span{
        line-height:38px;
        margin-left:20px;
        font-weight:bold;
        color:#fff;
      }
      i{
        float:right;
        margin-right:20px;
        font-size:26px;
        line-height:38px;
        text-decoration:none;
        cursor:pointer;
      }
    }
    .center-login{
      display:flex;
      background:#fff;
      padding:38px 0 10px;
      .center-left{
        margin-left:110px;
        background-position:0 0;
        background-size: contain;
        width: 125px;
	      height: 220px
      }
      .center-right{
        width: 200px;
        margin-left:25px;
        .center-right-top{
          color:#191919;
          font-size:18px;
          text-align:center;
        }
        .center-right-center{
          display: flex;
          height: 130px;
          margin:10px 0;
          justify-content:center;
          img{
            width: 128px;
            height: 128px;
          }
        }
        .center-right-bottom{
          font-size:12px;
          text-align:center;
          color:#999;
          a{
            color:#0c73c2;
          }
        }
      }
    }
    .bottom-login{
      background:#fff;
      padding-top:10px;
      padding-bottom:20px;
      span{
        cursor: pointer;
        margin-left:205px;
        display:block;
        text-align:center;
        width: 120px;
        height: 30px;
        color:#999;
        border-radius:15px;
        border:1px solid #999;
        line-height:30px;
        font-size:12px;
        text-decoration:none;
      }
    }
    .center-login2{
      display:flex;
      background:#fff;
      padding:38px 0 10px;
      .center-left2{
        padding-left:45px;
        padding-right:35px;
        border-right:1px dotted #999;
        .left-img{
          background-position:0 0;
          width: 203px;
	        height: 107px;
        }
        .left-btn1{
          display:flex;
          padding-top:20px;
          margin-left:-10px;
          &:hover{
            .left-btn1-1{
              background-position:0 -469px;;
            }
            .left-btn1-2{
              background-position:-244px -510px;
            }
          }
          .left-btn1-1{
            /* display:block; */
            background-position: 0 -551px;
            width: 218px;
            height: 31px;
            line-height:31px;
            color:#fff;
          }
          .left-btn1-2{
            background-position: -244px -592px;
            width: 6px;
            height: 31px;
          }
        }
        .left-btn2{
          display:flex;
          padding-top:10px;
          margin-left:-10px;
          &:hover{
            .left-btn2-1{
              background-position:0 -141px;;
            }
            .left-btn2-2{
              background-position:-245px -182px;
            }
          }
          .left-btn2-1{
            /* display:block; */
            background-position: 0 -305px;
            width: 218px;
            height: 31px;
            line-height:31px;
          }
          .left-btn2-2{
            background-position: -245px -346px;
            width: 6px;
            height: 31px;
          }
        }
      }
      .center-right2{
        padding-left:35px;
        .right-1{
          height: 39px;
          a{
            display: flex;
            .span1{
              display:block;
              background-position: -150px -670px;
              width: 38px;
              height: 39px;
            }
            .span2{
              display: block;
              margin-top:10px;
              margin-left:10px;
            }
          }
        }
        .right-2{
          margin-top:15px;
          height: 39px;
          a{
            display: flex;
            .span1{
              display:block;
              background-position: -190px -670px;
              width: 38px;
              height: 39px;
            }
            .span2{
              display: block;
              margin-top:10px;
              margin-left:10px;
            }
          }
        }
        .right-3{
          margin-top:15px;
          height: 39px;
          a{
            display: flex;
            .span1{
              display:block;
              background-position: -230px -670px;
              width: 38px;
              height: 39px;
            }
            .span2{
              display: block;
              margin-top:10px;
              margin-left:10px;
            }
          }
        }
        .right-4{
          margin-top:15px;
          height: 39px;
          a{
            display: flex;
            .span1{
              display:block;
              background-position: -271px -670px;
              width: 38px;
              height: 39px;
            }
            .span2{
              display: block;
              margin-top:10px;
              margin-left:10px;
            }
          }
        }
      }
    }
    .bottom-login2{
      position:relative;
      background-color:#fff;
      padding:20px 35px 40px;
      span{
        color:#999;
        font-size:12px;
      }
      a{
        color:#0c73c2;
        font-size:12px;
      }
      .qr{
        position:absolute;
        bottom:0;
        right:0;
        background-position:0 0;
        width: 52px;
        height: 52px;
        background-size: contain;
        cursor: pointer;
      }
    }
    .cellphone{
      padding-top:30px;
      padding-left:154px;
      background-color:#fff;
      
      /* height: 200px; */
      width: 530px;
      /* text-align:center; */
      color:#333333;
      .dropdown {
        display:flex;
        position: relative;
        width: 220px;
        /* display: inline-block; */
        .dropdown-left{
          width: 43px;
          height: 30px;
          padding-left:5px;
          padding-right:18px;
          border:1px solid #DCDCDC;
          line-height:30px;
          font-size:12px;
          cursor: pointer;
        }
        input{
          padding-left:5px;
          width: 177px;
          background-color:#fff;
          border:1px solid #DCDCDC;
          border-left:0px;
        }
        .dropdown-content {
          display: none;
          position: absolute;
          cursor: pointer;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          padding: 12px 16px;
          .content-item{
            display:flex;
            justify-content:space-between;
            height: 32px;
            width: 171px;
          }
        }
        .country-active {
          display: block;
          height: 128px;
          font-size:12px;
          overflow-y:scroll;
          margin-top:30px;
        }
      }
      
    }
    .password{
      position:relative;
      padding-top:10px;
      background-color:#fff;
      color:#333333;
      width: 220px;
      input{
        padding-left:5px;
        width: 220px;
        height: 30px;
        background-color:#fff;
        border:1px solid #DCDCDC;
      }
      a{
        top: 15px;
        right: 0;
        position:absolute;
        font-size:12px;
      }
    }
    .captcha{
      display:flex;
      position:relative;
      padding-top:10px;
      background-color:#fff;
      color:#333333;
      width: 220px;
      input{
        padding-left:5px;
        width: 120px;
        height: 30px;
        background-color:#fff;
        border:1px solid #DCDCDC;
      }
      .btn1{
        margin-left:10px;
        padding-left:10px;
        background-position:0 -59px;
        width: 80px;
	      height: 31px;
      }
      .btn2{
        background-position:-245px -100px;
        width: 5px;
        height: 31px;
      }
      :hover{
        .btn1{
          background-position:0 -141px;
        }
        .btn2{
          background-position:-245px -182px;
        }
      }
    }
    .err-message{
      margin-top:10px;
      color:red;
      font-size:12px;
    }
    .login-way{
      font-size:12px;
      width: 220px;
      margin-top:10px;
      display:flex;
      justify-content:space-between;
      .aotu-login{
        display:flex;
        align-items:center;
        input{
          margin-right:5px;
        }
      }
    }
    .bottom-btn{
      display:flex;
      padding-top:20px;
      &:hover{
        .left-btn1-1{
          background-position:0 -469px;;
        }
        .left-btn1-2{
          background-position:-244px -510px;
        }
      }
      .left-btn1-1{
        /* display:block; */
        background-position: 0 -551px;
        width: 214px;
        height: 31px;
        line-height:31px;
        color:#fff;
      }
      .left-btn1-2{
        background-position: -244px -592px;
        width: 6px;
        height: 31px;
      }
    }
    .other-bottom{
      display:flex;
      justify-content:space-between;
      margin-left:-154px;
      margin-top:40px;
      height: 50px;
      border-top:1px solid #DCDCDC;
      padding:0 20px;
      a{
        margin-top:16px;
        font-size:12px;
        color:#0c72c3;
      }
    }
  }
`

export const HeaderLeft = styled.div`
display:flex;
.logo{
  display:block;
  width: 176px;
  height: 69px;
  background-position: 0 0;
  text-indent: -9999px;
}
.select-list{
display:flex;
line-height:70px;
  .select-item{
    position:relative;
    a{
      display:block;
      padding:0 20px;
      color:#ccc
    }
    :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${sprite_01});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }
    &:hover a,a.active{
      color: #fff;
      background: #000;
      text-decoration: none;
    }
    .active .icon{
      position: absolute;
      display: inline-block;
      width: 12px;
      height: 7px;
      bottom: -1px;
      left: 50%;
      transform: translate(-50%, 0);
      background-position: -226px 0;
    }
  }
}
`

export const HeaderRight = styled.div`
  display:flex;
  
  align-items:center;
  color:#ccc;
  font-size:12px;
  position:relative;
  .search{
    width:158px;
    height: 32px;
    border-radius:16px;
    input{
      &::placeholder{
      font-size:12px;
      }
    }
  }
  .search-content{
    position:absolute;
    top:60px;
    left:0;
    width: 240px;
    height: 300px;
    background-color:#fff;
    z-index:999;
    border-radius:5px;
    box-shadow:2px 2px 5px 4px rgba(0,0,0,0.5);
    .top{
      height: 40px;
      line-height:40px;
      padding-left: 10px;
      color:#666;
      border-bottom:1px solid #e2e2e2;
      cursor: pointer;
    }
    .bottom{
      width: 100%;
      height: 259px;
      .song{
        display: flex;
        height: 108px;
        .song-left{
          width: 64px;
          border-right:1px solid #e2e2e2;
          text-align:center;
          padding-top:10px;
          .song-icon{
            display:inline-block;
            background-position: -36px -301px;
            width: 10px;
            height: 13px;
            margin-right:6px;
          }
          .song-text{
            color:#333;
          }
        }
        .song-right{
          flex:1;
          border-bottom:1px solid #e2e2e2;
          padding:8px 0;
          .song-item-bcc{
            &:hover{
              background-color:#ccc;
            }
            cursor: pointer;
            .song-item{
              color:#333;
              padding:2px 10px;
            }
          }
        }
      }
      .artists{
        display: flex;
        height: 36px;
        .artists-left{
          width: 64px;
          border-right:1px solid #e2e2e2;
          text-align:center;
          padding-top:10px;
          .artists-icon{
            display:inline-block;
            background-position: -50px -300px;
            width: 14px;
            height: 14px;
            margin-right:6px;
          }
          .artists-text{
            color:#333;
          }
        }
        .artists-right{
          flex:1;
          border-bottom:1px solid #e2e2e2;
          padding:6px 0;
          .artists-item-bcc{
            &:hover{
              background-color:#ccc;
            }
            cursor: pointer;
            .artists-item{
              color:#333;
              padding:2px 10px;
            }
          }
        }
      }
      .albums{
        display: flex;
        height: 58px;
        .albums-left{
          width: 64px;
          border-right:1px solid #e2e2e2;
          text-align:center;
          padding-top:10px;
          .albums-icon{
            display:inline-block;
            background-position: -35px -320px;
            width: 14px;
            height: 14px;
            margin-right:6px;
          }
          .albums-text{
            color:#333;
          }
        }
        .albums-right{
          flex:1;
          border-bottom:1px solid #e2e2e2;
          padding:6px 0;
          .albums-item-bcc{
            &:hover{
              background-color:#ccc;
            }
            cursor: pointer;
            .albums-item{
              color:#333;
              padding:2px 10px;
            }
          }
        }
      }
      .playlists{
        display: flex;
        height: 58px;
        .playlists-left{
          width: 64px;
          border-right:1px solid #e2e2e2;
          text-align:center;
          padding-top:10px;
          .playlists-icon{
            display:inline-block;
            background-position: -35px -320px;
            width: 14px;
            height: 14px;
            margin-right:6px;
          }
          .playlists-text{
            color:#333;
          }
        }
        .playlists-right{
          flex:1;
          padding:6px 0;
          .playlists-item-bcc{
            &:hover{
              background-color:#ccc;
            }
            cursor: pointer;
            .playlists-item{
              color:#333;
              padding:2px 10px;
            }
          }
        }
      }
    }
  }
  .center{
    width: 90px;
    height: 32px;
    border-radius:16px;
    text-align:center;
    line-height:32px;
    border:1px solid #666;
    margin:0 16px;
  }
  .right-login{
    cursor: pointer;
  }
  .avatar{
    position:relative;
    cursor: pointer;
    img{
      overflow:hidden;
      border-radius:15px;
    }
    :hover ul{
      display:block;
    }
    ul{
      display:none;
      z-index:99;
      
      position:absolute;
      top:30px;
      left: -65px;
      width: 160px;
      border-radius:4px;
      li{
        background-color:rgb(43,43,43);
        height: 35px;
        width: 160px;
        text-align:center;
        line-height:35px;
        a{
          text-decoration:none;
          color:#DCDCDC;
        }
      }
      .li-second:hover {
        background-color:rgb(53,53,53);
      }
      .li-forth:hover {
        background-color:rgb(53,53,53);
      }
      .li-third:hover {
        background-color:rgb(53,53,53);
      }
      .li-fifth:hover {
        background-color:rgb(53,53,53);
      }
      .li-sixth:hover {
        background-color:rgb(53,53,53);
      }
      .li-seventh:hover {
        background-color:rgb(53,53,53);
      }
      .li-eighth:hover {
        background-color:rgb(53,53,53);
      }
      .li-first{
        background-color:transparent;
        height: 5px;
      }
    }
  }
`