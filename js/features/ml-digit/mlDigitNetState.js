import { createNetOpState, createEndpoint } from 'repileux'
import environmentConfig from '../../environmentConfig'

/**
 * POST to the /classify-digit endpoint, passing pixel data and
 * getting back a list of probabilities. 
 */
export default createNetOpState({
    name: 'mlDigitData',
    endpoint: createEndpoint({
        method: 'POST',
        headers: () => ({
            'Content-Type': 'application/json'
        }),
        uri: `${environmentConfig.digitRecognitionApiBase}/classify-digit`,
    }),
    ignoreConcurrent: true,
    persistInLocalStorage: false,
    retryDelayMs: 500,
    maxRetryCount: 1,
    isIdempotent: true,
})