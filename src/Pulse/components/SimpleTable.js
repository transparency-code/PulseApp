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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function SimpleTable({rows}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Client</TableCell>
            <TableCell align="left">Initial Request Date</TableCell>
            <TableCell align="left">Progress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.sortId}>
              <TableCell component="th" scope="row">
                {row.hashId}
              </TableCell>
              <TableCell align="left">{row.sortId}</TableCell>
              <TableCell align="left"><Button variant="contained">Details</Button></TableCell>        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}