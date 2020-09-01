import getAttributesFromDynamoSpecific from 'AWS/getAttributesFromDynamoSpecific'
import { get } from 'lodash';

async function getUpdatedChatObj(email,projectid,setFunc) {
    const newDbChatdObj = await getAttributesFromDynamoSpecific(email,projectid,['chat'])

    console.log("Retrieved New Chat Object")

    console.log(newDbChatdObj)
    setFunc(get(newDbChatdObj,'chat',{}))
}

export default getUpdatedChatObj;