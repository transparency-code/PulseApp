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
import saveStageinDynamo from "Pulse/ProjectDetail/saveStageinDynamo";
import processStates from "Pulse/Data/ProcessStates";
import useNotification from "Pulse/hooks/useNotification";
import LinearProgressBar from 'Pulse/components/LinearProgressBar'
import { get, isEmpty, has } from 'lodash';
import UIRowLabels from '../UIRowLabels'

export default function ProjectDetailStaff({
  location,
  getDetailFunc,
  getStatusOnly,
  isAdmin,
}) {
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
      await getDetailFunc(email, projectid, setProjDetail);
    }

    //reducing re-render
      if (isEmpty(projDetail)) {
        fetchData();
      }
    
     if (has(projDetail,'requeststatus') ) {
       const requestStatus = get(projDetail,'requeststatus')
      setReqStatus(requestStatus);
     }
  }, [email, projectid,projDetail,getDetailFunc]);

  let checkedItems = [];
  let txtItems = [];

  async function saveStage(updateKey, activeStep) {
    // console.log(updateKey)
    // console.log(activeStep)
     await saveStageinDynamo(updateKey, activeStep, getStatusOnly, setReqStatus, addNotification);
 
  }

  const data = get(projDetail,'data',{})

  if(!isEmpty(data)) {
    checkedItems = getCheckedItems(projDetail.data, chkedItemsWithLabels);

    txtItems = getTxtItems(projDetail.data, textBoxItems);
  }


  //empty object first
  //gets details after useEffect
  //console.log(projDetail)

  //render after useEffect
  //https://stackoverflow.com/questions/5113374/javascript-check-if-variable-exists-is-defined-initialized
  //reQStatus has default 0 unless updated from db, if wont render 0
  //LinearProgessbar will be rendered if zerp
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
    </div>
    );
  } else {
    return <LinearProgressBar/>
  }
}

//https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/
//https://aws.amazon.com/blogs/database/using-sort-keys-to-organize-data-in-amazon-dynamodb/
