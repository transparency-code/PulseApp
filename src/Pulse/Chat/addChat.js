//updating requeststatus - index
//updating chat, can add attribute , if not existing

import updateIteminDynamoGeneric from 'AWS/updateIteminDynamoGeneric'

//export default async function saveStageinDynamo(key, chatObj) {
    export default async function addChat(email,projectid,chatObj) {

    // const {email, projectid} = key

    
    let email = "sht@der.com"

    let projectid = 20081113242455

    let chatObj = {34543252335 : { email : "dafdafdaf" }}

   console.log(email)

   console.log(projectid)

   console.log(chatObj)

   const attrToUpdate = "chat"

    const response = await updateIteminDynamoGeneric(email,projectid,attrToUpdate, chatObj)

    return response
}

