import AWS from './aws_config'

//https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-table-read-write.html
//https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#putItem-property

//pureFunction
async function  ddbdoc_put(tableName, hashId, sortID , info) {
  // Create DynamoDB document client
  var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10",convertEmptyValues: true });


  var params = {
    TableName: tableName,
    Item : { ProjectId : hashId,
      Email : sortID,
      ...info
     },

  };

  //console.log(params)

  //https://github.com/aws/aws-sdk-js/issues/833
  //convertEmptyValues does NOT solve the problem of dynamodb's inability to store empty string
  const result = await docClient.put(params).promise()
  console.log(result)
}

//impure Function
export default async function dynamoAddProject(projectId,email,data) {

  // Create DynamoDB document client
  //https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html
  //The document client affords developers the use of native JavaScript types instead of AttributeValues to simplify the JavaScript development experience with Amazon DynamoDB
 

   // console.log(tableID)
    console.log(email)
    console.log(data)



  //console.log(params)

  AWS.config.credentials.get(function(){
    // Credentials will be available when this function is called.
    //const credentials = AWS.config.credentials
    //tableid is hashID, email is sort id
    ddbdoc_put("Pulse-Test",projectId, email,data)
    //ddbdoc_get('newTable',aKey,"shorn",info)
});

  //const itemInDynamo = await docClient.put(params).promise()

  
}