import React, { useState } from "react";
import PropTypes from 'prop-types';
import ChatHistory from './ChatHistory'
import SendChat from './SendChat'
import Box from '@material-ui/core/Box';


ChatBox.propTypes = {
  email: PropTypes.string.isRequired,
  projectid: PropTypes.number.isRequired,
  addChatFunc: PropTypes.func.isRequired,
  chatObj: PropTypes.object
};

////https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
//React functional component names must be start with uppercase letter.
//This is parent of Chat
function ChatBox({ email, projectid, DBChatObj, addChatFunc, getUpdatedChatFunc }) {

  const [chatObj, setChatObj] = useState(DBChatObj);
  const [chatTxt, setChatTxt] = useState("");
  const [loading, setLoading] = useState(false)
  const [displayMsg, setDisplayMsg] = useState('')



  //unpackcontextusage
  //const { addNotification } = useNotification()

  // console.log(email)
  // console.log(projectid)
  // console.log(chatObj)
  // console.log(addChatFunc)


  async function handleSubmit(event) {
    // console.log(chatTxt)

    setLoading(true)

    const responseCode = await addChatFunc(email, projectid, chatTxt, chatObj, setChatTxt, setDisplayMsg)

    //https://stackoverflow.com/a/63821006/669577
    if (responseCode === 200) {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(getUpdatedChatFunc(email, projectid, setChatObj, setDisplayMsg)) }, 1000)
        })
        
      }

    setLoading(false)




  }





  return (
    //https://material-ui.com/system/flexbox/
    <Box border={1} p={2}>

      <p className="lead text-white bg-dark p-1">Chat Box</p>
      <ChatHistory userEmail={email} chatObj={chatObj} />
      <SendChat handleSubmitFunc={handleSubmit} chatTxt={chatTxt} setChatTxtFunc={setChatTxt} loading={loading} displayMsg={displayMsg} />



    </Box>
  )

}

export default ChatBox;