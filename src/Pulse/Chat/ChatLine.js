import React from 'react';
import PropTypes from 'prop-types';
import getDateTimeDisplayString from 'Pulse/utilfunctions/getDateTimeDisplayString'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
//import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import {keys,get} from 'lodash'

ChatLine.propTypes = {
    timestamp : PropTypes.string.isRequired,
    chatObj : PropTypes.object.isRequired
};

//chatObj is a single object

function ChatLine({timestamp,chatObj,userEmail}) {

    //https://stackoverflow.com/a/56757009/669577
    const email = get(keys(chatObj),0);

    const chatString = get(chatObj,email)

    // console.log(email)
    // console.log(chatString)

 
 

    if (email === userEmail ) {
        return    <li className="list-group-item" key={timestamp}><ChatBubbleIcon/>{getDateTimeDisplayString(timestamp)}{chatString}</li>
    }

    return <li className="list-group-item" key={timestamp}><ChatBubbleIcon/>{getDateTimeDisplayString(timestamp)}{chatString}</li>
    

}

export default ChatLine;