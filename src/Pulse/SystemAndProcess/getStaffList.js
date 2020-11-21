import getAttributesFromDynamoSpecific from 'AWS/getAttributesFromDynamoSpecific'
import { get } from 'lodash';

export default async function getStaffList () {
   
    const email = "transparencygroup.nz"

    const projectid = 100

    const staffList = await getAttributesFromDynamoSpecific(email,projectid,['data'])

    //console.log("New Staff List")

   // console.log(staffList)

    //the data field of this row has stafflist
    const data = get(staffList,'data',[])

    return data
    
}

