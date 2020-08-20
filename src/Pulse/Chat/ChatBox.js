import React, { useState } from "react";
import PropTypes from 'prop-types';

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
  
  return (
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
  );
}

export default ChatBox;