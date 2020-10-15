import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';



const StyledChatText = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 12,
      textAlign
    },
  }))(TableCell);

  export  default StyledChatText