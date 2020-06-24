//https://material-ui.com/components/selects/
import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';


//Using Form control and styles

//https://material-ui.com/components/text-fields/
const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 240,
  },
}));

//this requires a CurrentSlection and handleChangeProp
export default function Select({selectId, selectLabel, selectList, currentSelection, onSelectionChange}) {

    // console.log(selectId)
    // console.log(selectLabel)
    // console.log(selectOptions)


    const classes = useStyles();

  const handleChange = event => {
    onSelectionChange(event.target.value);
  };

//   console.log(selection)


  return (
 
     <FormControl className={classes.formControl}>
      <InputLabel htmlFor={selectId} >{selectLabel}</InputLabel>
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

        {selectList.map(listItem => (<option key={listItem.value} value={listItem.value}>{listItem.label}</option> ))}

      </NativeSelect>

      </FormControl>

     
  );
}

