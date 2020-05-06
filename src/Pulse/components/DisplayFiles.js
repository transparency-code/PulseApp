import React from 'react'

export default function DisplayFiles(files) {

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    //https://reactjs.org/docs/lists-and-keys.html


    if (!Array.isArray(files) || files.length === 0 ) {
        return null
    }


    const fileItems = files.map((file, index) =>
        <li key={index}>
            <span>{file.name}</span>
        </li>
    )

    return (
        <ul>
            {fileItems}
        </ul>
    )
}
