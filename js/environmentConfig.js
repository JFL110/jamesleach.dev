/*global process*/

const configs = {
    development: {
        digitRecognitionApiBase: "http://localhost:8081"
    },
    staging: {
        digitRecognitionApiBase: "https://o4zjbqbsp5.execute-api.eu-west-2.amazonaws.com/main/staging/8081"
    },
    production: {
        digitRecognitionApiBase: "https://o4zjbqbsp5.execute-api.eu-west-2.amazonaws.com/main/production/8091"
    }
}

const resolvedConfig = configs[process.env.NODE_ENV] ?? configs.development;

export default resolvedConfig;