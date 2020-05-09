import createProjectId from "Pulse/utilfunctions/createProjectId";
import removeKeysWithNull from "Pulse/utilfunctions/removeKeysWithNull";
import { CreateParamsForInitialRequest, putToDynamo, uploadUserFilesToS3 } from "AWS/aws_utils";
import {requestStates} from "AWS/constants"
import AWS from "AWS/aws_config";

export default function submitRequest({ requestState }, email) {
  //console.log(requestState)

  const projectId = createProjectId();

  //preserve but remove file uploads. its not needed in dynamo
  const fileUploads = requestState.fileUploads
  delete requestState.fileUploads

  const data = removeKeysWithNull(requestState);

  //add projectId kwy to data object, non mutative
  const dataWithID = { ...data, projectId}
  //console.log(data)

// Credentials will be available when this function is called.
  AWS.config.credentials.get(async function () {
    
    //tableName, hashId, sortID, info
    const params = CreateParamsForInitialRequest(process.env.REACT_APP_DYNAMO_TESTTABLE, requestStates.initialRequest, email, dataWithID);

    console.log("Adding to DataBase...");
    const resultCode = await putToDynamo(params);
    console.log("Status Code:" + resultCode);

     //https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa
    //Ad array non mutating
    //Array.prototype.concat does indeed return a new array, 
    //let uploadedFileKeys

    if (fileUploads.length > 0) {
      console.log("Uploading " + fileUploads.length + " files to S3...")
      const uploadedFileKeys = await uploadUserFilesToS3(projectId,fileUploads);

     // console.log(uploadedFileKeys)
      for (let key of uploadedFileKeys) {
        console.log(key)
      }
    }


  });
}
