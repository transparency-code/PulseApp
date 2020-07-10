import React from 'react';
import Request from "Pulse/RequestSelection"
import DisplayRequestsByRequestStatus from "Pulse/DisplayRequests/containers/DisplayRequestsByRequestStatus"
import DisplayRequestsByUser from "Pulse/DisplayRequests/containers/DisplayRequestsByUser"
import { Router} from "@reach/router"
import 'typeface-roboto';
import {requestStates} from "AWS/constants"
import ProjectDetailStaff from 'Pulse/ProjectDetail/containers/ProjectDetailStaff'
import 'bootstrap/dist/css/bootstrap.css';
import ErrorBoundary from 'Pulse/components/ErrorBoundary'
import Layout from 'Pulse/components/layout'
import NotificationContextProvider from 'Pulse/providers/NotificationContextProvider'
import NotificationBar from 'Pulse/components/NotificationBar'
import getProjectDetails from 'Pulse/ProjectDetail/getProjectDetails'



function App() {

  return (

    <NotificationContextProvider>

    <Layout>

      <ErrorBoundary>
        <Router>
          <Request path="/createRequest" />
          <DisplayRequestsByRequestStatus
            path="/displayinitial"
            status={requestStates.initialRequest}
          />
          <DisplayRequestsByUser path="/displayuser" user={"sht@der.com"} />

          <ProjectDetailStaff path="/projectdetail" getDetailFunc={getProjectDetails } />
        </Router>
        </ErrorBoundary>

        </Layout>

        <NotificationBar/>
        </NotificationContextProvider>
  );
}

export default App;
