import React from 'react'
import { connectWithSlice, connectToOpState } from 'repileux'
import timeSinceString from '../timeSinceString'
import mapSlice from './mapSlice'
import mapPointsState from './mapPointsState'

const TopBarComponent = ({
    points,
    setNewCentre,
}) => {
    const pointsLoaded = !points.isInProgress();
    const hasFetchError = points.wasError() || (pointsLoaded && points.value?.length == 0);
    const _mostRecentPoint = points.value?.find(p => p.isMostRecent);

    const centreMap = () => setNewCentre({ lat: _mostRecentPoint.lat, lng: _mostRecentPoint.long, default: false })

    const summary = () => <div onClick={centreMap} className="clickToCentreButton">
        <h2 className="top-bar-text">
            {"Updated " + (_mostRecentPoint ? (timeSinceString(new Date(_mostRecentPoint.time)) + " ago") : "Loading...")}
        </h2>
    </div>;

    return <div className="map-top-bar">
        <div>
            <div className="top-bar-left">
                <h2 className="top-bar-text noselect">Where are they?</h2>
            </div>
            <div className="top-bar-right">
                <h2 className="top-bar-text noselect">{hasFetchError ? ":( error - try refreshing)" : (pointsLoaded ? summary() : "Loading...")}</h2>
            </div>
        </div>
    </div>;
}

export default connectToOpState(
    mapPointsState
    , connectWithSlice(mapSlice, TopBarComponent));