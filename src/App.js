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
import getProjStatus from 'Pulse/ProjectDetail/getProjStatus'
import saveStageinDynamo from 'Pulse/ProjectDetail/saveStageinDynamo'
import SystemAndProcess from 'Pulse/SystemAndProcess/AddStaff'
import addStaffFunc from 'Pulse/SystemAndProcess/addStaffFunc'
import getStaffList from 'Pulse/SystemAndProcess/getStaffList'



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

          <ProjectDetailStaff path="/projectdetail" getProjectDetailsFunc={getProjectDetails } getProjStatusFunc={getProjStatus} saveStageInDynamoFunc={saveStageinDynamo} isAdmin={true}/>

     
         <SystemAndProcess path="/admin" addStaffFunc={addStaffFunc} getStaffListFunc={getStaffList}/> 
    
        </Router>
        </ErrorBoundary>

        </Layout>

        <NotificationBar/>
        </NotificationContextProvider>
  );
}

export default App;
