import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


//https://material-ui.com/components/dialogs/

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({dialog, dialogOpen, dialogTitle,dialogContent,execFunc}) {


  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  function handleNoConfirm() {
    dialogOpen(false);
  }

  function handleConfirm() {
    execFunc()
    dialogOpen(false);
  }

  // const handleDiClose = () => {
  //   dialogOpen(false);
  // };

  return (
    <div>
   
      <Dialog
        open={dialog}
        TransitionComponent={Transition}
        keepMounted
        //onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {dialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm}>
            Yes
          </Button>
          <Button onClick={handleNoConfirm} >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}