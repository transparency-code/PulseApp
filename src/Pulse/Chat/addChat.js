//updating requeststatus - index
//updating chat, can add attribute , if not existing

import updateIteminDynamoGeneric from 'AWS/updateIteminDynamoGeneric'
import createChatObj from './createChatObj'
import createChatTimeStamp from 'Pulse/utilfunctions/createChatTimeStamp'

//export default async function saveStageinDynamo(key, chatObj) {
    /**
     * 
     * @param {string} email 
     * @param {number} projectid 
     * @param {string} chatStr 
     * @param {object} existChatObj  existing chat object stored in Db
     */
    export default async function addChat(email,projectid,chatStr,existChatObj) {

    // const {email, projectid} = key
    //create Time stamp here here
    const timestamp = createChatTimeStamp()


    const newChatObj = createChatObj(email,timestamp,chatStr,existChatObj)

   const attrToUpdate = "chat"

    const response = await updateIteminDynamoGeneric(email,projectid,attrToUpdate, newChatObj)

    return response
}

