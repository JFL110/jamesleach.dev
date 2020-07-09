import MainPage from './features/mainPage'
import MapPage from './features/map/mapPage'

export default [
  {
    id: "home",
    path: "/",
    component: MainPage.page
  },
  {
    id: "cv",
    path: "/cv",
    component: MainPage.page
  },
  {
    id: "cv-no-map",
    path: "/cv-no-map",
    component: MainPage.pageNoMap
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