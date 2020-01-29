import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

//Pass an inline callback and an array of dependencies.
// useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.

//controlled component. has value and handle Change
export default function FileUploadField({label,uploadedFilesProp,handleChangeProp}) {

//  console.log(fullWidth)

//https://developer.mozilla.org/en-US/docs/Web/API/FileList
//An object of this type is returned by the files property of the HTML <input> element

  const handleChange = event => {
    let fileList = event.target.files
    console.log(fileList)
    handleChangeProp(fileList)
  };

Object.keys(uploadedFilesProp).map( (key, index) => {
          console.log( GetNameAndSize(uploadedFilesProp[key]) )
  })

  


  return (

       <input id={label} variant="filled" label={label} type={"file"} multiple  onChange={handleChange} />

      
  );
}