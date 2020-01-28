import React from 'react'

//https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
//file API
//https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
//user select multiple files, simply use the multiple attribute on the input element:

export default function FileList() {

    function changeHandler(event) {
        console.log(event.target.files)
    }

    return (
       <input id="customfiles" type="file" multiple onChange={changeHandler} />
    )
}
