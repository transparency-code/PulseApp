import React from 'react';
import PropTypes from 'prop-types';
import ChatLine from './ChatLine'
import { map } from 'lodash'

//https://www.w3schools.com/howto/howto_css_chat.asp
ChatHistory.propTypes = {
  userEmail: PropTypes.string.isRequired,
  chatObj: PropTypes.object.isRequired
};



function ChatHistory({ userEmail, chatObj }) {

  // console.log(userEmail)
  // console.log(chatObj)

  const chatList = map(chatObj, (value, key) => {

    // console.log(value)
    // console.log(key)
    //timestamp is key
    return    <ChatLine timestamp={key} chatObj={value} key={key} userEmail={userEmail} />

   }

  )
  return chatList

}

export default ChatHistory;