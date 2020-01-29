//https://material-ui.com/components/text-fields/
//https://material-ui.com/components/text-fields/#layout
import React from 'react';
import TextField from '@material-ui/core/TextField';


//controlled component. has value and handle Change
export default function BasicTextField({label,type="text",valueProp,handleChangeProp}) {

//  console.log(fullWidth)

  const handleChange = event => {
    let changedValue = event.target.value
    changedValue = type === "number" ? Number(changedValue) : changedValue
    handleChangeProp(changedValue)
  };

  return (

       <TextField id={label} variant="standard" label={label} type={type}  fullWidth value={valueProp} onChange={handleChange} />

  );
}