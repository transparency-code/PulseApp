
import updateIteminDynamo from 'AWS/updateIteminDynamo'


export default async function saveStageinDynamo(key, activeStep, savedToStepLabel ,NotifyFunc) {

    const {email, projectid} = key

   // const response = await updateIteminDynamo(email,projectid,stagetoSave)
    //email,projectid,attr,newAttrValue
    const response = await updateIteminDynamo(email,projectid,['requeststatus'],activeStep)



    if (response === 200) {
      NotifyFunc(`Set to ${savedToStepLabel}`);
      

     
    } else {
      NotifyFunc(`Error : ${response}`);

  
    }
     
    return response
 
}
