import AWS from "./aws_config";

//https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html
const s3Object = new AWS.S3({apiVersion: '2006-03-01'});

export default s3Object