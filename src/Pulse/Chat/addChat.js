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
    export default async function addChat(email,projectid,chatStr,existChatObj,clearChatBoxFunc, notificationFunc) {

    notificationFunc("Sending Message...")
    // const {email, projectid} = key
    //create Time stamp here here
    const timestamp = createChatTimeStamp()


    const dynamoList = createChatObj(email,timestamp,chatStr,existChatObj)

   const attrToUpdate = "chat"

   console.log(dynamoList )

    const response = await updateIteminDynamoGeneric(email,projectid,attrToUpdate, dynamoList)

    // console.log(newChatObj)
    // console.log(response)

    
    if (response === 200 ) {
        clearChatBoxFunc("")
        //dont display success here..wait 3 seconds for cloud
    } else {
        notificationFunc(`Error Sending Message`)
    }

    // return response
    return response
}

