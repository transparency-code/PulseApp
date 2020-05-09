import AWS from "AWS/aws_config"
import {requestStates} from "AWS/constants"
//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ProjectionExpressions.html
//To read data from a table, you use operations such as GetItem, Query, or Scan. Amazon DynamoDB returns all the item attributes by default.
//To get only some, rather than all of the attributes, use a projection expression.

//https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#query-property
//Directly access items from a table by primary key or a secondary index.

//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html
//Query results are always sorted by the sort key value.
//A single Query operation can retrieve a maximum of 1 MB of data.

import {CreateParamsForRequestQuery, QueryFromDynamo} from "AWS/aws_utils"

export default function getInitialRequests(limit) {
    AWS.config.credentials.get(async function () {


        const params = CreateParamsForRequestQuery(process.env.REACT_APP_DYNAMO_TESTTABLE, requestStates.initialRequest,limit);

        //console.log(params)
        console.log("Retriving from DataBase...");
        const resultCode = await QueryFromDynamo(params);
        console.log("Retrieved " + resultCode.count + " items");
        console.log("Status Code:" + resultCode.statusCode);       
    })
}