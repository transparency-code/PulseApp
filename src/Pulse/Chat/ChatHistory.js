import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ChatPage from './ChatPage'
import { keys,sortBy , pick} from 'lodash'
import Pagination from './Pagination'

//https://www.w3schools.com/howto/howto_css_chat.asp
ChatHistory.propTypes = {
  userEmail: PropTypes.string.isRequired,
  chatObj: PropTypes.object.isRequired
};



function ChatHistory({ userEmail, chatObj }) {

  // console.log(userEmail)
   //console.log(chatObj)

   
  const chatKeys= keys(chatObj)
  const orderedChatKeys = sortBy(chatKeys)

   const [chats, setChats] = useState(orderedChatKeys)
  // const [loading, setLoading] = useState(false)
   const [currentPage, setCurrentPage] = useState(1)
   const [postsPerPage] = useState(5)

    //Get current posts
 const indexOfLastPost = currentPage * postsPerPage
 const indexOfFirstPost = indexOfLastPost - postsPerPage

 //console.log(orderedChatKeys)

 const sliced = chats.slice(indexOfFirstPost, indexOfLastPost)
 const current = pick(chatObj,sliced)


  return (  <React.Fragment>
    <ChatPage chats={current} userEmail={userEmail}/>
    <Pagination postsPerPage={postsPerPage} totalPosts={chats.length} setCurrentPage={setCurrentPage}/>
  </React.Fragment>)
  



}

export default ChatHistory;