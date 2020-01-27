import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import CheckBoxWithLabel from "Pulse/util/CheckBoxWithLabel";
import BasicTextField from "Pulse/util/BasicTextField";
import FormControl from '@material-ui/core/FormControl';
import {CustomRequestUIData, initalCustomRequestState } from './CustomRequest.data'
import { makeStyles } from '@material-ui/core/styles';


//https://material-ui.com/styles/basics/
//https://material-ui.com/styles/basics/#nesting-selectors
//'&' for
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
  //only for top and bottom for each text field child
  formGroup : {
    '& .MuiTextField-root': {
      margin: theme.spacing(1,0),

    },
  },
}));


//MuiFormControl-root
export default function CustomRequest() {
  const { lined, calcRequired, buildingEnvelope, length, width, height, roofPitch } = CustomRequestUIData;

  const [requestState, setState] = React.useState(initalCustomRequestState);

  const handleChange = name => newValue => {
    // console.log(newValue);
    setState({ ...requestState, [name]: newValue });
  };

  const classes = useStyles();

  console.log(roofPitch)
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
      <FormGroup className={classes.formGroup}>
        <BasicTextField
          {...buildingEnvelope}
          valueProp={requestState.buildingEnvelope}
          handleChangeProp={handleChange("buildingEnvelope")
 }
        />
         <BasicTextField
          {...length}
          valueProp={requestState.length}
          handleChangeProp={handleChange("length")}
        />

<BasicTextField
          {...width}
          valueProp={requestState.width}
          handleChangeProp={handleChange("width")}
        />

       <BasicTextField
          {...height}
          valueProp={requestState.height}
          handleChangeProp={handleChange("height")}
        />

<BasicTextField
          {...roofPitch}
          valueProp={requestState.roofPitch}
          handleChangeProp={handleChange("roofPitch")}
        />

      </FormGroup>
      </FormControl>
  );
}

//https://material-ui.com/api/form-group/
//FormGroup wraps controls such as Checkbox and Switch. It provides compact row layout.
//row	bool	false	Display group of elements in a compact row.
