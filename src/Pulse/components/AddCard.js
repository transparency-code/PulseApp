import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import DoneButton from 'Pulse/components/DoneButton'
import ListDisplayWithCancelButton from 'Pulse/components/ListDisplayWithCancelButton'
import ListDisplay from 'Pulse/components/ListDisplay'
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

export default function AddCard({cardTitle,inputPlaceHolderText,listEmptyMsg, listArray, onSubmit, validateInput, dialogOpen, setItemStateForDelete }) {

 //console.log(inputPlaceHolderText)

  const classes = useStyles();

  const [txtValue, settxtValue] = useState('')
  const [button, disableButton] = useState(true)

  // console.log(listArray)
  const deletelist = listArray.slice(1)
  // console.log(deletelist)
  const Nodeletelist = listArray.slice(0,1)
  // console.log(Nodeletelist)

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

        title={cardTitle}

      />
      <ListDisplay listArray={Nodeletelist} />
      <ListDisplayWithCancelButton emptyMsg={listEmptyMsg} listArray={deletelist} dialogOpen={dialogOpen} setItemStateForDelete={setItemStateForDelete}/> 



         <input className="form-control mt-4" type="text" placeholder={inputPlaceHolderText} value={txtValue} onChange={(event) => handleOnChange(event.target.value)} ></input>

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
  cardTitle: PropTypes.string.isRequired,
  inputPlaceHolderText: PropTypes.string.isRequired,
  listEmptyMsg: PropTypes.string.isRequired,
  listArray: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validateInput:PropTypes.func.isRequired
};