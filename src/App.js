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
import SystemAndProcess from 'Pulse/SystemAndProcess'
import LeftDrawer from 'Pulse/components/LeftDrawer'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';



Amplify.configure(awsconfig);

function App() {

  return (

    <NotificationContextProvider>

<AmplifySignOut />

    {/* <Layout> */}

      <ErrorBoundary>
      <LeftDrawer/>
        <Router>  
          <Request path="/createRequest" />
  
          <DisplayRequestByStatusDropdown  path="/displaybystatus"/>
          <DisplayRequestsByUser path="/displayuser" user={"sht@der.com"} />

          <ProjectDetailStaff path="/projectdetail" getProjectDetailsFunc={getProjectDetails } getProjStatusFunc={getProjStatus} saveStageInDynamoFunc={saveStageinDynamo} isAdmin={true}/>

     
         {/* <SystemAndProcess path="/admin" addStaffFunc={addStaffFunc} getStaffListFunc={getStaffList} deleteStaffFunc={deleteStaffFunc}/>  */}

         <SystemAndProcess path="/admin" />
    
        </Router>
        </ErrorBoundary>

        {/* </Layout> */}

        <NotificationBar/>
        </NotificationContextProvider>
  );
}

export default withAuthenticator(App);
