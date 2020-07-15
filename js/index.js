/*global setLoaded, dec, getLoaded*/

import React from 'react'
import { render } from 'react-dom'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './app'
import appSlice from './features/appSlice'
import rootReducer from './rootReducer'
import pageChangeMiddleware from './features/pageChangeMiddleware'
import { getStore, setStore } from './features/globalStore'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import mapLoadMiddleware from './features/map/mapLoadMiddleware'
import pages from './pages'
import './styles.scss'

// Config react router
export const history = createBrowserHistory({});

// Queue rendering until after all resources (css) have loaded, or after one second
setLoaded(() => {
  setLoaded(null);

  setStore(configureStore({
    reducer: rootReducer(history),
    middleware: [/*LoggingMiddleware,*/ routerMiddleware(history), pageChangeMiddleware(pages), mapLoadMiddleware, ...getDefaultMiddleware()],
  }));

  getStore().dispatch(appSlice.actions.onPreFirstRender());

  render(
    <Provider store={getStore()}>
      <App history={history} />
    </Provider>,
    document.getElementById('root')
  );
});

// Decrement the resource count and set a trigger to trigger the root func even if resources don't load
dec();
setTimeout(function () {
  let currentLoaded = getLoaded();
  if (currentLoaded != null) {
    // Didn't trigger - trigger it now
    setLoaded(null);
    console.log("Warning - Delayed load");
    currentLoaded();
  }
}, 1000);
