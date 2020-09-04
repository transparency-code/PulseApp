import React from 'react';
import { map} from 'lodash'
import ChatLine from './ChatLine'

function ChatPage({chats,userEmail}) {
// console.log(chats)

    const chatItems = map(chats , (valueObj,key) => {
        return    <ChatLine timestamp={key} chatItem={valueObj} key={key}  userEmail={userEmail} />
    })

    return chatItems
}

export default ChatPage;