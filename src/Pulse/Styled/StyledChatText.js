import { useStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

//To remove the need to systematically supply a theme, the default Material-UI theme is
// applied to the re-exported makeStyles, styled, withTheme, useTheme, and withStyles modules.
// Re-export with a default theme
//import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
 root : {

  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },

  body : (props) => 
 
   props.chatBy === "self"
      ? 

 }
  
})

const useStyles = makeStyles({
  root: {
    background: (props) =>
      props.color === 'red'
        ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: (props) =>
      props.color === 'red'
        ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
        : '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: 8,
  },
});

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