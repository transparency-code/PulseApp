//https://material-ui.com/components/dividers/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

//receives namdatory fields in database to display
export default function InitialRequestItem(projectId,requeststate, client) {
    return (
        <div>
            
        </div>
    )
}
