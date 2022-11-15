import { createNetOpState, createEndpoint } from 'repileux'

const baseUri = 'https://o4zjbqbsp5.execute-api.eu-west-2.amazonaws.com/main/staging/8081'

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
        uri: `${baseUri}/classify-digit`,
    }),
    ignoreConcurrent: true, 
    persistInLocalStorage: false,
    retryDelayMs: 500,
    maxRetryCount: 1,
    isIdempotent: true,
})