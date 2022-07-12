import styled from "styled-components";

export const SearchWrapper = styled.div`
  background-color:#ffffff;
  padding:0 40px;
  border-left:1px solid #d3d3d3;
  border-right:1px solid #d3d3d3;
  .search{
    width: 100%;
    display:flex;
    justify-content:space-around;
    position:relative;
    .search-input{
      margin:50px 0;
    }
    .search-content{
    position:absolute;
    top:86px;
    left:250px;
    width: 390px;
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
  }
  .text{
    color:#999999;
    margin-bottom:20px;
  }
  .table{
    th{
      width: 110px;
      height: 39px;
      border-top:2px solid #d3d3d3;
      border-bottom:1px solid #d3d3d3;
      font-weight:normal;
      &:hover{
        border-top:2px solid #C20202;
        border-bottom:0;
      }
    }
    .title_active{
      border-top:2px solid #C20202;
      border-bottom:0;
      border-left:1px solid #d3d3d3;
      border-right:1px solid #d3d3d3;
    }
    tr:nth-child(1){
      border-left:1px solid #d3d3d3;
    }
    tr:last-child{
      border-right:1px solid #d3d3d3;
    }
  }
`