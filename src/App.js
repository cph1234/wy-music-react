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

