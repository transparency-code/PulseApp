//https://react-dropzone.js.org/
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import Box from '@material-ui/core/Box';

export default function MyDropzone({dropZoneText,handleFilesChange}) {

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files

    console.log(acceptedFiles)
    handleFilesChange(acceptedFiles)
  }, [handleFilesChange])
  
  //https://reactjs.org/docs/hooks-reference.html#usecallback
  //handleFilesChange is memoised
  //included to avoid warning

  const {getRootProps, getInputProps} = useDropzone({onDrop})


  return (

    
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {    
      <Box p={1}  border={1} boxShadow={10}  width={1}>
      <p>{dropZoneText}</p>  
      </Box>
       }
    </div>

  )
}