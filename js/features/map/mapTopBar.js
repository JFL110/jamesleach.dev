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

    if (!points.value?.updatedTime) {
        return "Updated some time ago"
    }

    return `Updated ${timeSinceString(new Date(points.value.updatedTime * 1000))} ago`;
}

const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const VisitedSquaresLink = ({ points }) => {
    const globalSquares = points?.value?.globalSquares;
    if (globalSquares == null) {
        return <></>
    }
    return <>
        <h2 className="top-bar-text top-bar-text-right noselect">
            {numberWithCommas(globalSquares.totalVisitedSquares)}/{numberWithCommas(globalSquares.totalCountrySquares)}
        </h2>
        <h4 className="top-bar-subtitle top-bar-subtitle-right noselect">
            Squares Visited
        </h4>
    </>
}

const TopBarComponent = ({
    points,
}) => <div className="map-top-bar">
        <div>
            <div className="top-bar-left">
                <h2 className="top-bar-text noselect">Travel History</h2>
                <h4 className="top-bar-subtitle noselect">
                    {topBarText(points)}
                </h4>
            </div>
            <VisitedSquaresLink points={points} />
        </div>
    </div>;

export default connectToOpState(mapPointsState, TopBarComponent);