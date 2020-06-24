import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import useNotification from 'Pulse/hooks/useNotification'

//message to display
//openstate, initial is true, as using this component means snackbasr has to be displayed
export default function NotificationBar({notificationState, notificationMessage,closeNotification}) {
 
  const {notification, removeNotification} = useNotification()

  //  console.log(notification)
  // console.log(removeNotification)

  return (
    <div>
      {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={notification.openState}
        //autoHideDuration={6000}
        //onClose={removeNotification}
        message={notification.message}
        action={
          <React.Fragment>
            {/* <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button> */}
            <IconButton size="small" aria-label="close" color="inherit" onClick={removeNotification}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}