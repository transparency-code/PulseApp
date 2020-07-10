import docClient from 'AWS/docClient'

export function CreateParamsForRequestTypeQuery(requestStatus,limit) {
    const params = {
      TableName: process.env.REACT_APP_DYNAMO_TESTTABLE,
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


  export function CreateParamsForUserEmailQuery(user,limit) {

    const params = {
      TableName: process.env.REACT_APP_DYNAMO_TESTTABLE,
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
  

export async function queryFromDynamo(params) {

    const returnObj = await docClient.query(params).promise();
   
    //console.log(returnObj)
  
    const result ={
      statusCode : returnObj.$response.httpResponse.statusCode,
      items : returnObj.Items,
      count : returnObj.Count
    }
    return result
  }
  