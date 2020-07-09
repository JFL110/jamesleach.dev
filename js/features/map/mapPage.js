import React from 'react'

import TopBar from './mapTopBar'
import Map from './map'

const MapPage = () => {
    return <main >
        <TopBar />
        <Map />
    </main >
};

export default {
    page: <MapPage />
}