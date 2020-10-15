import React from 'react';
import PropTypes from 'prop-types';
import getDateTimeDisplayString from 'Pulse/utilfunctions/getDateTimeDisplayString'
import CommentIcon from '@material-ui/icons/Comment';
import MessageIcon from '@material-ui/icons/Message';



//TableCell
//The component renders a <th> element when the parent context is a header or otherwise a <td> element.

ChatItem.propTypes = {
    timestamp: PropTypes.string.isRequired,
    chatString: PropTypes.string.isRequired
};

//chatObj is a single object

export default function ChatItem({ timestamp, chatEmail, chatString, userEmail="sht@der.com" }) {

    // console.log(timestamp)
    // console.log(chatItem)
    // console.log(userEmail)

    //https://stackoverflow.com/a/56757009/669577
   // const email = get(keys(chatItem), 0);

   // const chatString = get(chatItem, email)

    // console.log(email)
    // console.log(chatString)


    const dateTimeString = getDateTimeDisplayString(timestamp)

    //https://getbootstrap.com/docs/4.0/utilities/colors/
    //align to right if seeingmyOwnChat
    const seeingMyOwnChat = <React.Fragment>
        <div className="p-1 bg-secondary text-white text-right" ><span className="text-dark">{chatEmail}</span> {dateTimeString} <MessageIcon/></div>
        <div className="p-1 bg-light text-black text-right" style={{overflowWrap: "break-word"}} >{`${chatString} `}</div>
        </React.Fragment>

    const seeingOtherChat = <React.Fragment>
        <div className="p-1 bg-secondary text-white" ><CommentIcon/> {dateTimeString} <span className="text-dark">{chatEmail}</span></div>
        <div className="p-1 bg-light text-black"  style={{overflowWrap: "break-word"}}>{` ${chatString}`}</div>
        </React.Fragment>

    //if email from db for chat is current user, 
     if (chatEmail === userEmail )  return seeingMyOwnChat 

     //else
     return seeingOtherChat


  
}

