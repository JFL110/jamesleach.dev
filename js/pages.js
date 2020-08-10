import React from 'react'

import MainPage from './features/cv/mainPage'
import MapPage from './features/map/mapPage'
import CamperPageLazy from './features/camper/camperPageLazy'

const jamesLeachCv = "James Leach - Full Stack Developer CV";

export default [
  {
    id: "home",
    path: "/",
    component: MainPage.page,
    pageTitle: jamesLeachCv
  },
  {
    id: "cv",
    path: "/cv",
    component: MainPage.page,
    pageTitle: jamesLeachCv
  },
  {
    id: "cv-no-map",
    path: "/cv-no-map",
    component: MainPage.pageNoMap,
    pageTitle: jamesLeachCv
  },
  {
    id: "map",
    path: "/where-are-they",
    component: MapPage.page,
    pageTitle: "Where are they?"
  },
  {
    id: "camper",
    path: "/camper",
    component: < CamperPageLazy />,
    pageTitle: "Building a Camper"
  },
  {
    id: "404",
    path: "404",
    component: MainPage.page,
    pageTitle: jamesLeachCv
  }
];