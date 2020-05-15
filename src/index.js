import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Request from "Pulse/RequestSelection"
import DisplayRequestsByRequestStatus from "Pulse/DisplayRequests/DisplayRequestsByRequestStatus"
import { Router, Link } from "@reach/router"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import theme from './theme'
import { ThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';
import {requestStates} from "AWS/constants"
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <ThemeProvider theme={theme}>
    {/* <Request /> */}
    <AppBar position="static">
  <Toolbar>

    {/* https://stackoverflow.com/questions/47686456/whats-the-right-way-to-float-right-or-left-using-the-material-ui-appbar-with-ma */}
    {/* "Flex: 1" means "flex-grow: 1" which means that  element should receive all the used space, That pushes the next item to left */}
    <div style={{ flex: 1 }}></div>
    <nav>
      <Link to="/createRequest">Create Request</Link> |{" "}
      <Link to="/displayinitial">Display Request</Link>
    </nav>
  </Toolbar>
</AppBar>
<Router>
    <Request path="/createRequest" />
    <DisplayRequestsByRequestStatus path="/displayinitial" status={requestStates.initialRequest}/>
  </Router>
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
