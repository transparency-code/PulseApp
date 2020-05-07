//https://material-ui.com/components/selects/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "Pulse/components/NativeSelect";
import GetSelectedRequest from './GetSelectedRequest'
import {requestFieldProps, requestTypeList} from './constants.js'


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

  const [selection, setSelection] = React.useState(requestTypeList[1].value);


  return (
    <div>
      <FormControl className={classes.formControl}>
        {/* {selectId, selectLabel, selectOptions, currentSelection, onSelectionChange} */}
        <NativeSelect {...requestFieldProps} selectList={requestTypeList} currentSelectionProp={selection} onSelectionChange={ (newValue) => setSelection(newValue) }/>
        <GetSelectedRequest selection={selection} />
      </FormControl>
    </div>
  );
}