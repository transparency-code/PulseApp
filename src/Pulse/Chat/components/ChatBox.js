// import React from 'react';
// import TableContainer from '@material-ui/core/TableContainer';
// import Table from '@material-ui/core/Table'
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import TableBody from '@material-ui/core/TableBody';
// import TablePagination from '@material-ui/core/TablePagination';
// import StyledTableCell from 'Pulse/Styled/StyledTableCell'

// function ChatBox({rowsPerPage,rowsInPage=[], page, onChangePage}) {

//     console.log(rowsInPage)
//     return (
//         <TableContainer>
//         <Table
//             //  className={classes.table}
//             aria-labelledby="tableTitle"
//             size={'medium'}
//             aria-label="MUItable"
//         >
//             {/* table head*/}
//             <TableHead>
//                 <TableRow>
//                     <StyledTableCell>Chat Box</StyledTableCell>
// </TableRow>
//             </TableHead>

//             <TableBody></TableBody>

//             <TablePagination
     
//                 rowsPerPageOptions={[5,10]}
//                 component="div"
//                 count={rowsInPage.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 onChangePage={onChangePage}
//                 labelRowsPerPage={'Messages Per Page'}
//             />


//         </Table>
//     </TableContainer>
//     );
// }

// export default ChatBox;