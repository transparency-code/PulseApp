import React from "react";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import AttachmentIcon from "@material-ui/icons/Attachment";
import Box from '@material-ui/core/Box';




export default function DisplayFiles({files}) {

    // console.log(files)

  if (!Array.isArray(files) || files.length === 0) {
    return null;
  }



  const fileItems = files.map((file, index) => {

    // console.log(file)

    return(
      <li className="list-group-item" key={index}>
        <ListItemIcon><AttachmentIcon /></ListItemIcon>
        {file.Key}


        {/* <button type="button" className="ml-2 btn btn-warning" onClick= { ()=> handleFileDelete(index)}>Delete</button> */}
  
      </li>
  )
})

  return (
    <Box mt={5}> 
    <ul className="list-group">
      {fileItems}
    </ul>
    </Box>
  )
}
