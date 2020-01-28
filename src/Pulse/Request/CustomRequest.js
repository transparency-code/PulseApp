import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import CheckBoxWithLabel from "Pulse/util/CheckBoxWithLabel";
import BasicTextField from "Pulse/util/BasicTextField";
import FormControl from "@material-ui/core/FormControl";
import FileUploadField from "Pulse/util/FileUploadField";
import {
  CustomRequestUIData,
  initalCustomRequestState
} from "./CustomRequest.data";
import { makeStyles } from "@material-ui/core/styles";

//https://material-ui.com/styles/basics/
//https://material-ui.com/styles/basics/#nesting-selectors
//'&' for
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  },
  //only for top and bottom for each text field child
  formGroup: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1, 0),
      width: 200
    }
  }
}));

//MuiFormControl-root
export default function CustomRequest() {
  const {
    lined,
    calcRequired,
    openAwning,
    lintelDesign,
    enclosedAwning,
    garaport,
    buildingEnvelope,
    length,
    width,
    height,
    roofPitch,
    bayNumber,
    baySize,
    mezzanineFloor,
    foundation,
    latlong,
    fileUploads
  } = CustomRequestUIData;

  const [requestState, setState] = React.useState(initalCustomRequestState);

  const handleChange = name => newValue => {
    // console.log(newValue);
    setState({ ...requestState, [name]: newValue });
  };

  const classes = useStyles();

  console.log(roofPitch);
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

        <CheckBoxWithLabel
          {...openAwning}
          checkedProp={requestState.openAwning}
          onCheckedChange={handleChange("openAwning")}
        />

        <CheckBoxWithLabel
          {...enclosedAwning}
          checkedProp={requestState.onclosedAwning}
          onCheckedChange={handleChange("enclosedAwning")}
        />

        <CheckBoxWithLabel
          {...garaport}
          checkedProp={requestState.garaport}
          onCheckedChange={handleChange("garaport")}
        />

        <CheckBoxWithLabel
          {...lintelDesign}
          checkedProp={requestState.lintelDesign}
          onCheckedChange={handleChange("lintelDesign")}
        />
      </FormGroup>

      <FormGroup className={classes.formGroup}>
        {/* {selectId, selectLabel, selectList, currentSelection, onSelectionChange} */}
        {/* <NativeSelect {...lintelDesign} currentSelectionProp={requestState.lintelDesign}  handleChangeProp={handleChange("lintelDesign") }/> */}

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

        <BasicTextField
          {...bayNumber}
          valueProp={requestState.bayNumber}
          handleChangeProp={handleChange("bayNumber")}
        />

        <BasicTextField
          {...baySize}
          valueProp={requestState.baySize}
          handleChangeProp={handleChange("baySize")}
        />

        <BasicTextField
          {...mezzanineFloor}
          valueProp={requestState.mezzanineFloor}
          handleChangeProp={handleChange("mezzanineFloor")}
        />

<BasicTextField
          {...foundation}
          valueProp={requestState.foundation}
          handleChangeProp={handleChange("foundation")}
        />

<BasicTextField
          {...latlong}
          valueProp={requestState.latlong}
          handleChangeProp={handleChange("latlong")}
        />

        
<FileUploadField
          {...fileUploads}
          valueProp={requestState.fileUploads}
          handleChangeProp={handleChange("fileUpoads")}
        />
      </FormGroup>
    </FormControl>
  );
}

//https://material-ui.com/api/form-group/
//FormGroup wraps controls such as Checkbox and Switch. It provides compact row layout.
//row	bool	false	Display group of elements in a compact row.
