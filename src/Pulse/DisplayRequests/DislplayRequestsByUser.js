import React,{ useState, useEffect } from 'react'
import {getRequestsForUserEmail } from './getRequests'
import DisplayRequestsTable from './DisplayRequestsTable'

export default function DisplayRequestsByUser({user}) {

    const [requestArray, setRequests] = useState([]);

    useEffect(() => {

 
        async function fetchData() {
          // You can await here
         // console.log(typeof(setRequests))
          await getRequestsForUserEmail(setRequests,user)
          // ...
    
        }
       
       fetchData()
    
       
      },[user]) 

      console.log(requestArray)

      const headers=["Initial Request Data","Request Status","View Details"]
      const propertiesTodDisplay=["sortId","requeststatus"]
      

    return (
        <DisplayRequestsTable rows={requestArray} headers={headers} propertiesToDisplay={propertiesTodDisplay}/>
    )
}
