import AWS from './aws_config'
import { CreateParams, putToDynamo } from './util'




//impure Function. Do not test
export default function dynamoAddProject(tableName, projectId, email, data) {

  //https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html
  //The document client affords developers the use of native JavaScript types instead of AttributeValues to simplify the JavaScript development experience with Amazon DynamoDB

  AWS.config.credentials.get(async function () {
    // Credentials will be available when this function is called.
    const params = CreateParams(tableName, projectId, email, data)

    console.log("Adding to DataBase...")
    var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10", convertEmptyValues: true });
    const result = await putToDynamo(docClient, params)
    console.log("Status Code:" + result.$response.httpResponse.statusCode)

  });




}