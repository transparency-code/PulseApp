
import updateIteminDynamoGeneric from 'AWS/updateIteminDynamoGeneric'
import steps from "Pulse/Data/ProcessStates";

export default async function saveStageinDynamo(key, activeStep, NotifyFunc) {

    const {email, projectid} = key

   // const response = await updateIteminDynamo(email,projectid,stagetoSave)
    //email,projectid,attr,newAttrValue
    const response = await updateIteminDynamoGeneric(email,projectid,['requeststatus'],activeStep)



    if (response === 200) {
      NotifyFunc(`Set to ${steps[activeStep-1]}`);
      

     
    } else {
      NotifyFunc(`Error : ${response}`);

  
    }
     

 
}
