import React from "react";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import AttachmentIcon from "@material-ui/icons/Attachment";
import Box from '@material-ui/core/Box';




export default function DisplayFilesWithDeleteOption(files, handleFileDelete) {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  //https://reactjs.org/docs/lists-and-keys.html

  if (!Array.isArray(files) || files.length === 0) {
    return null;
  }


  //console.log(files);
  const fileItems = files.map((file, index) => (
    // <ListItem key={index}>
    //   <ListItemIcon>
    //     <AttachmentIcon />
    //   </ListItemIcon>
    //   <ListItemText primary={file.name} />


      <li className="list-group-item" key={index}>
        <ListItemIcon><AttachmentIcon /></ListItemIcon>
        {file.name}


        <button type="button" className="ml-2 btn btn-warning" onClick= { ()=> handleFileDelete(index)}>Delete</button>
  
      </li>
  ))

  return (
    <Box mt={5}> 
    <ul className="list-group">
      {fileItems}
    </ul>
    </Box>
  )
}
