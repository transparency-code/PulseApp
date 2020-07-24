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

 

  const [data, setData] = useState({});

  // console.log(data)

  useEffect(() => {
    async function fetchData() {
      await getDetailFunc (email, projectid, setData);
    }

    fetchData();
  }, [email, projectid,getDetailFunc]);

 

  const rowLabels={initialDate :"Initial Request Date", id: "Project ID" , email:"Client Email" , optionsLabel : "Building Options"}

   const checkedItems = getCheckedItems(data,chkedItemsWithLabels)

   const txtItems = getTxtItems(data,textBoxItems)


  //  console.log(data)
  //  console.log(checkedItems)
  //  console.log(txtItems)

  return (
        <div>
        <StaffViewList email={email} projectid={projectid} rowlabels={rowLabels} checkedItems={checkedItems} txtItems={txtItems} files={data.files} />
        
        <Stepper steps={steps} saveStageFunc={saveStageinDynamo} updateKey={{email,projectid}}/>
        </div>

  )
}

//https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/
//https://aws.amazon.com/blogs/database/using-sort-keys-to-organize-data-in-amazon-dynamodb/
