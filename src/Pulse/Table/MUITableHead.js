import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import StyledTableCell from 'Pulse/Styled/StyledTableCell'

function MUITableHead({headers}) {
    return (
      <TableHead>
          <TableRow>
        {headers.map(header => <StyledTableCell>{header}</StyledTableCell>)}
        </TableRow>
         </TableHead>
    
    )
  }

export default MUITableHead;