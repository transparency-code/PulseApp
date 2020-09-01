import React, { useState } from "react";
import PropTypes from 'prop-types';
import ChatHistory from './ChatHistory'
import SendChat from './SendChat'
import Box from '@material-ui/core/Box';
import useNotification from 'Pulse/hooks/useNotification'

ChatBox.propTypes = {
  email : PropTypes.string.isRequired,
  projectid : PropTypes.number.isRequired,
  addChatFunc : PropTypes.func.isRequired,
  chatObj : PropTypes.object
};

////https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
//React functional component names must be start with uppercase letter.
function ChatBox({email,projectid,DBChatObj,addChatFunc,getUpdatedChatFunc}) {

  const [chatObj, setChatObj] = useState(DBChatObj);
  const [chatTxt, setChatTxt] = useState("");

    //unpackcontextusage
    const {addNotification} = useNotification()

  // console.log(email)
  // console.log(projectid)
  // console.log(chatObj)
  // console.log(addChatFunc)

  function  handleSubmit(event) {
  
        addChatFunc(email,projectid,chatTxt,chatObj, setChatTxt,addNotification)
        getUpdatedChatFunc(email,projectid,setChatObj)
       
  
     }


  
  return (
    //https://material-ui.com/system/flexbox/
    <Box border={1} p={2}>

    <p className="lead text-white bg-dark p-1">Chat Box</p>
    <ChatHistory userEmail={email} chatObj={chatObj} />
    <SendChat handleSubmitFunc={handleSubmit} chatTxt={chatTxt} setChatTxtFunc={setChatTxt} />

    
  
      </Box>
  );
}

export default ChatBox;