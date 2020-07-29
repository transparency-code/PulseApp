import React, { useEffect, useState } from "react";
import { textBoxItems,chkedItemsWithLabels } from "Pulse/CustomRequest/CustomRequest.data";
import getCheckedItems from "Pulse/ProjectDetail/getCheckedItems";
import getTxtItems from "Pulse/ProjectDetail/getTxtItems";
//import getCheckedItems from "Pulse/ProjectDetail/getTxtItems";
import StaffViewList from 'Pulse/ProjectDetail/components/ProjectDetailStaffView'
import Stepper from 'Pulse/components/Stepper'
import steps from 'Pulse/Data/ProcessStates'
import saveStageinDynamo from 'Pulse/ProjectDetail/saveStageinDynamo'

export default function ProjectDetailStaff({ location,getDetailFunc, isAdmin }) {
  const { state } = location;

  const { email, projectid } = state;


  // console.log(projectid)

 

  const [projDetail, setProjDetail] = useState({});

  // console.log(data)

  useEffect(() => {
    async function fetchData() {
      await getDetailFunc (email, projectid, setProjDetail);
    }

    fetchData();
  }, [email, projectid,getDetailFunc]);

 

  let rowLabels={initialDate :"Initial Request Date", id: "Project ID" , email:"Client Email" , optionsLabel : "Building Options"}

  let checkedItems = []
  let txtItems= []
  let files = []
  let status = ""

  //has retrived data from DynamoDB
  if (projDetail.hasOwnProperty('data')) {
    checkedItems = getCheckedItems(projDetail.data,chkedItemsWithLabels)

    txtItems = getTxtItems(projDetail.data,textBoxItems)

    files = projDetail.files
  }


  if ( projDetail.hasOwnProperty('requeststatus')) {
    rowLabels = { ...rowLabels , status: "Request Status"}
    console.log(steps[projDetail.requeststatus])
    status = steps[projDetail.requeststatus]
  }

  // console.log(rowLabels)
  //  console.log(checkedItems)
  //  console.log(txtItems)

  return (
        <div>
        <StaffViewList email={email} projectid={projectid} status={status} rowlabels={rowLabels} checkedItems={checkedItems} txtItems={txtItems} files={files} />
        
        <Stepper steps={steps} saveStageFunc={saveStageinDynamo} updateKey={{email,projectid}}/>
        </div>

  )
}

//https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/
//https://aws.amazon.com/blogs/database/using-sort-keys-to-organize-data-in-amazon-dynamodb/
