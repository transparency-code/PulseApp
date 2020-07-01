import createProjectId from "Pulse/utilfunctions/createProjectId";
import removeKeysWithNull from "Pulse/utilfunctions/removeKeysWithNull";
import { CreateParamsForInitialRequest, putToDynamo } from "AWS/putToDynamo";
import { uploadUserFilesToS3 } from "AWS/uploadUserFilesToS3";
import {requestStates} from "AWS/constants"
import AWS from "AWS/aws_config";

//doesnt receive a function to set state. Information is logged into console within itself
export default function submitRequest({ requestState,addNotification }, email) {
  //console.log(requestState)

  const projectId = createProjectId();

  //preserve but remove file uploads. its not needed in dynamo
  const fileUploads = requestState.fileUploads
  delete requestState.fileUploads

  const data = removeKeysWithNull(requestState);

  
 
// Credentials will be available when this function is called.
  AWS.config.credentials.get(async function () {
    
    //tableName, hashId, sortID, index, info
    const params = CreateParamsForInitialRequest(process.env.REACT_APP_DYNAMO_TESTTABLE, email,projectId, requestStates.initialRequest, data);

    //console.log(params)

    console.log("Adding to DataBase...");
    const resultCode = await putToDynamo(params);
    console.log("Status Code:" + resultCode);

    if (resultCode === 200 ) {
      addNotification("Request Creation Success.")
    }
   
   


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
