//updating requeststatus - index
//updating chat, can add attribute , if not existing

import updateIteminDynamoGeneric from 'AWS/updateIteminDynamoGeneric'
import createMapAttribute from './createMapAttribute'
import createChatTimeStamp from 'Pulse/utilfunctions/createChatTimeStamp'

//export default async function saveStageinDynamo(key, chatObj) {
    /**
     * 
     * @param {string} email 
     * @param {number} projectid 
     * @param {string} chatStr 
     * @param {object} existChatObj  existing chat object stored in Db
     */
    export default async function addChat(email,projectid,message,clearChatBoxFunc, notificationFunc, addToList) {

    notificationFunc("Sending Message...")
    // const {email, projectid} = key
    //create Time stamp here here
    const timestamp = createChatTimeStamp()

    
    const mapItem = createMapAttribute(email,timestamp,message)

   const attrToUpdate = "chat"

   //console.log(mapItem)

    const response = await updateIteminDynamoGeneric(email,projectid,attrToUpdate, mapItem, addToList)

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

