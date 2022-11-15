import { createNetOpState, createEndpoint } from 'repileux'

const mapPointsState = createNetOpState({
    name: 'points',
    endpoint: createEndpoint({
        uri: "https://jamesleach-dev-location.s3.eu-west-2.amazonaws.com/location-squares.json",
    }),
    persistInLocalStorage: true,
    persistenceVersion: 6,
    persistenceExpirationMs: 60 * 60 * 1000,
    retryDelayMs: 500,
    maxRetryCount: 4,
    isIdempotent: true,
})

export default mapPointsState;