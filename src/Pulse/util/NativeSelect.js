//https://material-ui.com/components/selects/
import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

export default function Request({selectId, selectLabel, selectOptions}) {

    // console.log(selectId)
    // console.log(selectLabel)
    // console.log(selectOptions)

  const [selection, setSelection] = React.useState(selectOptions[0].value);

  const handleChange = event => {
    setSelection(event.target.value);
  };

//   console.log(selection)

  return (
    <div>
      <InputLabel htmlFor={selectId}>{selectLabel}</InputLabel>
      <NativeSelect
        value={selection}
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

