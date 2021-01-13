import React from 'react';
import AddStaff from './AddStaff'
import EditRequestStep from './EditRequestStep'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export default function SystemAndProcess(props) {
    return (
        <Grid container>
             <Grid item xs={12} md={6}>

             <Box component="div" p={2}>
            <AddStaff/>
            </Box>

            </Grid>

            <Grid item xs={12} md={6}>
            <Box component="div" p={2}>
            <EditRequestStep/>
            </Box>
            </Grid>
            
       </Grid>
    );
}

