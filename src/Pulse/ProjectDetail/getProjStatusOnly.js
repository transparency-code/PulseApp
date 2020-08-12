import getAttributesFromDynamoSpecific from "AWS/getAttributesFromDynamoSpecific"



export default async function getProjStatusOnly(email,projectId,attribute) {

   const dataFromDB =  await getAttributesFromDynamoSpecific(email,projectId,attribute)

   //console.log(dataFromDB)
   console.log(`Specific Attribute  Info for ${projectId} `)
   console.log(dataFromDB)

   //setterFunc(dataFromDB)

  // const prefix =  `${projectId}/${process.env.REACT_APP_USERUPLOADSFOLDER}/`

    // const files =  await getFileListFromS3(prefix)
    // console.log(`Uploads for ${projectId} `)
    // files.length === 0 ? console.log("No files ") :  console.log(files)


//  const data = {...dataFromDB, files}

 //https://stackoverflow.com/questions/983267/how-to-access-the-first-property-of-a-javascript-object
  //console.log(dataFromDB[Object.keys(dataFromDB)[0]])
  
  return dataFromDB[Object.keys(dataFromDB)[0]]
 //  setReqStage(data.requeststatus)
 
}