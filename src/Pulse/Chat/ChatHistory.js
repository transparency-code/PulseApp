import React,{useState} from 'react';
import {map,keys} from 'lodash'
import PropTypes, { object } from 'prop-types';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import getDateStringFromID from 'Pulse/utilfunctions/getDateDislayStringFromID'

//https://www.w3schools.com/howto/howto_css_chat.asp
ChatHistory.propTypes = {
    
};

function UserChat({timestamp,chatObj}) {
 console.log(timestamp)
 console.log(chatObj)
 const chat = map(chatObj, (chatString,email) => (
    <div>
    <span>{timestamp}</span>
    <span>{chatString}</span>
    <span>{email}</span>
    <ul class="list-group">

  <li class="list-group-item"><ChatBubbleIcon/>{getDateStringFromID(timestamp)}</li>

</ul>
    </div>
  ))

  return chat
}
   


function ChatHistory(props) {
  

   //https://lodash.com/docs/4.17.15#map
   //The iteratee is invoked with three arguments:,(value, index|key, collection).
  const chatList = map(props.chatObj, (value,key) => {
    //key is timestamp
    //value is key value of email and chatString
    return (
      //Each child in a list should have a unique "key"
      <UserChat timestamp={key} chatObj={value} key={key} />
    )
  }
  
  )
      

    return chatList



   
}

export default ChatHistory;