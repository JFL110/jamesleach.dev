import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import appSlice from './features/appSlice'
import  mapSlice  from './features/map/mapSlice'

export default (history) => combineReducers({
  router: connectRouter(history), // React router
  [appSlice.name] : appSlice.reducer, // App pre-render,
  [mapSlice.name] : mapSlice.reducer // Map
})