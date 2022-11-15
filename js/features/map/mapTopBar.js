import React from 'react'
import { connectToOpState } from 'repileux'
import timeSinceString from '../timeSinceString'
import mapPointsState from './mapPointsState'

const topBarText = points => {
    if (points.wasError()) {
        return ":( error - try refreshing)"
    }

    if (points.isInProgress()) {
        return "Loading..."
    }

    if(!points.value?.updatedTime){
        return "Updated some time ago"
    }
 
    return `Updated ${timeSinceString(new Date(points.value.updatedTime))} ago`;
}

const TopBarComponent = ({
    points,
}) => <div className="map-top-bar">
        <div>
            <div className="top-bar-left">
                <h2 className="top-bar-text noselect">Where are they?</h2>
            </div>
            <div className="top-bar-right">
                <h2 className="top-bar-text noselect">{topBarText(points)}</h2>
            </div>
        </div>
    </div>;

export default connectToOpState(mapPointsState, TopBarComponent);