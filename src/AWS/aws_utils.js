//https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-table-read-write.html
//https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#putItem-property

export function CreateParams(tableName, hashId, sortID , info) {

    const params = {
        TableName: tableName,
        Item : { ProjectId : hashId,
          Email : sortID,
          ...info
         },
    
      };

      return params

}


export async function putToDynamo(docClient, params) {
    const result = await docClient.put(params).promise()
    return result
}