import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {toPairs} from 'lodash'


function MUITableBody({ rows, rowsPerPage,  }) {

const [page, setPage] = React.useState(0);

const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);


const handleClick = (event, name) => {
    console.log(name)
};

const handleChangePage = (event, newPage) => {
    setPage(newPage);
};
return (

    <TableBody>

        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {

const objToArrayPair = toPairs(row)

                return (
                    <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        //role="checkbox"
                        tabIndex={-1}
                        key={row.id}

                    >
                         { objToArrayPair.map(pair => {
                              return( <TableCell align="left" >{pair[1]}</TableCell> )
                         })}
                        {/* <TableCell align="left" >{row.id}</TableCell>
                        <TableCell align="left">{row.time}</TableCell>
                        <TableCell align="left">{row.user}</TableCell> */}
                        {/* <TableCell align="right">{row.protein}</TableCell> */}
                    </TableRow>
                );
            })}

{emptyRows > 0 && (
                                <TableRow style={{ height: 52.5 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}

    </TableBody>

    

);
}

export default MUITableBody;