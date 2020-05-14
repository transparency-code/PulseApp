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

//receives a function that set states
export default async function getInitialRequests(aStateMutater) {
 //   console.log(typeof(aStateMutater))
    AWS.config.credentials.get(async function () {

        //tableName,requestStatus,limit
        const params = CreateParamsForRequestQuery(process.env.REACT_APP_DYNAMO_TESTTABLE, requestStates.initialRequest, 5);

        //console.log(params)
        console.log("Retriving from DataBase...");
        const result = await QueryFromDynamo(params);
        console.log("Retrieved " + result.count + " items");
        console.log("Status Code:" + result.statusCode);
  //      console.log(result.items) 
   //     console.log(typeof(aStateMutater))
        aStateMutater(result.items)
        //aStateMutater (result.items)
        //console.log(setStateFunction)
        //setStateFunction(result.items)   
    })
}