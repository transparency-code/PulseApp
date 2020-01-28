import React from 'react';



//controlled component. has value and handle Change
export default function FileUploadField({label,valueProp,handleChangeProp}) {

//  console.log(fullWidth)

  const handleChange = event => {
    let files = event.target.files
    handleChangeProp(files)
  };

  return (

       <input id={label} variant="filled" label={label} type={"file"}  fullWidth  multiple value={valueProp} onChange={handleChange} />

  );
}