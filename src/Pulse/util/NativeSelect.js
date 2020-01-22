//https://material-ui.com/components/selects/
import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

export default function Request({selectId, selectLabel, selectOptions, currentSelection, onSelectionChange}) {

    // console.log(selectId)
    // console.log(selectLabel)
    // console.log(selectOptions)



  const handleChange = event => {
    onSelectionChange(event.target.value);
  };

//   console.log(selection)

  return (
    <div>
      <InputLabel htmlFor={selectId}>{selectLabel}</InputLabel>
      <NativeSelect
        value={currentSelection}
        onChange={handleChange}
          //https://material-ui.com/api/native-select/
          //object Attributes applied to the select element.
        inputProps={{
          name: selectLabel,
          id: selectId
        }}
      >

        {selectOptions.map(item => (<option key={item.value} value={item.value}>{item.label}</option> ))}

      </NativeSelect>
    </div>
  );
}

