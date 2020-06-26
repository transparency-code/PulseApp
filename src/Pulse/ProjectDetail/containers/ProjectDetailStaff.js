import React, { useEffect, useState } from "react";
import { getItemFromDynamo } from "AWS/aws_utils";
import { chkedItems,chkedItemsWithLabels } from "Pulse/CustomRequest/CustomRequest.data";
import getCheckedItems from "Pulse/ProjectDetail/getCheckedItems";
import StaffViewList from 'Pulse/ProjectDetail/components/ProjectDetailStaffView'

export default function ProjectDetailStaff({ location }) {
  const { state } = location;
  const { email, projectid } = state;

  // console.log(email)
  // console.log(projectid)

  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      await getItemFromDynamo(email, projectid, setData);
    }

    fetchData();
  }, [email, projectid]);

 
  //find objects that exists common in retrived and list of booleans
  // const chkedDataArray = intersection(Object.keys(data), Object.keys(chkedState));

  // let checkedTodisplay = []
  // //get label items for the intersected items from array of objects
  // chkBoxItems.map( (item,index) => {
  //   const filteredarr = chkBoxItems.filter((chkBoxItem) =>  chkBoxItem.id === item )
  //   const [chkBoxItemObj] = filteredarr
  //   checkedTodisplay = [...checkedTodisplay, chkBoxItemObj]
  // })

   const CheckedItems = getCheckedItems(data,chkedItems,chkedItemsWithLabels)

  return (
      <StaffViewList checkedItems={CheckedItems} />
  )
}

//https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/
//https://aws.amazon.com/blogs/database/using-sort-keys-to-organize-data-in-amazon-dynamodb/
