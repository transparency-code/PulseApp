import React from 'react'

import ChatTextArea from 'Pulse/Chat/components/ChatTextArea'
 import ChatButton from 'Pulse/Chat/components/ChatButton'

export default function index() {

    return (

    <div>
            <ChatTextArea/>
            <div className="float-right">
            <ChatButton text="Send" />
            </div>
       
            </div>

      
    )
}
