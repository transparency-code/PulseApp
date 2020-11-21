import docClient from 'AWS/docClient'

//create parms that retrives nly an attribute
  function createParamsForGet(email,projectid,attributeArray,) {

    var params = {
      TableName: process.env.REACT_APP_DYNAMO_TESTTABLE ,
      Key: {
        [process.env.REACT_APP_DYNAMO_TESTTABLE_HASHID ]: email,
        [process.env.REACT_APP_DYNAMO_TESTTABLE_SORTID ]: projectid
      },
      AttributesToGet: attributeArray,
    };
  
    // console.log(params)
    return params
  }

export default async function getAttibutesFromDynamoSpecific(email,projectId,attributeArray) {

  
      const params = createParamsForGet(email,projectId,attributeArray)

      // console.log(params)
     
      const returnObj = await docClient.get(params).promise();

      // console.log(returnObj)
      
      return returnObj.Item
      

    }
    