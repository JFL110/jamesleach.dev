import MainPage from './features/mainPage'
import MapPage from './features/map/mapPage'

const jamesLeachCv = "James Leach - CV";

export default [
  {
    id: "home",
    path: "/",
    component: MainPage.page,
    pageTitle : jamesLeachCv
  },
  {
    id: "cv",
    path: "/cv",
    component: MainPage.page,
    pageTitle : jamesLeachCv
  },
  {
    id: "cv-no-map",
    path: "/cv-no-map",
    component: MainPage.pageNoMap,
    pageTitle : jamesLeachCv
  },
  {
    id: "map",
    path: "/where-are-they",
    component: MapPage.page,
    pageTitle : "Where are they?"
  },
  {
    id: "404",
    path: "404",
    component: MainPage.page,
    pageTitle : jamesLeachCv
  }
];