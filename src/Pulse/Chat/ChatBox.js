import React, { useState } from "react";
import PropTypes from 'prop-types';
import ChatHistory from './ChatHistory'
import SendChat from './SendChat'

ChatBox.propTypes = {
  email : PropTypes.string.isRequired,
  projectid : PropTypes.number.isRequired,
  addChatFunc : PropTypes.func.isRequired,
  chatObj : PropTypes.object
};

////https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
//React functional component names must be start with uppercase letter.
function ChatBox({email,projectid,addChatFunc,chatObj}) {


  const [chatTxt, setChatTxt] = useState("");

  function handleSubmit(event) {
         addChatFunc(email,projectid,chatTxt)
         event.preventDefault();
     }

  //  console.log(chatObj)
  
  return (
    //https://material-ui.com/system/flexbox/
    <div >

    <ChatHistory userEmail={email} chatObj={chatObj} />
    <SendChat handleSubmitFunc={handleSubmit} chatTxt={chatTxt} setChatTxtFunc={setChatTxt} />

    
  
      </div>
  );
}

export default ChatBox;