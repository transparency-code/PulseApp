import docClient from 'AWS/docClient'


  export function CreateParamsForInitialRequest(hashId, sortId, index, data) {

  
    // console.log(hashId)
    // console.log(sortId)
    // console.log(data)
    // console.log(index)
  
  
    const params = {
      TableName: [process.env.REACT_APP_DYNAMO_TESTTABLE],
      Item: { 
        [process.env.REACT_APP_DYNAMO_TESTTABLE_HASHID] : hashId,
        [process.env.REACT_APP_DYNAMO_TESTTABLE_SORTID]  : sortId,
        [process.env.REACT_APP_DYNAMO_TESTTABLE_INDEX]: index , 
         data
       }
    };
  
    //console.log(params);
    return params;
  }

export  async function putToDynamo(hashId, sortId, index, data) {
    const params = CreateParamsForInitialRequest(hashId, sortId, index, data)
    const result = await docClient.put(params).promise();
    return result.$response.httpResponse.statusCode;
  }