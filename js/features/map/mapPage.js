import React, { Suspense } from 'react'
import Loading from '../loading'
import TopBar from './mapTopBar'
const Map = React.lazy(() => import('./map'));

const MapPage = () => {
    return <main >
        <TopBar />
        <Suspense fallback={<Loading className="maxi-map" />}>
            <Map />
        </Suspense>
    </main >
};

export default {
    page: <MapPage />
}