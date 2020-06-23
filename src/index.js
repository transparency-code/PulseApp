import React from 'react';
import ReactDOM from "react-dom";
import App from './App'
import ContextErrorProvider from 'Pulse/providers/ContextErrorProvider'
import NotificationBar from 'Pulse/components/NotificationBar'

//bootstrap links
//https://getbootstrap.com/docs/4.0/components/navs/
// const navlinks = (
//   <ul className="nav">
//   <li className="nav-item">
//     <a className="nav-link active" href="/createRequest">Create Request</a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link" href="/displayinitial">Display Initial Requests</a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link" href="displayuser">Display User Requests</a>
//   </li>
// </ul>
// )

ReactDOM.render(
  <ContextErrorProvider>
  <App/>
  <NotificationBar/>
  </ContextErrorProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
