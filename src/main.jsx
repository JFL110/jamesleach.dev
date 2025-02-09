import createApp from 'repileux'
import cvPage from './features/cv/mainPage'
import camperPage from './features/camper/camperPage'
import mlDigitPage from './features/ml-digit/mlDigitPage'
import mapModule from './features/map/mapModule'
import './styles.scss'

createApp({
  modules: [mapModule],
  pages: [cvPage, camperPage, mlDigitPage],
})