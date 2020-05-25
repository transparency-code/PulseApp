import React,{ useState, useEffect } from 'react'
import {getRequestsForUserEmail } from '../getRequests'
import ErrorBoundary from 'Pulse/components/ErrorBoundary'
import DisplayRequestsByUserTable from '../components/DisplayRequestsByUserTable'



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

      //console.log(requestArray)

      const headers=["Initial Request Data","Request Status","View Details"]

    return (
      <ErrorBoundary>
        <DisplayRequestsByUserTable data={requestArray} headers={headers} />
      </ErrorBoundary>
        
    )
}
