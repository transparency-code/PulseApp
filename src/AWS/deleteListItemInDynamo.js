import docClient from 'AWS/docClient'

function createParams(email, projectid, attr , index) {

    ////https://stackoverflow.com/questions/28258682/add-or-remove-an-entry-from-a-list-type-attribute-in-a-dynamodb-table-item
   //https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.Js.03.html#GettingStarted.Js.03.03
    // console.log(attr)
    // console.log(index)
  
    const params = {
        TableName : process.env.REACT_APP_DYNAMO_TESTTABLE,
        Key: {
           [process.env.REACT_APP_DYNAMO_TESTTABLE_HASHID ]: email,
           [process.env.REACT_APP_DYNAMO_TESTTABLE_SORTID ]: projectid
         },
         UpdateExpression: `Remove ${attr}[${index}] `
         
    }
    return params
   }




export default async function deleteListItemInDynamo(email,projectid,attr ,index) {

  // console.log(email)
  // console.log(projectid)
  // console.log(index)

  //console.log(addToList)
  const params = createParams(email,projectid,attr ,index)

  console.log(params)
  const result = await docClient.update(params).promise();
  console.log(result)
  return result.$response.httpResponse.statusCode
  
}

