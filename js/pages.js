import React from 'react'

import MainPage from './features/cv/mainPage'
import MapPage from './features/map/mapPage'
import CamperPageLazy from './features/camper/camperPageLazy'

const jamesLeachCv = "James Leach - Full Stack Developer CV";
const cvDesc = "Hi! I am a full stack developer and I've living and breathing code for over 17 years. Take a look at my online CV.";
export default [
  {
    id: "home",
    path: "/",
    component: MainPage.page,
    pageTitle: jamesLeachCv,
    meta : {
      description: cvDesc
    }
  },
  {
    id: "cv",
    path: "/cv",
    component: MainPage.page,
    pageTitle: jamesLeachCv,
    meta : {
      description: cvDesc
    }
  },
  {
    id: "cv-no-map",
    path: "/cv-no-map",
    component: MainPage.pageNoMap,
    pageTitle: jamesLeachCv,
    meta : {
      description: cvDesc
    }
  },
  {
    id: "map",
    path: "/where-are-they",
    component: MapPage.page,
    pageTitle: "Where are they?",
    meta : {
      description: 'A location tracking map showing where we\'ve been and photos.',
    }
  },
  {
    id: "camper",
    path: "/camper",
    component: < CamperPageLazy />,
    pageTitle: "James Leach - Building a Camper",
    meta : {
      description: 'Build photos from our offroad camper project - converting a Toyota Hilux into a 4x4 motorhome.',
    }
  },
  {
    id: "404",
    path: "404",
    component: MainPage.page,
    pageTitle: jamesLeachCv,
    meta : {
      description: "404 - page not found."
    }
  }
];