
import mapSlice from './mapSlice'

const jsonFileAddr = "https://jfl110-my-location.s3.eu-west-2.amazonaws.com/my-location-points.json";

// Copied from https://dev.to/ycmjason/javascript-fetch-retry-upon-failure-3p6g
const fetch_retry = async (url, options, n) => {
    try {
        return await fetch(url, options)
    } catch (err) {
        if (n === 1) throw err;
        return await fetch_retry(url, options, n - 1);
    }
};

export default ({ dispatch }) => next => action => {

    if (action.type != "app/onPreFirstRender") {
        next(action);
        return;
    }

    // Initial point load
    fetch_retry(jsonFileAddr, { method: 'GET' }, 4)
        .then(response => response.json())
        .then(response => {
            if (response?.points == null || !Array.isArray(response.points)) {
                console.log("Invalid points ", response)
                return;
            }
            var points = response.points.map(i => ({
                id: i.l + "-" + i.g,
                lat: i.l,
                long: i.g,
                isPhoto: false,
                isMostRecent: false
            }));
            if (response.mostRecentPoint) {
                points.push({
                    id: response.mostRecentPoint.l + "-" + response.mostRecentPoint.g,
                    lat: response.mostRecentPoint.l,
                    long: response.mostRecentPoint.g,
                    isPhoto: false,
                    time: response.mostRecentPointTime,
                    isMostRecent: true
                });
            }

            if (response.photos && Array.isArray(response.photos)) {
                var photoPointId = 0;
                let photoPoints = response.photos
                    .sort((a, b) => b.time - a.time)
                    .map(i => ({
                        id: i.url,
                        lat: i.point.l,
                        long: i.point.g,
                        time: i.time,
                        url: i.url,
                        isPhoto: true,
                        photoPointId: photoPointId++,
                        isMostRecent: false
                    }));
                points.push(...photoPoints);
            }

            dispatch(mapSlice.actions.mergePoints(points));
            dispatch(mapSlice.actions.setFetchError(false));
            dispatch(mapSlice.actions.setMainLocationsFetched(true));
        })
        .catch(err => { dispatch(mapSlice.actions.setFetchError(true)); console.log(err); });

    next(action);
}
