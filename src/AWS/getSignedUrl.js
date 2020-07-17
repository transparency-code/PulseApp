import s3 from './s3Object.js'

//https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getSignedUrlPromise-property




export default function getSignedUrl(key,setter) {
  const params = {Bucket: process.env.REACT_APP_BUCKETNAME, Key:key, Expires: 60};
  s3.getSignedUrlPromise('getObject', params).then( (url) => { setter(url)}) 

}

