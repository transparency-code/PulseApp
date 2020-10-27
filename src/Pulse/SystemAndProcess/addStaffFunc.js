import updateIteminDynamoGeneric from 'AWS/updateIteminDynamoGeneric'

export default async function addStaff(newStaffEmail, notificationFunc) {


    //constants for staffdata
    const email = "transparencygroup.nz"

    const projectid = 100

    const addToList = true

    const response = await updateIteminDynamoGeneric(email,projectid,['data'],newStaffEmail,true)

    if (response === 200 ) {
        notificationFunc("Added Staff.")
        //dont display success here..wait 3 seconds for cloud
    } else {
        notificationFunc(`Error Adding Staff.`)
    }

    // return response
    return response
}