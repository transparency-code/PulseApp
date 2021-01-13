import getAttributesFromDynamoSpecific from 'AWS/getAttributesFromDynamoSpecific'
import { get } from 'lodash';

export default async function getStaffList (setFunc) {
   
    const email = "transparencygroup.nz"

    const projectid = 100

    const staffList = await getAttributesFromDynamoSpecific(email,projectid,['staffinfo'])

    //console.log("New Staff List")

   console.log(staffList)

    //the staffinfo field of this row has stafflist
    const data = get(staffList,'staffinfo',[])

    setFunc(data)
    
}

