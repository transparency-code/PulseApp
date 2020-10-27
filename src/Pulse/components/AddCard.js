
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

export default function AddCard({titleText,placeholderTextForInput,listEmptyMsg, list}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardContent>   
      <CardHeader

        title={titleText}

      />
      <ListDisplay emptyMsg={listEmptyMsg} listArray={list}/>

         <input className="form-control" type="text" placeholder={placeholderTextForInput}></input>
         <DoneButton label={"Add"} />
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  );
}