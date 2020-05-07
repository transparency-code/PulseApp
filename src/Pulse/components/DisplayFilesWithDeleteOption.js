import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AttachmentIcon from "@material-ui/icons/Attachment";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';

export default function DisplayFilesWithDeleteOption(files, handleFileDelete) {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  //https://reactjs.org/docs/lists-and-keys.html

  if (!Array.isArray(files) || files.length === 0) {
    return null;
  }

  //console.log(files);
  const fileItems = files.map((file, index) => (
    <ListItem key={index}>
      <ListItemIcon>
        <AttachmentIcon />
      </ListItemIcon>
      <ListItemText primary={file.name} />

      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon/>}
        onClick= { ()=> handleFileDelete(index)}>
        Delete
      </Button>

    </ListItem>
  ));

  return <List>{fileItems}</List>;
}
