import createProjectId from './createProjectId'
import removeKeysWithNull from './removeKeysWithNull'
import AWS from 'AWS/aws_config'
import { CreateParams, putToDynamo } from 'AWS/aws_utils'

export default function submitRequest({requestState},email) {


    //console.log(requestState)

    const tableInDynamo = process.env.REACT_APP_DYNAMO_TESTTABLE 

    const projectId = createProjectId()

    const data= removeKeysWithNull(requestState)

    //console.log(data)

    AWS.config.credentials.get(async function () {
        // Credentials will be available when this function is called.
        const params = CreateParams(tableInDynamo, projectId, email, data)
    
        console.log("Adding to DataBase...")
        var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10", convertEmptyValues: true });
        const result = await putToDynamo(docClient, params)
        console.log("Status Code:" + result.$response.httpResponse.statusCode)
    
      });
}
