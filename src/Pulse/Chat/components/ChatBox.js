import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import StyledTableCell from 'Pulse/Styled/StyledTableCell'
import ChatItem from 'Pulse/Chat/components/ChatItem'

export default function ChatBox({ data = [], page, onChangePage }) {


    const rowsPerPage = 5
    // console.log(rowsInPage)

    console.log(page)

    // console.log(onChangePage)

    const rowsInPage = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
        <div>
            <TableContainer>
                <Table
                    //   className={classes.table}
                    aria-labelledby="chatTable"
                    size={'medium'}
                    aria-label="chatTable"
                >

                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Chat Box</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell>
                                {
                                    rowsInPage.map((row) => {
                                        console.log(row)
                                        return <ChatItem key={row.timestamp} timestamp={row.timestamp.toString()} chatEmail={row.email} chatString={row.message} />
                                    })
                                }
                            </TableCell>
                        </TableRow>

                        {emptyRows > 0 && (
                            // height is reuired for making it visible
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>


                </Table>
            </TableContainer>

            {/* Pagination outside container */}
            <TablePagination
                component="div"
                //this should be the entire count
                count={data.length}
                onChangePage={onChangePage}
                page={page}
                rowsPerPage={5}
                rowsPerPageOptions={[]}

            />
        </div>
    );
}

// export default ChatBox;