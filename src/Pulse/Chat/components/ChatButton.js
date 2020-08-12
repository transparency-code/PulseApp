import React from 'react'


export default function ChatButton({text}) {

    console.log(text)
    return (
        <button type="button" class="btn btn-primary">{text}</button>
    )
}
