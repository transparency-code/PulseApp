import React, { useState } from "react";
import PropTypes from 'prop-types';
import { sortBy} from 'lodash'
import SendChat from 'Pulse/Chat/components//SendChat'
import ChatBox from 'Pulse/Chat/components/ChatBox'

import { map, keys, values } from 'lodash'


ChatBoxContainer.propTypes = {
    email: PropTypes.string.isRequired,
    projectid: PropTypes.number.isRequired,
    addChatFunc: PropTypes.func.isRequired,
    chatObj: PropTypes.object
};

////https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
//React functional component names must be start with uppercase letter.
//This is parent of Chat
export default function ChatBoxContainer({ email, projectid, DBChatMap, addChatFunc, getUpdatedChatFunc }) {

    const [chatMap, setChatMap] = useState(DBChatMap);
    const [chatMsg, setChatMsg] = useState("");
    const [loading, setLoading] = useState(false)
    const [displayMsg, setDisplayMsg] = useState('')
    const [page, setPage] = React.useState(0);

   



    // console.log(DBChatObj)
    // console.log(chatMap)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };



    async function handleSubmit(event) {
        // console.log(chatTxt)

        setLoading(true)

        //if chatMap is not empty,  this is not first chat
        const addToList = chatMap.length === 0 ? false : true

        const responseCode = await addChatFunc(email, projectid, chatMsg, setChatMsg, setDisplayMsg, addToList)

        //https://stackoverflow.com/a/63821006/669577
        if (responseCode === 200) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(getUpdatedChatFunc(email, projectid, setChatMap, setDisplayMsg))
                }, 1000)
            })

        }

        setLoading(false)




    }

    // const sortedData = sortBy(chatObj,['timestamp'] )

    // console.log(sortedData)

    // const data = map(chatObj, (value,key) => {

    //    console.log(key)
    //    console.log(value)
    //     const timestamp = key
    //     // const chatEmail = keys(value)[0]
    //     // const chatMsg = values(value)[0]

    //   //  return [timestamp, chatEmail, chatMsg]
    // })

    


    //console.log(dataInArrayFormat)


    



    return (
        <div>
            <ChatBox data={chatMap} totalRows={chatMap.length}  page={page} onChangePage={handleChangePage} />
            <SendChat handleSubmitFunc={handleSubmit} chatTxt={chatMsg} setChatTxtFunc={setChatMsg} loading={loading} displayMsg={displayMsg} /> 
        </div>










    )

}

