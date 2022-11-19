import React from 'react'
import { createPage } from 'repileux'
import Loading from '../loading'
import TopBar from './mapTopBar'
import MapLazy from './mapLazy'

import './map.scss'

const MapPage = () => <main >
    <TopBar />
    <div className="map-container">
        <MapLazy loadingComponent={<Loading className="maxi-map" />} />
    </div>
</main >

export default createPage({
    paths: ['/travel-map', '/where-are-they'],
    component: <MapPage />,
    meta: {
        title: "Travel History",
        description: 'An anonymised location tracking map showing where we\'ve been with photos.',
    }
})