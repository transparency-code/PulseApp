//https://material-ui.com/components/tables/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import getDateStringFromID from 'Pulse/utilfunctions/getDateStringFromID'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function DisplayRequestsTable({rows, headers,propertiesToDisplay}) {

  console.log(propertiesToDisplay[1])
  const classes = useStyles();

  return (
      <Box mx={10} py={5}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>

            {headers.map( (header,index) => 
              <TableCell key={index}>
                 <b>{header}</b>
                  </TableCell>
            )}
          
          </TableRow>
        </TableHead>
        
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.sortId}>

              {/* first cell always date. so that it can be converted to proper string format */}
              <TableCell component="th" scope="row">
              {getDateStringFromID(row.sortId.toString())}
              </TableCell>
              <TableCell align="left">{ row[propertiesToDisplay[1]] }</TableCell>
              <TableCell align="left"><Button variant="contained">View Details</Button></TableCell>        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}