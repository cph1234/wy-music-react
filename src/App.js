import React, { memo, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import routes from './router'

// import store from './store'
import PHAppHeader from './components/app-header';
import PHAppFooter from './components/app-footer';
import PHPlayer from './pages/player/tab-bar'
import { useEffect } from 'react';

import { errMessageAction, loginSuccessAction, getUserInformationAction } from "./pages/discover/c-pages/recommend/store/actionCreators"
import storageUtils from '@/utils/storage'
// import PHAppHeaderTest from './components/app-header/index-test'
// import PHAppFooterTest from './components/app-footer/index-test'

// dispatch(errMessageAction(("")))
// dispatch(loginSuccess(false))
// dispatch(getUserInformationAction(res.account.id))

export default memo(function App() {
  const dispatch = useDispatch();
  localStorage.setItem('cookie', 'MUSIC_A_T=1489648642795; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/eapi/feedback; HTTPOnly;MUSIC_A_T=1489648642795; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/eapi/clientlog; HTTPOnly;MUSIC_R_T=1489648767873; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/weapi/feedback; HTTPOnly;MUSIC_R_T=1489648767873; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/api/clientlog; HTTPOnly;MUSIC_A_T=1489648642795; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/wapi/feedback; HTTPOnly;MUSIC_A_T=1489648642795; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/neapi/feedback; HTTPOnly;MUSIC_A_T=1489648642795; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/openapi/clientlog; HTTPOnly;MUSIC_R_T=1489648767873; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/neapi/clientlog; HTTPOnly;MUSIC_R_T=1489648767873; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/openapi/clientlog; HTTPOnly;MUSIC_A_T=1489648642795; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/weapi/clientlog; HTTPOnly;MUSIC_R_T=1489648767873; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/api/feedback; HTTPOnly;MUSIC_SNS=; Max-Age=0; Expires=Thu, 22 Sep 2022 07:33:11 GMT; Path=/;MUSIC_R_T=1489648767873; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/wapi/feedback; HTTPOnly;MUSIC_R_T=1489648767873; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/neapi/feedback; HTTPOnly;MUSIC_R_T=1489648767873; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/weapi/clientlog; HTTPOnly;MUSIC_R_T=1489648767873; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/wapi/clientlog; HTTPOnly;MUSIC_U=5cb093693d9ec1e614777390454928188e7bd434e1a13d75106241aae209fcb1993166e004087dd3ee7f09150b4622d0c727473689584cd5af3151c9ba48dae1bcec9c6e12bb5027a0d2166338885bd7; Max-Age=15552000; Expires=Tue, 21 Mar 2023 07:33:11 GMT; Path=/; HTTPOnly;MUSIC_A_T=1489648642795; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/weapi/feedback; HTTPOnly;MUSIC_A_T=1489648642795; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/neapi/clientlog; HTTPOnly;MUSIC_A_T=1489648642795; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/wapi/clientlog; HTTPOnly;MUSIC_R_T=1489648767873; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/eapi/feedback; HTTPOnly;MUSIC_A_T=1489648642795; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/api/feedback; HTTPOnly;MUSIC_R_T=1489648767873; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/eapi/clientlog; HTTPOnly;MUSIC_A_T=1489648642795; Max-Age=2147483647; Expires=Tue, 10 Oct 2090 10:47:18 GMT; Path=/api/clientlog; HTTPOnly;__csrf=1985e006702d6ef008bc747e9fe1a880; Max-Age=1296010; Expires=Fri, 07 Oct 2022 07:33:21 GMT; Path=/;')
  const user = storageUtils.getUser();

  useEffect(() => {
    if (user.account !== undefined) {
      dispatch(errMessageAction(("")))
      dispatch(loginSuccessAction(false))
      dispatch(getUserInformationAction(user.account.id))
    }
  }, [dispatch, user])
  return (

    <HashRouter>
      {/* <PHAppHeaderTest /> */}
      <PHAppHeader />
      <Suspense fallback={<div>isLoading</div>}>
        {renderRoutes(routes)}
      </Suspense>
      <PHAppFooter />
      {/* <PHAppFooterTest /> */}
      <PHPlayer></PHPlayer>
    </HashRouter>

  )
})

