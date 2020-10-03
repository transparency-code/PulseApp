import React from 'React'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 450,
    }
}));

export default function MUITable({rowsPerPage,rows}) {
    const classes = useStyles();

    const [page, setPage] = React.useState(0);


    const rowsPerPage = 5

    const handleClick = (event, name) => {
        console.log(name)
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>

                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                        aria-label="MUItable"
                    >
                        <MUITableHead/>

                        <TableBody>
            

                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {

                    
                            
                                  //  const labelId = `table-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            //role="checkbox"
                                            tabIndex={-1}
                                            key={row.id}
                                          
                                            >
                                        
{/* 
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.id}
                                            </TableCell> */}
                                            <TableCell align="left" >{row.id}</TableCell>
                                            <TableCell align="left">{row.time}</TableCell>
                                            <TableCell align="left">{row.user}</TableCell>
                                            {/* <TableCell align="right">{row.protein}</TableCell> */}
                                        </TableRow>
                                    );
                                })}

                            {/* add empty rows for same view */}
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
        </div>
    );
}