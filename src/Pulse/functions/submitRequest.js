import createProjectId from "./createProjectId";
import removeKeysWithNull from "./removeKeysWithNull";
import { CreateParams, putToDynamo, uploadUserFilesToS3 } from "AWS/aws_utils";
import AWS from "AWS/aws_config";

export default function submitRequest({ requestState }, email) {
  //console.log(requestState)

  const tableInDynamo = process.env.REACT_APP_DYNAMO_TESTTABLE;

  const projectId = createProjectId();

  //preserve but remove file uploads. its not needed in dynamo
  const fileUploads = requestState.fileUploads
  delete requestState.fileUploads

  const data = removeKeysWithNull(requestState);
  //console.log(data)


  AWS.config.credentials.get(async function () {
    // Credentials will be available when this function is called.
    const params = CreateParams(tableInDynamo, projectId, email, data);

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
