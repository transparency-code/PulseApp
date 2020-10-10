import React, { useState } from "react";
import PropTypes from 'prop-types';
//import ChatHistory from './ChatHistory'
//import SendChat from './SendChat'
import ChatBox from 'Pulse/Chat/components/ChatBox'

import { map, keys, values } from 'lodash'


ChatBox.propTypes = {
    email: PropTypes.string.isRequired,
    projectid: PropTypes.number.isRequired,
    addChatFunc: PropTypes.func.isRequired,
    chatObj: PropTypes.object
};

////https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
//React functional component names must be start with uppercase letter.
//This is parent of Chat
export default function ChatBoxContainer({ email, projectid, DBChatObj, addChatFunc, getUpdatedChatFunc }) {

    const [chatObj, setChatObj] = useState(DBChatObj);
    const [chatTxt, setChatTxt] = useState("");
    const [loading, setLoading] = useState(false)
    const [displayMsg, setDisplayMsg] = useState('')
    const [page, setPage] = React.useState(0);


   
    console.log(DBChatObj)
    console.log(chatObj)

    async function handleSubmit(event) {
        // console.log(chatTxt)

        setLoading(true)

        const responseCode = await addChatFunc(email, projectid, chatTxt, chatObj, setChatTxt, setDisplayMsg)

        //https://stackoverflow.com/a/63821006/669577
        if (responseCode === 200) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(getUpdatedChatFunc(email, projectid, setChatObj, setDisplayMsg))
                }, 1000)
            })

        }

        setLoading(false)




    }


    const dataInArrayFormat = map(chatObj, (value, key) => {

        const timestamp = key
        const chatEmail = keys(value)[0]
        const chatMsg = values(value)[0]

        return [timestamp, chatEmail, chatMsg]
    })



    console.log(dataInArrayFormat)

    const rowsPerPage = 5

    const rowsInPage = dataInArrayFormat.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, dataInArrayFormat.length - page * rowsPerPage);

    return (
        <div>
 {/* <ChatBox rowsPerPage={0} rowsInPage={rowsInPage} page={page} onChangePage={setPage} /> */}

        </div>
     
 






    )

}

