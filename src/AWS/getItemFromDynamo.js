import AWS from "./aws_config";

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
  
export async function getItemFromDynamo(email,projectId,setData) {

  // console.log(email)
  // console.log(projectId)
  
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
  