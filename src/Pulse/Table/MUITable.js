import React from 'react';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import StyledTableCell from 'Pulse/Styled/StyledTableCell'
import TableBody from '@material-ui/core/TableBody';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import {toPairs} from 'lodash'
import TablePagination from '@material-ui/core/TablePagination';

const useStyles = makeStyles((theme) => ({

    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 450,
    }
  }));

  
function MUITable({headers, rowsPerPage, rows}) {

    // console.log(headers)
    // console.log(rowsPerPage)
    // console.log(rows)

    const classes = useStyles();

    const [page, setPage] = React.useState(0);

    const handleClick = (event, name) => {
        console.log(name)
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (

            <Paper className={classes.paper} component="div">

                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                        aria-label="MUItable"
                    >
                       {/* table head*/}
                       <TableHead>
          <TableRow>
        {headers.map( (header,index) => <StyledTableCell key={index}>{header}</StyledTableCell>)}
        </TableRow>
        </TableHead>

        {/* table body */}
        <TableBody>

{
rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row,index) => {

const objToArrayPair = toPairs(row)

// console.log(row)
// console.log(objToArrayPair)

        return (
            <TableRow
                hover
                onClick={(event) => handleClick(event, row.name)}
                //role="checkbox"
                tabIndex={-1}
                key={index}

            >
                 { objToArrayPair.map( (pair,index) => {
           
                      return( <TableCell key={index} align="left"  >{pair[1]}</TableCell> )
                 })}

            </TableRow>
        );
    })
    }

{emptyRows > 0 && (
                        <TableRow style={{ height: 52.5 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}

</TableBody>
                        
                    </Table>
                </TableContainer>
                <TablePagination

                    rowsPerPageOptions={[]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}

                />
            </Paper>

    );
}

export default MUITable;