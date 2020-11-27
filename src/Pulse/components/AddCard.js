
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import DoneButton from 'Pulse/components/DoneButton'
import ListDisplay from 'Pulse/components/ListDisplay'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

export default function AddCard({titleText,placeholderTextForInput,listEmptyMsg, list,txtValue,handleOnChange, onSubmit, buttonState}) {

 //console.log(loading)

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>   
      <CardHeader

        title={titleText}

      />
      <ListDisplay emptyMsg={listEmptyMsg} listArray={list} /> 



         <input className="form-control mt-4" type="text" placeholder={placeholderTextForInput} value={txtValue} onChange={(event) => handleOnChange(event.target.value)} ></input>

         <DoneButton 
         label={"Add"}
        execFunc={() => onSubmit(txtValue)}
        loading={buttonState}
    
         />

      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  );
}