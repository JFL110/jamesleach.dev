import { createNetOpState, createEndpoint } from 'repileux'
import mergeByKey from 'array-merge-by-key'
const readPoints = response => {

    if (!response?.points || !Array.isArray(response.points)) {
        console.error("Invalid points ", response)
        return;
    }

    const points = response.points.map(i => ({
        id: i.l + "-" + i.g,
        lat: i.l,
        long: i.g,
        isPhoto: false,
        isMostRecent: false
    }));

    if (response.mostRecentPoint) {
        points.push({
            id: "r-" + response.mostRecentPoint.l + "-" + response.mostRecentPoint.g,
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

    return mergeByKey('id', points);
}

export default createNetOpState({
    name: 'points',
    endpoint: createEndpoint({
        uri: "https://jfl110-my-location.s3.eu-west-2.amazonaws.com/live.my-location-points.json",
    }),
    persistInLocalStorage: true,
    persistenceVersion : 6,
    persistenceExpirationMs: 60 * 60 * 1000,
    responseBodyTransformations: readPoints,
    retryDelayMs: 500,
    maxRetryCount: 4,
    isIdempotent: true,
})