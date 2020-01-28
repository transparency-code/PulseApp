//https://material-ui.com/components/selects/
import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

//this requires a CurrentSlection and handleChangeProp
export default function Select({selectId, selectLabel, selectList, currentSelectionProp, handleChangeProp}) {

    // console.log(selectId)
    // console.log(selectLabel)
    // console.log(selectOptions)



  const handleChange = event => {
    handleChangeProp(event.target.value);
  };

//   console.log(selection)


  return (
    <div>
      <InputLabel htmlFor={selectId}>{selectLabel}</InputLabel>
      <NativeSelect
        value={currentSelectionProp}
        onChange={handleChange}
          //https://material-ui.com/api/native-select/
          //object Attributes applied to the select element.
        inputProps={{
          name: selectLabel,
          id: selectId
        }}
      >

        {selectList.map(listItem => (<option key={listItem.value} value={listItem.value}>{listItem.label}</option> ))}

      </NativeSelect>
    </div>
  );
}

