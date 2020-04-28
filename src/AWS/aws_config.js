import AWS from "aws-sdk";

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'ap-southeast-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.REACT_APP_COGNITO_IDENTITYPOOL_ID,
});



export default AWS
