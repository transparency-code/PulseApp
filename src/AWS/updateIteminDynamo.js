// //https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#update-property
// import docClient from 'AWS/docClient'


// function createParams(email, projectid, newProcessState) {
//  const params = {
//      TableName : process.env.REACT_APP_DYNAMO_TESTTABLE,
//      Key: {
//         [process.env.REACT_APP_DYNAMO_TESTTABLE_HASHID ]: email,
//         [process.env.REACT_APP_DYNAMO_TESTTABLE_SORTID ]: projectid
//       },
//       UpdateExpression: 'set #a = :x',
//       ExpressionAttributeNames: {'#a' : process.env.REACT_APP_DYNAMO_TESTTABLE_INDEX},
//       ExpressionAttributeValues: {
//         ':x' : newProcessState,
//       }     
//  }
//  return params
// }

// export default async function updateIteminDynamo(email,projectid,newProcessStage) {
//     const params = createParams(email,projectid,newProcessStage)
//     const result = await docClient.update(params).promise();

//     return result.$response.httpResponse.statusCode
// }
