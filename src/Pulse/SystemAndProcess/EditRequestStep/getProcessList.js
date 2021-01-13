import getAttributesFromDynamoSpecific from 'AWS/getAttributesFromDynamoSpecific'
import { get } from 'lodash';

export default async function getProcessList (setFunc) {
   
    const email = "transparencygroup.nz"

    const projectid = 100

    const processList = await getAttributesFromDynamoSpecific(email,projectid,['processinfo'])

    //console.log("New Staff List")

  // console.log(processList)

    //the staffinfo field of this row has stafflist
    const data = get(processList,'processinfo',[])

    setFunc(data)
    
}

