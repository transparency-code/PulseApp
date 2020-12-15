import deleteListItemInDynamo from 'AWS/deleteListItemInDynamo'
export default async function deleteStaffFunc(listItem,index, notificationFunc) {

    const email = "transparencygroup.nz"

    const projectid = 100

 
 

   //console.log(mapItem)
    //add to list is set to true

    const attr= "staffinfo"
    const response = await deleteListItemInDynamo(email,projectid, attr, index)

    if (response === 200 ) {
        notificationFunc("Added Staff.")
        //dont display success here..wait 3 seconds for cloud
    } else {
        notificationFunc(`Error Adding Staff.`)
    }

    // return response
    return response

}
   


