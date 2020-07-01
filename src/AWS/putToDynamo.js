import docClient from 'AWS/docClient'


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

export  async function putToDynamo(params) {
    const result = await docClient.put(params).promise();
    return result.$response.httpResponse.statusCode;
  }