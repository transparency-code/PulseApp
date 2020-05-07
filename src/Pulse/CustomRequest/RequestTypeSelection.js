import React from "react";
import SelectionFields from 'Pulse/components/SelectTextField'



export default function RequestTypeSelection({ selectTypes, selection, onSelectChange}) {

  
  

  const onequestTypeChange = event => {
    onSelectChange(event.target.value);
  };

 //handleChange
  const selectionFields = () => {
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


  return selectionFields()
}
