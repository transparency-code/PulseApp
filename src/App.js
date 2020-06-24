import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Request from "Pulse/RequestSelection"
import DisplayRequestsByRequestStatus from "Pulse/DisplayRequests/containers/DisplayRequestsByRequestStatus"
import DisplayRequestsByUser from "Pulse/DisplayRequests/containers/DisplayRequestsByUser"
import { Router} from "@reach/router"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import theme from './theme'
import { ThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';
import {requestStates} from "AWS/constants"
import 'bootstrap/dist/css/bootstrap.css';



function App() {

  //bootstrap links
//https://getbootstrap.com/docs/4.0/components/navs/
const navlinks = (
  <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" href="/createRequest">Create Request</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/displayinitial">Display Initial Requests</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="displayuser">Display User Requests</a>
  </li>
</ul>
)

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {/* <Request /> */}
        <AppBar position="static">
          <Toolbar>
            {/* https://stackoverflow.com/questions/47686456/whats-the-right-way-to-float-right-or-left-using-the-material-ui-appbar-with-ma */}
            {/* "Flex: 1" means "flex-grow: 1" which means that  element should receive all the used space, That pushes the next item to left */}
            <div style={{ flex: 1 }}></div>
            {navlinks}
          </Toolbar>
        </AppBar>
        <Router>
          <Request path="/createRequest" />
          <DisplayRequestsByRequestStatus
            path="/displayinitial"
            status={requestStates.initialRequest}
          />
          <DisplayRequestsByUser path="/displayuser" user={"sht@der.com"} />
        </Router>

        {/* Providing a snackBarMesage Component from Root Level */}

        
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
