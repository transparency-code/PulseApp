import React, { useEffect, useState } from "react";
import { textBoxItems,chkedItemsWithLabels } from "Pulse/CustomRequest/CustomRequest.data";
import getCheckedItems from "Pulse/ProjectDetail/getCheckedItems";
import getTxtItems from "Pulse/ProjectDetail/getTxtItems";
//import getCheckedItems from "Pulse/ProjectDetail/getTxtItems";
import StaffViewList from 'Pulse/ProjectDetail/components/ProjectDetailStaffView'
import Stepper from 'Pulse/components/Stepper'
import steps from 'Pulse/Data/ProcessStates'


export default function ProjectDetailStaff({ location,getDetailFunc,  isAdmin }) {
  const { state } = location;

  const { email, projectid } = state;

  //  console.log(email)
  // console.log(projectid)

 

  const [data, setData] = useState({});

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
        <Stepper steps={steps} />
        </div>

  )
}

//https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/
//https://aws.amazon.com/blogs/database/using-sort-keys-to-organize-data-in-amazon-dynamodb/
