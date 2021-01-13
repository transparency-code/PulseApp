import updateIteminDynamo from 'AWS/updateIteminDynamo'

export default async function addStaff(newStaffEmail, addToList, notificationFunc) {

    // console.log(newStaffEmail)
    // console.log(notificationFunc)

  //  console.log(addToList)
  //console.log(clearTextFunc)
    //constants for staffdata
    const email = "transparencygroup.nz"

    const projectid = 100

    //dynamodb , only lists can be appended
    const listItem = [newStaffEmail] 

   const attrToUpdate = "staffinfo"

   //console.log(mapItem)
    //add to list is set to true
    const response = await updateIteminDynamo(email,projectid,attrToUpdate, listItem, addToList)

    if (response === 200 ) {
        notificationFunc("Added Staff.")
        //dont display success here..wait 3 seconds for cloud
    } else {
        notificationFunc(`Error Adding Staff.`)
    }

    // return response
    return response
}