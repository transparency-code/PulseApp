import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ChatLine from './ChatLine'
import { map, orderBy, values, keys,sortBy ,get} from 'lodash'
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

   const [posts, setPosts] = useState(orderedChatKeys)
   const [loading, setLoading] = useState(false)
   const [currentPage, setCurrentPage] = useState(1)
   const [postsPerPage] = useState(5)

    //Get current posts
 const indexOfLastPost = currentPage * postsPerPage
 const indexOfFirstPost = indexOfLastPost - postsPerPage

 //console.log(orderedChatKeys)

 const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
// console.log(currentPosts)

  const chatRows = map(currentPosts , (key) => {

    
   const chatItem = chatObj[key]
  // console.log(chatItem )

     return    <ChatLine timestamp={key} chatItem={chatItem} key={key}  userEmail={userEmail} />
   
   }

  )

//https://stackoverflow.com/questions/43112327/sorting-a-map-of-keys-and-values-please-to-order-a-list-in-es6-with-lodash-keep
//https://lodash.com/docs/4.17.15#orderBy

//const orderedChatLines = orderBy(chatLines,['key'])

// console.log(chatLines)
// console.log(orderedChatLines)

  return (  <React.Fragment>
    {chatRows}
    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} setCurrentPage={setCurrentPage}/>
  </React.Fragment>)
  



}

export default ChatHistory;