import React from 'react';
import PropTypes from 'prop-types';
import getDateTimeDisplayString from 'Pulse/utilfunctions/getDateTimeDisplayString'
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import MessageIcon from '@material-ui/icons/Message';
import { keys, get } from 'lodash'

ChatLine.propTypes = {
    timestamp: PropTypes.string.isRequired,
    chatObj: PropTypes.object.isRequired
};

//chatObj is a single object

function ChatLine({ timestamp, chatObj, userEmail }) {

    //https://stackoverflow.com/a/56757009/669577
    const email = get(keys(chatObj), 0);

    const chatString = get(chatObj, email)

    // console.log(email)
    // console.log(chatString)


    const dateTimeString = getDateTimeDisplayString(timestamp)

    
    //align to right if seeingmyOwnChat
    const seeingMyOwnChat = <React.Fragment>
        <div className="p-3 bg-info text-white text-right" >{`${email} ${dateTimeString}`}</div>
        <div className="p-3 bg-light text-black text-right" >{`${chatString} `}<MessageIcon/></div>
    </React.Fragment>

    const seeingOtherChat = <React.Fragment>
        <div className="p-3 bg-info text-white" >{`${email} ${dateTimeString}`}</div>
        <div className="p-3 bg-light text-black" ><InsertCommentIcon />{` ${chatString}`}</div>
    </React.Fragment>

    //if email from db for chat is current user, 
     if (email === userEmail )  return seeingMyOwnChat 

     //else
     return seeingOtherChat


  
}






export default ChatLine;