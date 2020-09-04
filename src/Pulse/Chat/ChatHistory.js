import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ChatPage from './ChatPage'
import { keys,sortBy , pick} from 'lodash'
import Pagination from '@material-ui/lab/Pagination'
import Box from '@material-ui/core/Box';
// import Pagination from './Pagination'

//https://www.w3schools.com/howto/howto_css_chat.asp
ChatHistory.propTypes = {
  userEmail: PropTypes.string.isRequired,
  chatObj: PropTypes.object.isRequired
};



function ChatHistory({ userEmail, chatObj }) {

  // console.log(userEmail)
 //  console.log(chatObj)

   
  const chatKeys= keys(chatObj)
  const orderedChatKeys = sortBy(chatKeys)
  //console.log(orderedChatKeys )


   console.log(orderedChatKeys)
  //  console.log(chats)
   const [postsPerPage] = useState(5)
   const pageCount = Math.ceil(orderedChatKeys.length/ postsPerPage)
  // const [loading, setLoading] = useState(false)
   const [currentPage, setCurrentPage] = useState(pageCount)
  

    //Get current posts
 const indexOfLastPost = currentPage * postsPerPage
 const indexOfFirstPost = indexOfLastPost - postsPerPage

//  console.log(indexOfLastPost)
//  console.log(indexOfFirstPost)
//  console.log(chats)

 const sliced = orderedChatKeys.slice(indexOfFirstPost, indexOfLastPost)
 const current = pick(chatObj,sliced)

 //console.log(current)

  return (  <Box mb={2}>
    <ChatPage chats={current} userEmail={userEmail}/>
    {/* <Pagination postsPerPage={postsPerPage} totalPosts={chats.length} setCurrentPage={setCurrentPage}/> */}
    <Pagination count={pageCount} variant="outlined" shape="rounded" defaultPage={pageCount} onChange={(event,page) => setCurrentPage(page)} />
  </Box>)
  



}

export default ChatHistory;