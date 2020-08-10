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


export default function ProjectDetailStaff({
  location,
  getDetailFunc,
  isAdmin,
}) {
  const { state } = location;

  const { email, projectid } = state;

  // console.log(projectid)

  const [projDetail, setProjDetail] = useState({});

  //const [reqStage, setReqStage] = useState(null);

  // console.log(data)

  useEffect(() => {
    async function fetchData() {
      await getDetailFunc(email, projectid, setProjDetail);
    }

    fetchData();
  }, [email, projectid, getDetailFunc]);

  let rowLabels = {
    initialDate: "Initial Request Date",
    id: "Project ID",
    email: "Client Email",
    optionsLabel: "Building Options",
    status: "Current Status",
  };

  let checkedItems = [];
  let txtItems = [];

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
  if (projDetail.hasOwnProperty("requeststatus")) {
    return (
      <div>
        <StaffViewList
          email={email}
          projectid={projectid}
          status={steps[projDetail.requeststatus]}
          rowlabels={rowLabels}
          checkedItems={checkedItems}
          txtItems={txtItems}
          files={projDetail.files}
        />

        <Stepper
          steps={steps}
          storedStep={projDetail.requeststatus}
          saveStageFunc={saveStageinDynamo}
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
