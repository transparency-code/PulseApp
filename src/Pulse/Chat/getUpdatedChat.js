import getAttributesFromDynamoSpecific from 'AWS/getAttributesFromDynamoSpecific'
import { get } from 'lodash';

async function getUpdatedChatMap(email,projectid,setFunc, NotificationFunc) {
   
   
    const newDbChatdMap = await getAttributesFromDynamoSpecific(email,projectid,['chat'])

    console.log("New Chat Object")

    console.log(newDbChatdMap)
    setFunc(get(newDbChatdMap,'chat',{}))
    NotificationFunc("Message Sent.")
}

export default getUpdatedChatMap