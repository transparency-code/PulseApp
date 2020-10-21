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


    const chatsPerPage = 5
    // console.log(rowsInPage)

    //console.log(data)

    // console.log(onChangePage)

    const chatsInPage = data.slice(page * chatsPerPage, page * chatsPerPage + chatsPerPage)
    const emptyRows = chatsPerPage - Math.min(chatsPerPage, data.length - page * chatsPerPage);

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
                        
              
                                {
                                    chatsInPage.map((row,index) => {
                                        return (
                                        <TableRow  key={index} >
                          
                                        {/* No Table cell to avoid to associated padding/margin  */}
                                        {/* <TableCell> */}
                                        <ChatItem   timestamp={row.TimeStamp.toString()} chatEmail={row.Email} chatString={row.Message} />
                                        {/* </TableCell> */}
                                        </TableRow>
                                        )
                                    })
                                }
                            

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