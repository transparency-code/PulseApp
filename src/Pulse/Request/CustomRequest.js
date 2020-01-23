import React from "react";
import FormGroup from '@material-ui/core/FormGroup';
import CheckBoxWithLabel from "Pulse/util/CheckBoxWithLabel";

const customRequest = {
  lined: {
    label: "Lined"
  },

  calcRequired: {
    label: "Calculation Required"
  }
};

const defaultRequestState = {
  lined: false,
  calcRequired: false
};

export default function CustomRequest() {
  const { lined, calcRequired } = customRequest;

  const [requestState, setState] = React.useState(defaultRequestState);

  const handleChange = name => newValue => {
    setState({ ...requestState, [name]: newValue });
  };

  console.log(requestState);

  return (
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
  );
}


//https://material-ui.com/api/form-group/
//FormGroup wraps controls such as Checkbox and Switch. It provides compact row layout.
//row	bool	false	Display group of elements in a compact row.