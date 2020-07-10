import s3 from 'AWS/s3Object'
//https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listObjectsV2-property

function createParams(prefix) {

// console.log(prefix)
//https://stackoverflow.com/questions/50366708/get-list-of-objects-located-under-a-specific-s3-folder
    const params = {
        Bucket : process.env.REACT_APP_BUCKETNAME,
        //Delimiter: '/',
        Prefix : prefix,
        //MaxKeys : 10
    }

    return params
}

export default async function getFileListFromS3(prefix) {

  //   console.log(prefix)
    const params = createParams(prefix)
  //  console.log(params)

  
    const data = await s3.listObjectsV2(params).promise();

    return data.Contents

}