import docClient from 'AWS/docClient'

//https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#get-property

function createParamsForGet(email,projectid) {

    // console.log(projectid)
    var params = {
      TableName: process.env.REACT_APP_DYNAMO_TESTTABLE ,
      Key: {
        [process.env.REACT_APP_DYNAMO_TESTTABLE_HASHID ]: email,
        [process.env.REACT_APP_DYNAMO_TESTTABLE_SORTID ]: projectid
      }
    };
  
    // console.log(params)
    return params
  }


  
  //return data and stage attribute
export default async function getAttibutesFromDynamoAll(email,projectId) {

  // console.log(email)
  // console.log(projectId)
  
    const params = createParamsForGet(email,projectId)
  
  
    // console.log(params)
    const returnObj = await docClient.get(params).promise();
    
   // console.log(returnObj.Item.data)
    return returnObj.Item
    
  
    //console.log(returnObj)
    // return result
  }
  