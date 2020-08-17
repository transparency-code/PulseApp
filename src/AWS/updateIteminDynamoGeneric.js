//https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#update-property
import docClient from 'AWS/docClient'


function createParams(email, projectid, attr,newAttrValue) {
 const params = {
     TableName : process.env.REACT_APP_DYNAMO_TESTTABLE,
     Key: {
        [process.env.REACT_APP_DYNAMO_TESTTABLE_HASHID ]: email,
        [process.env.REACT_APP_DYNAMO_TESTTABLE_SORTID ]: projectid
      },
      UpdateExpression: 'set #a = :x',
      ExpressionAttributeNames: {'#a' : attr},
      ExpressionAttributeValues: {
        ':x' : newAttrValue,
      }     
 }
 return params
}

//Impure functions return in AWS Folder.
//Use setter function in calling function to use them
export default async function updateIteminDynamo(email,projectid,attr,newAttrValue) {
    const params = createParams(email,projectid,attr,newAttrValue)

    //console.log(params)
    const result = await docClient.update(params).promise();

    return result.$response.httpResponse.statusCode
}
