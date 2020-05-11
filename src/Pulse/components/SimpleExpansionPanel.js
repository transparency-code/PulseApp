//https://material-ui.com/components/expansion-panels/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanelItem from 'Pulse/components/ExpansionPanelItem'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel(projectsArray) {
  const classes = useStyles();

  //console.log(projectsArray)
  const expansioPanelItems = projectsArray.map( (project) => 
     <ExpansionPanelItem key={project.projectId} {...project} />
  )

  return (
    <div className={classes.root}>
      {expansioPanelItems}
    </div>
  );
}