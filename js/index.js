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