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

  const folderKey = encodeURIComponent(projectId) + "/useruploads";

  AWS.config.credentials.get(async function () {
    // Credentials will be available when this function is called.
    const params = CreateParams(tableInDynamo, projectId, email, data);

    console.log("Adding to DataBase...");
    const resultCode = await putToDynamo(params);
    console.log("Status Code:" + resultCode);


    if (fileUploads.length > 0) {
      console.log("Uploading Files To S3...");
      uploadUserFilesToS3(projectId,fileUploads);
    }
  });
}
