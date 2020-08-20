/**
 * 
 * @param {string} email 
 * @param {number} timestamp
 * @param {string} chatStr
 * @param {object} existingObj
 * pass an empty onject is no existing chatObj, ie first chat
 */
export default function createChatObj(email,timestamp, chatStr, existingObj={}) {
   
   
    const chatObj = { [timestamp] : {  [email] : chatStr   }  }

    console.log(chatObj)
    const newObj = {...existingObj, ...chatObj}
    console.log(newObj)
    return newObj
}

