
import updateIteminDynamoGeneric from 'AWS/updateIteminDynamoGeneric'
import steps from "Pulse/Data/ProcessStates";

export default async function saveStageinDynamo(key, activeStep, getStatusOnly, setReqStatus, addNotification) {

    const {email, projectid} = key

   // const response = await updateIteminDynamo(email,projectid,stagetoSave)
    //email,projectid,attr,newAttrValue
    const response = await updateIteminDynamoGeneric(email,projectid,['requeststatus'],activeStep)


    if (response === 200) {
        addNotification(`Set to ${steps[activeStep-1]}`);
        
        //Retriving the new status from db. this shuld be same as activestatus
        const newStatus = await getStatusOnly(email, projectid, ['requeststatus'])

        setReqStatus(newStatus)
       
      } else {
        addNotification(`Error : ${response}`);
      }
 
}
