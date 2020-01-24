import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import CheckBoxWithLabel from "Pulse/util/CheckBoxWithLabel";
import BasicTextField from "Pulse/util/BasicTextField";
import FormControl from '@material-ui/core/FormControl';
import {CustomRequestUIData, initalCustomRequestState } from './CustomRequest.data'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));



export default function CustomRequest() {
  const { lined, calcRequired, buildingEnvelope, length } = CustomRequestUIData;

  const [requestState, setState] = React.useState(initalCustomRequestState);

  const handleChange = name => newValue => {
    // console.log(newValue);
    setState({ ...requestState, [name]: newValue });
  };

  const classes = useStyles();

  console.log(requestState);

  return (

      <FormControl className={classes.formControl}>
      <FormGroup row>
        <CheckBoxWithLabel
          {...lined}
          checkedProp={requestState.lined}
          onCheckedChange={handleChange("lined")}
        />

        <CheckBoxWithLabel
          {...calcRequired}
          checkedProp={requestState.calcRequired}
          onCheckedChange={handleChange("calcRequired")}
        />
      </FormGroup>
      <FormGroup>
        <BasicTextField
          {...buildingEnvelope}
          valueProp={requestState.buildingEnvelope}
          handleChangeProp={handleChange("buildingEnvelope")}
        />
         <BasicTextField
          {...length}
          valueProp={requestState.length}
          handleChangeProp={handleChange("length")}
        />
      </FormGroup>
      </FormControl>
  );
}

//https://material-ui.com/api/form-group/
//FormGroup wraps controls such as Checkbox and Switch. It provides compact row layout.
//row	bool	false	Display group of elements in a compact row.
