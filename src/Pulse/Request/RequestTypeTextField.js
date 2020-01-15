import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";



export default function RequestTypeTextField({ selectTypes, selection, onSelectChange}) {

  
  

  const handleChange = event => {
    onSelectChange(event.target.value);
  };

  //needs access at state, so inline function
  const RequestTypeTextField = ({selectTypes}) => {
    // console.log(selectTypes)
    return (
      <TextField
        id="request-type"
        select
        label="Request Type"
        value={selection}
        onChange={handleChange}
      >
        {selectTypes.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  };


  return <RequestTypeTextField selectTypes={selectTypes}/>
}
