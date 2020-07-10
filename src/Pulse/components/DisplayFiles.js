import React from "react";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import AttachmentIcon from "@material-ui/icons/Attachment";
import getFileNameFromPrefixed from "Pulse/utilfunctions/getFileNameFromPrefixed"




export default function DisplayFiles({files}) {

    // console.log(files)

  if (!Array.isArray(files) || files.length === 0) {
      return(
    <ul className="list-group">
        <li className="list-group-item">
        No files uploaded
        </li>
    </ul>
      )
  }



  const fileItems = files.map((file, index) => {

    // console.log(file)

    return(
      <li className="list-group-item" key={index}>
        <ListItemIcon><AttachmentIcon /></ListItemIcon>
        {getFileNameFromPrefixed(file.Key)}


        {/* <button type="button" className="ml-2 btn btn-warning" onClick= { ()=> handleFileDelete(index)}>Delete</button> */}
  
      </li>
  )
})

  return (
 
    <ul className="list-group">
      {fileItems}
    </ul>
 
  )
}
