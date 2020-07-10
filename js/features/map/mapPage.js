import React from 'react'
import Loading from '../loading'
import TopBar from './mapTopBar'
import MapLazy from './mapLazy'

const MapPage = () => {
    return <main >
        <TopBar />
        <div className="map-container">
            <MapLazy loadingComponent={<Loading className="maxi-map" />} />
        </div>
    </main >
};

export default {
    page: <MapPage />
}