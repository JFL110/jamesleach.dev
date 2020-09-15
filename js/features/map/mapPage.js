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
    paths: '/where-are-they',
    component: <MapPage />,
    meta: {
        title: "Where are they?",
        description: 'A location tracking map showing where we\'ve been and photos.',
    }
})