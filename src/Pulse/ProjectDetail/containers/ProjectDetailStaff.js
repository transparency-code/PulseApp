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
  const [reqStatus, setReqStatus] = useState(0);

  const { addNotification } = useNotification();

  //const [reqStage, setReqStage] = useState(null);

  // console.log(data)

  //called more than once because of gotchas, see console
  useEffect(() => {
    async function fetchData() {
      await getDetailFunc(email, projectid, setProjDetail);
    }

      fetchData();
      //sets reqState  Detail is retrived
      setReqStatus(projDetail.requeststatus);
  }, [email, projectid, projDetail.requeststatus, getDetailFunc]);

  let rowLabels = {
    initialDate: "Initial Request Date",
    id: "Project ID",
    email: "Client Email",
    optionsLabel: "Building Options",
    status: "Current Status",
  };

  let checkedItems = [];
  let txtItems = [];

  async function saveStage(updateKey, activeStep) {
    // console.log(updateKey)
    // console.log(activeStep)
    const result = await saveStageinDynamo(updateKey, activeStep);
    if (result === 200) {
      addNotification(`Set to ${steps[activeStep-1]}`);
      
      //const newStateReponse = await getStatusOnly(email, projectid, ['requeststatus'])
      //const avar = await getStatusOnly(email, projectid, ['requeststatus'])
      setReqStatus(await getStatusOnly(email, projectid, ['requeststatus']))
     // console.log(reqStatus)
    }
    
  }

  //has retrived data from DynamoDB
  if (projDetail.hasOwnProperty("data")) {
    checkedItems = getCheckedItems(projDetail.data, chkedItemsWithLabels);

    txtItems = getTxtItems(projDetail.data, textBoxItems);
  }

  //empty object first
  //gets details after useEffect
  //console.log(projDetail)

  //render after useEffect
  //https://stackoverflow.com/questions/5113374/javascript-check-if-variable-exists-is-defined-initialized
  //reQStatus has default 0 unless updated from db, if wont render 0
  if (reqStatus) {
    return (
      <div>
        <StaffViewList
          email={email}
          projectid={projectid}
          //DB stores from 1, array is 0 based
          status={steps[reqStatus-1]}
          rowlabels={rowLabels}
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
    );
  } else {
    return null;
  }
}

//https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/
//https://aws.amazon.com/blogs/database/using-sort-keys-to-organize-data-in-amazon-dynamodb/
