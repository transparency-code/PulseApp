 import getItemFromDynamo from "AWS/getItemFromDynamo"
 import getFileListFromS3 from "AWS/getFileListFromS3"
 import AWS from "AWS/aws_config";

export default async function getProjectDetails(email,projectId,setterFunc) {

    
    const info =  await getItemFromDynamo(email,projectId)
    console.log("Retreived Info for Project Id " + projectId)
  //  console.log(info)

    setterFunc(info)

    const prefix =  `${projectId}/${process.env.REACT_APP_USERUPLOADSFOLDER}/`

    AWS.config.credentials.get(async function () {
        const files =  await getFileListFromS3(prefix)
        console.log(files)
    })

    
   
    
    setterFunc(info)
}




