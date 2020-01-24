import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import CheckBoxWithLabel from "Pulse/util/CheckBoxWithLabel";
import BasicTextField from "Pulse/util/BasicTextField";
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));


const customRequest = {
  lined: {
    label: "Lined"
  },

  calcRequired: {
    label: "Calculation Required"
  },

  buildingEnvelope: {
    label: "Building Envelope",
  },

  length: {
    label: "Length(mm)",
    type : "number"
  }
};

const defaultRequestState = {
  lined: false,
  calcRequired: false,
  buildingEnvelope: "",
  length: ""
};


export default function CustomRequest() {
  const { lined, calcRequired, buildingEnvelope, length } = customRequest;

  const [requestState, setState] = React.useState(defaultRequestState);

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
