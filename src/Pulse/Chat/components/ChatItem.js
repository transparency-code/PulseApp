import React from 'react';
import PropTypes from 'prop-types';
import getDateTimeDisplayString from 'Pulse/utilfunctions/getDateTimeDisplayString'
import CommentIcon from '@material-ui/icons/Comment';
import MessageIcon from '@material-ui/icons/Message';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

//TableCell
//The component renders a <th> element when the parent context is a header or otherwise a <td> element.

//Only Table cell can contain div
//Table cell comes with padding. using makestyles to avoid padding

ChatItem.propTypes = {
    timestamp: PropTypes.string.isRequired,
    chatString: PropTypes.string.isRequired
};

const useStyles = makeStyles({
    root: {
      padding: '0',
    },
  });

//chatObj is a single object

export default function ChatItem({ timestamp, chatEmail, chatString, userEmail="sht@der.com" }) {

    // console.log(timestamp)
    // console.log(chatItem)
    // console.log(userEmail)



    const classes = useStyles();


    const dateTimeString = getDateTimeDisplayString(timestamp)

    //https://getbootstrap.com/docs/4.0/utilities/colors/
    //align to right if seeingmyOwnChat
    const seeingMyOwnChat = <TableCell className={classes.root}>
        <div className="p-1 bg-dark text-white text-right" >{chatEmail} {dateTimeString} <MessageIcon/></div>
        <div className="p-1 bg-light text-black text-right" style={{overflowWrap: "break-word"}} >{`${chatString} `}</div>
        </TableCell>

    const seeingOtherChat = <TableCell className={classes.root}>
        <div className="p-1 bg-dark text-white" ><CommentIcon/> {dateTimeString} <span className="text-dark">{chatEmail}</span></div>
        <div className="p-1 bg-light text-black"  style={{overflowWrap: "break-word"}}>{` ${chatString}`}</div>
        </TableCell>

    //if email from db for chat is current user, 
     if (chatEmail === userEmail )  return seeingMyOwnChat 

     //else
     return seeingOtherChat


  
}

