import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import CheckBoxWithLabel from "Pulse/components/CheckBoxWithLabel";
import BasicTextField from "Pulse/components/BasicTextField";
import DisplayFilesWithDeleteOption from "Pulse/components/DisplayFilesWithDeleteOption";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import ReactDropZone from 'Pulse/components/ReactDropZone'
import {
  CustomRequestUIData,
  initialCustomRequestState,
} from "./CustomRequest.data";
import { makeStyles } from "@material-ui/core/styles";

//https://material-ui.com/styles/basics/
//https://material-ui.com/styles/basics/#nesting-selectors
//'&' for
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  //only for top and bottom for each text field child
  formGroup: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1, 0),
      width: 200,
    },
  },

  dropZone: {
    margin: theme.spacing(1, 0),
  },

  button: {
    margin: theme.spacing(1),
    width: 200,
  },
}));

//MuiFormControl-root
export default function CustomRequest(submitFunc) {
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
    //no need to decontruct fileuploads  as change s handled by npm component. his is UI data
  } = CustomRequestUIData;

  const [requestState, setState] = React.useState(initialCustomRequestState);
  
  //console.log(requestState.fileUploads)

  const handleChange = (name) => (newValue) => {
    //console.log(newValue);
    setState({ ...requestState, [name]: newValue });
  };

  //file change should add to the array. deletion is done in sm pther place
  function handleFilesChange(fileArray) {

    const current = requestState.fileUploads

    //https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/
    const newFileArray = current.concat(fileArray)
     // eslint-disable-next-line
    setState({ ...requestState, ['fileUploads']: newFileArray });
  }

  //fileDelete shuld delete the file at index , non mutating
  function handleFileDelete(index) {

    console.log(index)
    const toSplice = requestState.fileUploads

   // https://jaketrent.com/post/remove-array-element-without-mutating/
    toSplice.splice(index,1)

    console.log(toSplice)
    // eslint-disable-next-line
    setState({ ...requestState, ['fileUploads']: toSplice });
  }
 
  const classes = useStyles();

  // console.log(roofPitch);
  //console.log(requestState);
  // console.log(classes)

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

     
            
          
      
           

      </FormGroup>

      <ReactDropZone
            dropZoneText={"Click to select files..."}
            handleFilesChange={handleFilesChange}       
            />

      {DisplayFilesWithDeleteOption(requestState.fileUploads, handleFileDelete)}

      <Button
        variant="contained"
        className={classes.button}
        onClick={() => submitFunc({ requestState }, "sht@der.com")}
      >
        Submit Request
      </Button>
    </FormControl>
  );
}

//https://material-ui.com/api/form-group/
//FormGroup wraps controls such as Checkbox and Switch. It provides compact row layout.
//row	bool	false	Display group of elements in a compact row.
