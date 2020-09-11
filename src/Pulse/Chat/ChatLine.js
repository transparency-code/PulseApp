import React from 'react';
import PropTypes from 'prop-types';
import getDateTimeDisplayString from 'Pulse/utilfunctions/getDateTimeDisplayString'
import { keys, get } from 'lodash'
import CommentIcon from '@material-ui/icons/Comment';
import MessageIcon from '@material-ui/icons/Message';


ChatLine.propTypes = {
    timestamp: PropTypes.string.isRequired,
    chatItem: PropTypes.object.isRequired
};

//chatObj is a single object

function ChatLine({ timestamp, chatItem, userEmail }) {

    // console.log(timestamp)
    // console.log(chatItem)
    // console.log(userEmail)

    //https://stackoverflow.com/a/56757009/669577
    const email = get(keys(chatItem), 0);

    const chatString = get(chatItem, email)

    // console.log(email)
    // console.log(chatString)


    const dateTimeString = getDateTimeDisplayString(timestamp)

    //https://getbootstrap.com/docs/4.0/utilities/colors/
    //align to right if seeingmyOwnChat
    const seeingMyOwnChat = <React.Fragment>
        <div className="p-1 bg-secondary text-white text-right" ><span className="text-dark">{email}</span> {dateTimeString} <MessageIcon/></div>
        <div className="p-1 bg-light text-black text-right" style={{overflowWrap: "break-word"}} >{`${chatString} `}</div>
    </React.Fragment>

    const seeingOtherChat = <React.Fragment>
        <div className="p-1 bg-secondary text-white" ><CommentIcon/> {dateTimeString} <span className="text-dark">{email}</span></div>
        <div className="p-1 bg-light text-black"  style={{overflowWrap: "break-word"}}>{` ${chatString}`}</div>
    </React.Fragment>

    //if email from db for chat is current user, 
     if (email === userEmail )  return seeingMyOwnChat 

     //else
     return seeingOtherChat


  
}






export default ChatLine;