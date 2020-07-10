import docClient from 'AWS/docClient'

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
  
export default async function getItemFromDynamo(email,projectId,setData) {

  // console.log(email)
  // console.log(projectId)
  
    const params = createParamsForGet(email,projectId)
  
  
    // console.log(params)
    const returnObj = await docClient.get(params).promise();
    
    return returnObj.Item.data
    
  
    //console.log(returnObj)
    // return result
  }
  