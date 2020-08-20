//updating requeststatus - index
//updating chat, can add attribute , if not existing

import updateIteminDynamoGeneric from 'AWS/updateIteminDynamoGeneric'
import createChatObj from './createChatObj'
import createChatTime from 'Pulse/utilfunctions/createChatTime'

//export default async function saveStageinDynamo(key, chatObj) {
    export default async function addChat(email,projectid,chatStr) {

    // const {email, projectid} = key
    //create Time stamp here here
    const timestamp = createChatTime()

    const newChatObj = createChatObj(email,timestamp,chatStr)

   const attrToUpdate = "chat"

    const response = await updateIteminDynamoGeneric(email,projectid,attrToUpdate, newChatObj)

    return response
}

