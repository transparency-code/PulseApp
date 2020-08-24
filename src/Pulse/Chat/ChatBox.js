import React, { useState } from "react";
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import ChatHistory from './ChatHistory'

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

   console.log(chatObj)
  
  return (
    <Box component="div" p={1}>

    <ChatHistory userEmail={email} chatObj={chatObj} />
    
    <form onSubmit={handleSubmit}>
        <div className="form-group">
         <textarea
            className="form-control"
            id="chatTextArea"
            rows="3"
            value={chatTxt}
            onChange={ event => setChatTxt(event.target.value)}
          ></textarea>
        </div>

        <input type="submit" className="btn btn-primary"  value="Send"/>
      </form>
      </Box>
  );
}

export default ChatBox;