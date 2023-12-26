/*global process*/

const configs = {
    development: {
        digitRecognitionApiBase: "http://localhost:8081"
    },
    staging: {
        digitRecognitionApiBase: "https://9nrda6g9s8.execute-api.eu-west-2.amazonaws.com/main/production/8081"
    },
    production: {
        digitRecognitionApiBase: "https://9nrda6g9s8.execute-api.eu-west-2.amazonaws.com/main/production/8081"
    }
}

const resolvedConfig = configs[process.env.NODE_ENV] ?? configs.development;

export default resolvedConfig;