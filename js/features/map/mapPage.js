import React from 'react'
import Loading from '../loading'
import TopBar from './mapTopBar'
import MapLazy from './mapLazy'

const MapPage = () => {
    return <main >
        <TopBar />
        <MapLazy loadingComponent={<Loading className="maxi-map" />} />
    </main >
};

export default {
    page: <MapPage />
}