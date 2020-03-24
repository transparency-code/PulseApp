import AWS from "aws-sdk";

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'ap-southeast-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-southeast-2:b645a974-94c8-4bdf-8dab-f3faf10a1009',
});

export default AWS
