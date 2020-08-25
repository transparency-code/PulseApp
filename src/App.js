import React from 'react';
import Request from "Pulse/RequestSelection"
import DisplayRequestByStatusDropdown from "Pulse/DisplayRequests/containers/DisplayRequestByStatusDropdown"
import DisplayRequestsByUser from "Pulse/DisplayRequests/containers/DisplayRequestsByUser"
import { Router} from "@reach/router"
import 'typeface-roboto';
import ProjectDetailStaff from 'Pulse/ProjectDetail/containers/ProjectDetailStaff'
import 'bootstrap/dist/css/bootstrap.css';
import ErrorBoundary from 'Pulse/components/ErrorBoundary'
import Layout from 'Pulse/components/layout'
import NotificationContextProvider from 'Pulse/providers/NotificationContextProvider'
import NotificationBar from 'Pulse/components/NotificationBar'
import getProjectDetails from 'Pulse/ProjectDetail/getProjectDetails'
import getProjStatusOnly from 'Pulse/ProjectDetail/getProjStatusOnly'
import saveStageinDynamo from 'Pulse/ProjectDetail/saveStageinDynamo'




function App() {

  return (

    <NotificationContextProvider>

    <Layout>

      <ErrorBoundary>
        <Router>
          <Request path="/createRequest" />
          {/* <DisplayRequestsByRequestStatus
            path="/displayinitial"
            status={0}
          /> */}
          <DisplayRequestByStatusDropdown  path="/displaybystatus"/>
          <DisplayRequestsByUser path="/displayuser" user={"sht@der.com"} />

          <ProjectDetailStaff path="/projectdetail" getDetailFunc={getProjectDetails } getStatusOnly={getProjStatusOnly} saveStageInDynamo={saveStageinDynamo} isAdmin={true}/>
 
        </Router>
        </ErrorBoundary>

        </Layout>

        <NotificationBar/>
        </NotificationContextProvider>
  );
}

export default App;
