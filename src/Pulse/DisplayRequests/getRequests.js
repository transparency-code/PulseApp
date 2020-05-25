import AWS from "AWS/aws_config"
//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ProjectionExpressions.html
//To read data from a table, you use operations such as GetItem, Query, or Scan. Amazon DynamoDB returns all the item attributes by default.
//To get only some, rather than all of the attributes, use a projection expression.

//https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#query-property
//Directly access items from a table by primary key or a secondary index.

//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html
//Query results are always sorted by the sort key value.
//A single Query operation can retrieve a maximum of 1 MB of data.

import {CreateParamsForUserEmailQuery, CreateParamsForRequestTypeQuery, QueryFromDynamo} from "AWS/aws_utils"

//receives a function that set states
export async function getRequestsByRequestState(aStateMutater, requestState) {
 //   console.log(typeof(aStateMutater))
    AWS.config.credentials.get(async function () {

        //tableName,requestStatus,limit
        const params = CreateParamsForRequestTypeQuery(process.env.REACT_APP_DYNAMO_TESTTABLE, requestState);

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

export async function getRequestsForUserEmail(aStateMutater, user) {
 
       AWS.config.credentials.get(async function () {
   
           
           const params = CreateParamsForUserEmailQuery(process.env.REACT_APP_DYNAMO_TESTTABLE, user);
   
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