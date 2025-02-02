/*global process*/

const configs = {
    development: {
        digitRecognitionApiBase: "http://localhost:8081"
    },
    staging: {
        digitRecognitionApiBase: "/api/ml-digit"
    },
    production: {
        digitRecognitionApiBase: "/api/ml-digit"
    }
}

const resolvedConfig = configs[process.env.NODE_ENV] ?? configs.development;

export default resolvedConfig;