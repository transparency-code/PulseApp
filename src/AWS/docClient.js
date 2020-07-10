import AWS from "./aws_config";

//Doc Client is only usefull for Dynamo
const docClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: "2012-08-10",
    convertEmptyValues: true,
  });

  export default docClient
