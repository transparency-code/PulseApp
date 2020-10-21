

import docClient from 'AWS/docClient'


function createParams(email, projectid, attr,newAttrValue,addToList) {

  //https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.UpdateExpressions.html
  const updateExpression = addToList ? 'set #a = list_append(#a,:x)' : 'set #a = :x'

 const params = {
     TableName : process.env.REACT_APP_DYNAMO_TESTTABLE,
     Key: {
        [process.env.REACT_APP_DYNAMO_TESTTABLE_HASHID ]: email,
        [process.env.REACT_APP_DYNAMO_TESTTABLE_SORTID ]: projectid
      },
      UpdateExpression: updateExpression,
      ExpressionAttributeNames: {'#a' : attr},
      ExpressionAttributeValues: {
        ':x' : newAttrValue,
      }     
 }
 return params
}

//Impure functions return in AWS Folder.
//Use setter function in calling function to use them
/**
 * 
 * @param {*} email 
 * @param {*} projectid 
 * @param {*} attr 
 * @param {*} newAttrValue 
 * @param {*} addToList this should be true if a attribute contains a list to be appended
 */
export default async function updateIteminDynamo(email,projectid,attr,newAttrValue, addToList = false) {
    const params = createParams(email,projectid,attr,newAttrValue,addToList)

    //console.log(params)
    const result = await docClient.update(params).promise();

    return result.$response.httpResponse.statusCode
}
