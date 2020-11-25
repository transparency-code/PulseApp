
import React, {useState} from 'react';
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

export default function AddCard({titleText,placeholderTextForInput,listEmptyMsg, list,handleAdd, loading}) {

 //console.log(loading)

  const classes = useStyles();

  const [value, setValue] = useState('');

// console.log(value)



  return (
    <Card className={classes.root}>
      <CardContent>   
      <CardHeader

        title={titleText}

      />
      <ListDisplay emptyMsg={listEmptyMsg} listArray={list} /> 
         <input className="form-control mt-4" type="text" placeholder={placeholderTextForInput}  onChange={(event) => setValue(event.target.value)} ></input>

         <DoneButton 
         label={"Add"}
        execFunc={() => handleAdd(value)}
        loading={loading}
    
         />

      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  );
}