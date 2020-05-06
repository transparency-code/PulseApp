import AWS from "./aws_config";

//https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-table-read-write.html
//https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#putItem-property

export function CreateParams(tableName, hashId, sortID, info) {
  const params = {
    TableName: tableName,
    Item: { ProjectId: hashId, Email: sortID, ...info },
  };

  return params;
}

export async function putToDynamo(params) {
  var docClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: "2012-08-10",
    convertEmptyValues: true,
  });
  const result = await docClient.put(params).promise();
  return result.$response.httpResponse.statusCode;
}

export async function uploadUserFilesToS3(projectId, fileArray) {

    // console.log(projectId)
    // console.log(fileArray)

  let uploadedFileKeys = []
    
  for (const file of fileArray) {
    const fileKey = projectId + "/useruploads/" + file.name;
    var uploadResult = await getManagedUploadFileObject(file,fileKey).promise();
    //console.log(uploadResult);

    //https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa
    //Ad array non mutating
    //Array.prototype.concat does indeed return a new array, 
    uploadedFileKeys = uploadedFileKeys.concat(uploadResult.Key)
  }

  return uploadedFileKeys
}

//https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album-full.html
function getManagedUploadFileObject(file,fileKey) {
  var uploadObject = new AWS.S3.ManagedUpload({
    params: {
      Bucket: process.env.REACT_APP_BUCKETNAME,
      Key: fileKey,
      Body: file,
    },
  });

  return uploadObject;
}
