import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import DoneButton from 'Pulse/components/DoneButton'
import ListDisplayWithCancelButton from 'Pulse/components/ListDisplayWithCancelButton'
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

export default function AddCard({titleText,placeholderTextForInput,listEmptyMsg, list, onSubmit, validateInput,deleteFunc}) {

 //console.log(loading)

  const classes = useStyles();

  const [txtValue, settxtValue] = useState('')
  const [button, disableButton] = useState(true)

  function handleOnChange(newValue) {
    settxtValue(newValue)
    const valid = validateInput(newValue)
    if (valid){
      disableButton(false)
    }
    else {
      disableButton(true)
    }
  }

  //prevents adding a null when async in action
  async function handleOnSubmit() {
    disableButton(true)
    const resCode = await onSubmit(txtValue)
    if (resCode === 200) settxtValue("")
    disableButton(false)
  }

  return (
    <Card className={classes.root}>
      <CardContent>   
      <CardHeader

        title={titleText}

      />
      <ListDisplayWithCancelButton emptyMsg={listEmptyMsg} listArray={list} deleteFunc={deleteFunc} /> 



         <input className="form-control mt-4" type="text" placeholder={placeholderTextForInput} value={txtValue} onChange={(event) => handleOnChange(event.target.value)} ></input>

         <DoneButton 
         label={"Add"}
        execFunc={() => handleOnSubmit(txtValue)}
        loading={button}
         />

      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  );
}

AddCard.propTypes = {
  titleText: PropTypes.string.isRequired,
  placeholderTextForInput: PropTypes.string.isRequired,
  listEmptyMsg: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validateInput:PropTypes.func.isRequired
};