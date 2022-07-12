import React, { memo } from 'react';
import PHTopBanners from './c-cpns/top-banners';
import PHHotRecommend from './c-cpns/hot-recommend'
import PHNewAlbum from './c-cpns/new-album';
import PHRecommendRanking from './c-cpns/recommend-ranking';
import PHLogin from './c-cpns/login';
import PHSinger from './c-cpns/settle-singer';
import PHHotAnchor from './c-cpns/hot-anchor';
import PHLoginSuccess from './c-cpns/login-success'

import { RecommendWrapper, RecommendLeft, Content, RecommendRight } from './style'
import { shallowEqual, useSelector } from 'react-redux';

function PHRecommend(props) {
  const { loginSuccess } = useSelector(state => ({
    loginSuccess: state.get("recommend").get("loginSuccess")
  }), shallowEqual)
  // console.log(loginSuccess)
  return (
    <RecommendWrapper>
      <PHTopBanners></PHTopBanners>
      <Content className="wrap-v2">
        <RecommendLeft>
          <PHHotRecommend></PHHotRecommend>
          <PHNewAlbum></PHNewAlbum>
          <PHRecommendRanking></PHRecommendRanking>
        </RecommendLeft>
        <RecommendRight>
          {loginSuccess && <PHLogin></PHLogin>}
          {!loginSuccess && <PHLoginSuccess></PHLoginSuccess>}
          <PHSinger></PHSinger>
          <PHHotAnchor></PHHotAnchor>
        </RecommendRight>
      </Content>


    </RecommendWrapper>
  )
}

export default memo(PHRecommend)



// import React, { memo } from 'react';
// import { getTopBannersAction } from './store/actionCreators';
// import { connect } from 'react-redux'
// import { useEffect } from 'react';

// function PHRecommend(props) {
//   const { getBanners, topBanners } = props;

//   useEffect(() => {
//     getBanners();
//   }, [getBanners])

//   return (
//     <div>
//       <h2>PHRecommend</h2>
//       <h2>length:{topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannersAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(PHRecommend))
