//https://material-ui.com/components/text-fields/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import RequestTypeTextField from './RequestTypeTextField'
import {getRequestComponent} from './util'



const reqTypes = [
    {
      value: 'Standard PS1',
      label: 'Standard PS1',
    },
    {
      value: 'Custom',
      label: 'Custom',
    }
 
  ];  

  const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));



  

  //reqTypes is in scope
export default function Request() {

    const classes = useStyles();

      // console.log(selectTypes)
  const defaultSelection = reqTypes[0].value;
  const [selection, setSelection] = React.useState(defaultSelection);

  const handleChange = event => {
    setSelection(event.target.value);
  };

 

 console.log(selection)
  return (
 
        <form className={classes.root}>
        <RequestTypeTextField selectTypes={reqTypes} selection={selection} onSelectChange={setSelection} />
        {getRequestComponent()}
        </form>
        
        
 
    
  );
}
