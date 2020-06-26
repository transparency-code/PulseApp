import React, { useEffect, useState } from "react";
import { getItemFromDynamo } from "AWS/aws_utils";
import { chkedState } from "Pulse/CustomRequest/CustomRequest.data";
import intersection from "lodash/intersection";
import StaffViewList from 'Pulse/ProjectDetail/components/StaffViewList'

export default function StaffView({ location }) {
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

 
  const chkedDataArray = intersection(Object.keys(data), Object.keys(chkedState));



  return (
      <StaffViewList chkedData={chkedDataArray} />
  )
}

//https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/
//https://aws.amazon.com/blogs/database/using-sort-keys-to-organize-data-in-amazon-dynamodb/
