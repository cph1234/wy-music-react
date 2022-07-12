import React from 'react';
import { Redirect } from 'react-router-dom';

import PHDiscover from '../pages/discover';
import PHRecommend from '../pages/discover/c-pages/recommend';
import PHRanking from '../pages/discover/c-pages/ranking';
import PHAlbum from '../pages/discover/c-pages/album';
import PHArtist from '../pages/discover/c-pages/artist';
import PHDjradio from '../pages/discover/c-pages/djradio';
import PHSongs from '../pages/discover/c-pages/songs';
import PHCurrentMusic from '../pages/player';
import PHSongList from '../pages/discover/c-pages/song-list';
import PHAlbumList from '../pages/discover/c-pages/album-list'

import PHNewRanking from '../pages/discover/c-pages/ranking/c-cpn/new-ranking';
import PHUpRanking from '../pages/discover/c-pages/ranking/c-cpn/up-ranking';
import PHOriginRanking from '../pages/discover/c-pages/ranking/c-cpn/origin-ranking';
import PHTopRanking from '../pages/discover/c-pages/ranking/c-cpn/hot-ranking';
import PHUserHomepage from '../pages/discover/c-pages/userHomepage'
import PHPersonHomepage from '../pages/discover/c-pages/personHomepage'
import PHArtistDetail from '../pages/discover/c-pages/artist-detail'
import PHMyMessage from '../pages/discover/c-pages/my-message'
import PHUserLevel from '../pages/discover/c-pages/userLevel'
import PHUserSetting from '../pages/discover/c-pages/userSetting'
import PHSingleSong from '../pages/discover/c-pages/single-song'
import PHFriend from '../pages/friend';
import PHMine from '../pages/mine'
import PHSearch from '../pages/discover/c-pages/search'
// const PHDiscover = React.lazy(() => import("@/pages/discover"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => {
      return <Redirect to="/discover" />
    }
  },
  {
    path: "/discover",
    component: PHDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => {
          return <Redirect to="/discover/recommend" />
        }
        // component: PHRecommend
      },
      {
        path: "/discover/recommend",
        component: PHRecommend
      },
      {
        path: "/discover/ranking",
        component: PHRanking,
        routes: [
          {
            path: "/discover/ranking",
            exact: true,
            render: () => {
              return <Redirect to="/discover/ranking/up" />
            }
          },
          {
            path: "/discover/ranking/up",
            component: PHUpRanking,
          },
          {
            path: "/discover/ranking/new",
            component: PHNewRanking,
          },
          {
            path: "/discover/ranking/origin",
            component: PHOriginRanking,
          },
          {
            path: "/discover/ranking/top",
            component: PHTopRanking,
          }
        ]
      },
      {
        path: "/discover/album",
        component: PHAlbum
      },
      {
        path: "/discover/djradio",
        component: PHDjradio
      },
      {
        path: "/discover/artist",
        component: PHArtist
      },
      {
        path: "/discover/songs",
        component: PHSongs
      },
      {
        path: "/discover/currentmusic",
        component: PHCurrentMusic
      },
      {
        path: "/discover/songlist",
        component: PHSongList
      },
      {
        path: "/discover/albumlist",
        component: PHAlbumList
      },
      {
        path: "/discover/userpage",
        component: PHUserHomepage
      },
      {
        path: "/discover/personpage",
        component: PHPersonHomepage
      },
      {
        path: "/discover/artistdetail",
        component: PHArtistDetail
      },
      {
        path: "/discover/mymessage",
        component: PHMyMessage
      },
      {
        path: "/discover/userlevel",
        component: PHUserLevel
      },
      {
        path: "/discover/userSetting",
        component: PHUserSetting
      },
      {
        path: "/discover/singleSong",
        component: PHSingleSong
      }
    ]
  },
  {
    path: "/mine",
    component: PHMine
  },
  {
    path: "/friend",
    component: PHFriend
  },
  {
    path: "/search",
    component: PHSearch
  }
]

export default routes;