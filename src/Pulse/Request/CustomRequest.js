import React from "react";
import CheckBoxWithLabel from "Pulse/util/CheckBoxWithLabel";

const customRequest = {
  lined: {
    label: "Lined",
    value: true
  }
};

const defaultRequestState = {
  lined: true
};

export default function CustomRequest() {
  const { lined } = customRequest;

  const [requestState, setState] = React.useState(defaultRequestState);

  const handleChange = name => newValue => {
    setState({ ...requestState, [name]: newValue });
  };

//  console.log(requestState);

  return (
    <div>
      <CheckBoxWithLabel
        {...lined}
        checkedProp={requestState.lined}
        onCheckedChange={handleChange("lined")}
      />
    </div>
  );
}
