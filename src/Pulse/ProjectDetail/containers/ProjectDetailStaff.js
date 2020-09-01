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



export default function ProjectDetailStaff({
  location,
  getProjectDetailsFunc,
  getProjStatusFunc,
  saveStageInDynamoFunc,
  isAdmin,
}) {

  // console.log(location)
  const { state } = location;

  const { email, projectid } = state;

  // console.log(projectid)

  const [projDetail, setProjDetail] = useState({});

  //needs to update in stage progess, so seperate statevariable
  //db should not have zero
  const [reqStatus, setReqStatus] = useState(0);

  

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

  function saveStage(updateKey, activeStep) {
    // console.log(updateKey)
    // console.log(activeStep)
    //these are async fuctions passed in
    saveStageInDynamoFunc(updateKey, activeStep, addNotification);
    getProjStatusFunc(email,projectid, setReqStatus)
   
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
      <div className="row">
      <div className="col-6">
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
          updateKey={{ email, projectid }}
          labelArray={processStates}
        />
       </div>

       <div className="col-6">
         <Chatbox email={email} projectid={projectid} addChatFunc={addChat} getUpdatedChatFunc={getUpdatedChat} DBChatObj={chat} />
       </div>
    </div>
    );
  } else {
    return <LinearProgressBar/>
  }
}

//https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/
//https://aws.amazon.com/blogs/database/using-sort-keys-to-organize-data-in-amazon-dynamodb/
