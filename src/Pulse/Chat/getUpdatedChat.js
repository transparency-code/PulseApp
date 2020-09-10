import getAttributesFromDynamoSpecific from 'AWS/getAttributesFromDynamoSpecific'
import { get } from 'lodash';

async function getUpdatedChatObj(email,projectid,setFunc, NotificationFunc) {
   
   
    const newDbChatdObj = await getAttributesFromDynamoSpecific(email,projectid,['chat'])

    console.log("New Chat Object")

    console.log(newDbChatdObj)
    setFunc(get(newDbChatdObj,'chat',{}))
    NotificationFunc("Message Sent.")
}

export default getUpdatedChatObj;