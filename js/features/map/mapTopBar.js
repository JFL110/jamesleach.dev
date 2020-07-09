import React from 'react'
import Frame from '../frame'
import timeSinceString from '../timeSinceString'
import mapSlice from './mapSlice'

const TopBarComponent = ({
    mainLocationsFetched,
    fetchError,
    setNewCentre,
    points
}) => {
    const pointsLoaded = mainLocationsFetched;
    const hasFetchError = fetchError || (mainLocationsFetched && points.length == 0);
    const _mostRecentPoint = points.find(p => p.isMostRecent);

    const centreMap = () =>
        setNewCentre({ lat: _mostRecentPoint.lat, lng: _mostRecentPoint.long, default: false })

    const summary = () => <div onClick={centreMap} className="clickToCentreButton">
        <h2 className="top-bar-text">
            {"Updated " + timeSinceString(new Date(_mostRecentPoint.time)) + " ago"}
        </h2>
    </div>;

    return <div className="map-top-bar">
        <div>
            <div className="top-bar-left">
                <h2 className="top-bar-text">Where are they?</h2>
            </div>
            <div className="top-bar-right">
                <h2 className="top-bar-text">{hasFetchError ? ":( error - try refreshing)" : (pointsLoaded ? summary() : "Loading...")}</h2>
            </div>
        </div>
    </div>;
}

export default Frame.connectWithSlice(mapSlice, TopBarComponent);