 import getAttibutesFromDynamoAll from "AWS/getAttibutesFromDynamoAll"
 import getFileListFromS3 from "AWS/getFileListFromS3"


export default async function getProjectDetails(email,projectId,setFunc) {

    const dataFromDB =  await getAttibutesFromDynamoAll(email,projectId)

    //console.log(dataFromDB)
    console.log(`Info for ${projectId} `)
    console.log(dataFromDB)

    //setterFunc(dataFromDB)

    const prefix =  `${projectId}/${process.env.REACT_APP_USERUPLOADSFOLDER}/`

     const files =  await getFileListFromS3(prefix)
     console.log(`Uploads for ${projectId} `)
     files.length === 0 ? console.log("No files ") :  console.log(files)

 
   const data = {...dataFromDB, files}

   //console.log(data)
    
    setFunc(data)
  //  setReqStage(data.requeststatus)
}




