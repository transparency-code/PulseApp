import React, { useEffect, useState } from "react";
import {
  textBoxItems,
  chkedItemsWithLabels,
} from "Pulse/CustomRequest/CustomRequest.data";
import getCheckedItems from "Pulse/ProjectDetail/getCheckedItems";
import getTxtItems from "Pulse/ProjectDetail/getTxtItems";
//import getCheckedItems from "Pulse/ProjectDetail/getTxtItems";
import StaffViewList from "Pulse/ProjectDetail/components/ProjectDetailStaffView";
import Stepper from "Pulse/components/Stepper";
import steps from "Pulse/Data/ProcessStates";
import processStates from "Pulse/Data/ProcessStates";
import useNotification from "Pulse/hooks/useNotification";
import LinearProgressBar from 'Pulse/components/LinearProgressBar'
import { get, isEmpty, has } from 'lodash';
import UIRowLabels from '../UIRowLabels'
import Chatbox from 'Pulse/Chat/ChatBox.js'
import addChat from 'Pulse/Chat/addChat'
import getUpdatedChat from 'Pulse/Chat/getUpdatedChat'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


export default function ProjectDetailStaff({
  location,
  getProjectDetailsFunc,
  getProjStatusFunc,
  saveStageInDynamoFunc,
  isAdmin,
}) {

  // const styles = {

  //   container : {
  //     display:"flex",
  //     flexDirection : "row",
  //     flexWrap : wrap,
  //     justifyContent : "flex-start"
  //   },
  
  //   projectInfo : {
  //     width:'50%',
  //     float: "left"
  //   }
  // }

  // console.log(location)
  const { state } = location;

  const { email, projectid } = state;

  // console.log(projectid)

  const [projDetail, setProjDetail] = useState({});

  //needs to update in stage progess, so seperate statevariable
  //db should not have zero
  const [reqStatus, setReqStatus] = useState(0);
  //console.log(reqStatus)
  

  const { addNotification } = useNotification();



  useEffect(() => {
    async function fetchData() {
      await getProjectDetailsFunc(email, projectid, setProjDetail);
    }

    //reducing re-render
      if (isEmpty(projDetail)) {
        fetchData();
      }
    
     if (has(projDetail,'requeststatus') ) {
       const requestStatus = get(projDetail,'requeststatus')
      setReqStatus(requestStatus);
     }

 

  }, [email, projectid,projDetail,getProjectDetailsFunc]);

  let checkedItems = [];
  let txtItems = [];

  //this is for use in savestage
  const updateKey = { email, projectid }

  async function saveStage(activeStep) {
    // console.log(updateKey)
    // console.log(activeStep)
    //these are async fuctions passed in

    const responseCode  = await saveStageInDynamoFunc(updateKey, activeStep, addNotification)

    //console.log(responseCode)
    if (responseCode === 200) {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(getProjStatusFunc(email,projectid, setReqStatus)) }, 1000)
        })
        
      }
   
  }

  const data = get(projDetail,'data',{})

  const chat = get(projDetail,'chat',{})

  if(!isEmpty(data)) {
    checkedItems = getCheckedItems(data, chkedItemsWithLabels);

    txtItems = getTxtItems(data, textBoxItems);

    
  }


 //console.log(chat)

 
  //render after useEffect
  //https://stackoverflow.com/questions/5113374/javascript-check-if-variable-exists-is-defined-initialized
  //reQStatus has default 0 unless updated from db, if wont render 0
  //LinearProgessbar will be rendered if zero
  if (reqStatus) {
    return (
      <Grid container>
    
    <Grid item xs={12} md={6}>
    <Box component="div" p={2}>
        <StaffViewList
          email={email}
          projectid={projectid}
          //DB stores from 1, array is 0 based
          status={steps[reqStatus-1]}
          rowlabels={UIRowLabels}
          checkedItems={checkedItems}
          txtItems={txtItems}
          files={projDetail.files}
        />
          <Stepper
          steps={steps}
          storedStep={reqStatus}
          saveStageFunc={saveStage}
        //  updateKey={{ email, projectid }}
          labelArray={processStates}
        />
        </Box>
    </Grid>

    <Grid item xs={12} md={6}>
    <Box component="div" p={2}>
    <Chatbox email={email} projectid={projectid} addChatFunc={addChat} getUpdatedChatFunc={getUpdatedChat} DBChatObj={chat} />
    </Box>
      </Grid>
     

  
    </Grid>
    );
  } else {
    return <LinearProgressBar/>
  }
}

//https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/
//https://aws.amazon.com/blogs/database/using-sort-keys-to-organize-data-in-amazon-dynamodb/
