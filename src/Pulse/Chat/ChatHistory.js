import React from 'react';
import PropTypes from 'prop-types';
import ChatLine from './ChatLine'
import { map, orderBy } from 'lodash'

//https://www.w3schools.com/howto/howto_css_chat.asp
ChatHistory.propTypes = {
  userEmail: PropTypes.string.isRequired,
  chatObj: PropTypes.object.isRequired
};



function ChatHistory({ userEmail, chatObj }) {

  // console.log(userEmail)
   //console.log(chatObj)

 

  const chatLines = map(chatObj, (value, key) => {

    // console.log(value)
  
    //timestamp is key
    return    <ChatLine timestamp={key} chatObj={value} key={key}  userEmail={userEmail} />

   }

  )

//https://stackoverflow.com/questions/43112327/sorting-a-map-of-keys-and-values-please-to-order-a-list-in-es6-with-lodash-keep
//https://lodash.com/docs/4.17.15#orderBy

const orderedChatLines = orderBy(chatLines,['key'])

// console.log(chatLines)
// console.log(orderedChatLines)

  return   orderedChatLines



}

export default ChatHistory;