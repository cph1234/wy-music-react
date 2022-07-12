import React, { memo, useEffect, useState } from 'react'
import { SearchWrapper } from './style'
import { Input } from 'antd';
import classnames from 'classnames';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchContentAction, getSearchKeywordAction } from './store/actionCreators'
import { getSearchSuggestAction } from '@/pages/discover/c-pages/recommend/store/actionCreators'
import PHSingleSong from './c-pages/single-song'
import PHSinger from './c-pages/singer'
import PHAlbum from './c-pages/album';
import PHVideo from './c-pages/video';
const { Search } = Input;

const title = ['单曲', '歌手', '专辑', '视频', '歌词', '歌单', '声音主播', '用户']

const search = memo(() => {
  const { searchContent, searchSuggest, searchKeyWord
  } = useSelector(state => ({
    searchContent: state.get('search').get('searchContent'),
    searchSuggest: state.get("recommend").get("searchSuggest"),
    searchKeyWord: state.get('search').get('searchKeyWord')
  }))
  const [titleindex, settitleindex] = useState(0)
  const [showSearch, setshowSearch] = useState(false)
  // const [searchKeyword, setsearchKeyword] = useState('')
  const history = useHistory();//声明
  // console.log(history)
  const searchKey = searchKeyWord || history.location.state.searchKey;//可获取到上面传递的值。
  const titleClick = (index) => {
    settitleindex(index)
    console.log(index);
    switch (index) {
      case 0:
        dispatch(getSearchContentAction(searchKey, 1))
        break;
      case 1:
        dispatch(getSearchContentAction(searchKey, 100))
        break;
      case 2:
        dispatch(getSearchContentAction(searchKey, 10))
        break;
      case 3:
        dispatch(getSearchContentAction(searchKey, 1014))
        break;
      case 4:
        dispatch(getSearchContentAction(searchKey, 1006))
        break;
      case 5:
        dispatch(getSearchContentAction(searchKey, 1000))
        break;
      case 6:
        dispatch(getSearchContentAction(searchKey, 2000))
        break;
      case 7:
        dispatch(getSearchContentAction(searchKey, 1002))
        break;
      default:
        break;
    }
  }
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getSearchContentAction(searchKey))
    // return () => {
    //   dispatch(getSearchContentAction(''))
    // }
  }, [dispatch, searchKey])
  const getSearchContent = (event) => {
    //单曲，歌手，专辑，歌单
    if (event.target.value) {
      dispatch(getSearchSuggestAction(event.target.value))
      setshowSearch(true)
    } else {
      setshowSearch(false)
    }
    // setsearchKeyword(event.target.value)
  }
  let timer;
  const showSearchFocus = () => {
    if (searchKey === '') {
      setshowSearch(false)
    } else {
      setshowSearch(true)
    }
    clearTimeout(timer)
  }
  const toSearch = (e) => {
    // console.log(history);
    if (e.keyCode === 13 && searchKey !== '') {
      dispatch(getSearchKeywordAction(e.target.value))
      dispatch(getSearchContentAction(e.target.value, 1))
      setshowSearch(false)
    }
  }
  const closeSearch = () => {
    //解决冲突问题
    timer = setTimeout(() => {
      setshowSearch(false)
    }, 100)
  }
  return (
    <SearchWrapper className='wrap-v2'>
      <div className='search'>
        <Search className='search-input'
          defaultValue={searchKey}
          style={{ width: 400 }}
          onChange={e => getSearchContent(e)}
          onFocus={e => showSearchFocus()}
          onBlur={e => closeSearch()}
          onKeyUp={e => toSearch(e)}
        />
        {
          showSearch && (
            <div className='search-content'>
              <div className='top'>搜"{searchKey}"相关的用户 &gt;</div>
              <div className='bottom'>
                <div className='song'>
                  <div className='song-left'>
                    <i className='song-icon sprite_icon2'></i>
                    <span className='song-text'>单曲</span>
                  </div>
                  <div className='song-right text-nowrap'>
                    {
                      searchSuggest && searchSuggest.songs && searchSuggest.songs.map(item => {
                        return (
                          <NavLink to={{ pathname: "/discover/singleSong", ids: item.id }} key={item.id}>
                            <div className='song-item-bcc' onClick={e => setshowSearch(false)}>
                              <div className='song-item text-nowrap'>{item.name}-{item.artists[0].name}</div>
                            </div>
                          </NavLink>
                        )
                      })
                    }
                  </div>
                </div>
                <div className='artists'>
                  <div className='artists-left'>
                    <i className='artists-icon sprite_icon2'></i>
                    <span className='artists-text'>歌手</span>
                  </div>
                  <div className='artists-right text-nowrap'>
                    {
                      searchSuggest && searchSuggest.artists && searchSuggest.artists.map(item => {
                        return (
                          <div className='artists-item-bcc' key={item.id}>
                            <div className='artists-item text-nowrap'>{item.name}</div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className='albums'>
                  <div className='albums-left'>
                    <i className='albums-icon sprite_icon2'></i>
                    <span className='albums-text'>专辑</span>
                  </div>
                  <div className='albums-right text-nowrap'>
                    {
                      searchSuggest && searchSuggest.albums && searchSuggest.albums.map(item => {
                        return (
                          <div className='albums-item-bcc' key={item.id}>
                            <div className='albums-item text-nowrap'>{item.name}-{item.artist.name}</div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className='playlists'>
                  <div className='playlists-left'>
                    <i className='playlists-icon sprite_icon2'></i>
                    <span className='playlists-text'>歌手</span>
                  </div>
                  <div className='playlists-right text-nowrap'>
                    {
                      searchSuggest && searchSuggest.playlists && searchSuggest.playlists.map(item => {
                        return (
                          <div className='playlists-item-bcc' key={item.id}>
                            <div className='playlists-item text-nowrap'>{item.name}</div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
      <div className='text'>搜索“{searchKey}”，找到 20 首单曲</div>
      <table className='table'>
        <thead>
          <tr>
            {
              title.map((item, index) => {
                return (
                  <th key={item} onClick={e => titleClick(index)} className={classnames(index === titleindex ? 'title_active' : '')}>{item}</th>
                )
              })
            }
          </tr>
        </thead>
      </table>
      {titleindex === 0 && <PHSingleSong searchContent={searchContent}></PHSingleSong>}
      {titleindex === 1 && <PHSinger searchContent={searchContent}></PHSinger>}
      {titleindex === 2 && <PHAlbum searchContent={searchContent}></PHAlbum>}
      {titleindex === 3 && <PHVideo searchContent={searchContent}></PHVideo>}
    </SearchWrapper >
  )
})

export default search