import AWS from "./aws_config";

//https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-table-read-write.html
//https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#put-property

export function CreateParamsForInitialRequest(tableName, hashId, sortId, requeststatus, data) {

  // console.log(tableName)
  // console.log(hashId)
  // console.log(sortID)
  // console.log(info)
  //console.log(index)


  const params = {
    TableName: tableName,
    Item: { hashId, sortId, requeststatus  ,  data },
  };

  //console.log(params);
  return params;
}

//https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#query-property
//https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html
//https://stackoverflow.com/questions/33847477/querying-a-global-secondary-index-in-dynamodb-local

export function CreateParamsForRequestTypeQuery(tableName,requestStatus,limit) {
  const params = {
    TableName: tableName,
    IndexName : 'requeststatus-index',
    KeyConditionExpression: "requeststatus = :indexkey",
    ExpressionAttributeValues: {
      ":indexkey": requestStatus,
    },
    Limit : limit
  };
// console.log(params);
  return params;
}

export function CreateParamsForUserEmailQuery(tableName,user,limit) {

  const params = {
    TableName: tableName,
    //IndexName : 'requeststatus-index',
    KeyConditionExpression: "hashId = :hkey",
    ExpressionAttributeValues: {
      ":hkey": user,
    },
    Limit : limit
  };
 //console.log(params);
  return params;
}

//https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album-full.html
function getManagedUploadFileObject(file, fileKey) {
  var uploadObject = new AWS.S3.ManagedUpload({
    params: {
      Bucket: process.env.REACT_APP_BUCKETNAME,
      Key: fileKey,
      Body: file,
    },
  });

  return uploadObject;
}

//https://stackoverflow.com/questions/44948264/using-getitem-with-primary-and-sort-keys
function createParamsForGet(email,projectid) {

  // console.log(projectid)
  var params = {
    TableName: process.env.REACT_APP_DYNAMO_TESTTABLE ,
    Key: {
      [process.env.REACT_APP_DYNAMO_TESTTABLE_PRIMARYKEY ]: email,
      [process.env.REACT_APP_DYNAMO_TESTTABLE_SORTID ]: projectid
    }
  };

  // console.log(params)
  return params
}


export async function putToDynamo(params) {
  var docClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: "2012-08-10",
    convertEmptyValues: true,
  });

 
  const result = await docClient.put(params).promise();
  return result.$response.httpResponse.statusCode;
}

export async function QueryFromDynamo(params) {
  var docClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: "2012-08-10",
    convertEmptyValues: true,
  });
  const returnObj = await docClient.query(params).promise();
 
  //console.log(returnObj)

  const result ={
    statusCode : returnObj.$response.httpResponse.statusCode,
    items : returnObj.Items,
    count : returnObj.Count
  }
  return result
}


export async function uploadUserFilesToS3(projectId, fileArray) {
  // console.log(projectId)
  // console.log(fileArray)

  let uploadedFileKeys = [];

  for (const file of fileArray) {
    const fileKey = projectId + "/useruploads/" + file.name;
    var uploadResult = await getManagedUploadFileObject(
      file,
      fileKey
    ).promise();
    //console.log(uploadResult);

    //https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa
    //Ad array non mutating
    //Array.prototype.concat does indeed return a new array,
    uploadedFileKeys = uploadedFileKeys.concat(uploadResult.Key);
  }

  return uploadedFileKeys;
}

export async function getItemFromDynamo(email,projectId,setData) {

  const params = createParamsForGet(email,projectId)

  var docClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: "2012-08-10",
  });

  // console.log(params)
  const returnObj = await docClient.get(params).promise();
  
  setData(returnObj.Item.data)

  //console.log(returnObj)
  // return result
}
