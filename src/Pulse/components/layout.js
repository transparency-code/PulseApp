import React from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from '@material-ui/core/Box';
//https://material-ui.com/customization/palette/
//https://material-ui.com/customization/color/
import { createMuiTheme  } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import { ThemeProvider } from '@material-ui/core/styles';
// import blue from '@material-ui/core/colors/blue';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

//https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
    palette: {
      primary : {
        main : grey[50],
      },
      // secondary : {
      //   main : blue[300],
      // },
    },
  
  });

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

  
export default function Layout({children}) {
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
            <Box  mx={10} py={5}  >
                {children}
            </Box>
        </ThemeProvider>
        </React.Fragment>
    )
}
