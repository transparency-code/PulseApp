import React from 'react';

import ListItemIcon from "@material-ui/core/ListItemIcon";
import AttachmentIcon from "@material-ui/icons/Attachment";
import S3FileLink from 'Pulse/components/S3FileLink';


const nofiles = (
  <ul className="list-group">
  <li className="list-group-item">
  No files uploaded
  </li>
</ul>
)


export default function DisplayFiles({files}) {

    // console.log(files)




  if (!Array.isArray(files) || files.length === 0) {
      return nofiles
  }



  const fileItems = files.map((file, index) => {

    

    return(
      <li className="list-group-item" key={index}>
        <ListItemIcon><AttachmentIcon /></ListItemIcon>

        {/* {getSignedUrlPromise(file.Key).then( (url) => { console.log(url)}) } */}
        {/* {getSignedUrlPromise()} */}
        
         <S3FileLink fileKey={file.Key} />
         


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
