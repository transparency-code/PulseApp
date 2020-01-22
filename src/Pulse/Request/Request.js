//https://material-ui.com/components/selects/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "Pulse/util/NativeSelect";
import GetSelectedRequest from './GetSelectedRequest'
import {requestFieldProps, requestOptions} from './constants.js'



const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function Request() {
  const classes = useStyles();

  const [selection, setSelection] = React.useState(requestOptions[0].value);

  const handleChange = event => {
    setSelection(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        {/* {selectId, selectLabel, selectOptions, currentSelection, onSelectionChange} */}
        <NativeSelect {...requestFieldProps} selectOptions={requestOptions} currentSelection={selection} onSelectionChange={setSelection}/>
        <GetSelectedRequest selection={selection} />
      </FormControl>
    </div>
  );
}
