import MainPage from './features/mainPage'
import MapPage from './features/map/mapPage'

export default [
  {
    id: "home",
    path: "/",
    component: MainPage.page
  },
  {
    id: "map",
    path: "/where-are-they",
    component: MapPage.page
  },
  // {
  //   id: "404",
  //   path: "404",
  //   component: ErrorPage.page404,
  // }
];