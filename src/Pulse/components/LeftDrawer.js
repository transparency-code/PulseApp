import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const navlinks = (
    <List>
        <ListItem button ><a className="nav-link active" href="/createRequest">Create Request</a></ListItem>
        <ListItem button ><a className="nav-link" href="/displaybystatus">Display Requests By Status</a></ListItem>
        <ListItem button ><a className="nav-link" href="/displayuser">Display User Requests</a></ListItem>
        <ListItem button ><a className="nav-link" href="/admin">SystemAndProcess</a></ListItem>
    </List>
    


//     <ul className="nav">
//     <li className="nav-item">
//       <a className="nav-link active" href="/createRequest">Create Request</a>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link" href="/displaybystatus">Display Requests By Status</a>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link" href="/displayuser">Display User Requests</a>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link" href="/admin">SystemAndProcess</a>
//     </li>
//   </ul>
  )

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    // top: false,
    left: false,
    // bottom: false,
    // right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ left : open });
  };

  const list = (
    <div
    //   className={clsx(classes.list, {
    //     [classes.fullList]: anchor === 'top' || anchor === 'bottom',
    //   })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>

        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {/* {['left', 'right', 'top', 'bottom'].map((anchor) => ( */}
        <React.Fragment>
          <Button onClick={toggleDrawer(true)}>Menu</Button>
          <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer(false)}>
            {navlinks}
          </Drawer>
        </React.Fragment>
      {/* ))} */}
    </div>
  );
}