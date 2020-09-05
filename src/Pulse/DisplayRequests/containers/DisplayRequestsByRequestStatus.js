import React,{ useState, useEffect } from 'react'
import {getRequestsByRequestState} from '../getRequests'
import DisplayRequestsByRequestStatusTable from '../components/DisplayRequestsByRequestStatusTable'
import ErrorBoundary from 'Pulse/components/ErrorBoundary'
import { sortBy } from 'lodash'

export default function DisplayRequestsByRequestStatus({status}) {

    // console.log(status)
    const [requestArray, setRequests] = useState([]);

    useEffect(() => {

 
        async function fetchData() {
          // You can await here
         // console.log(typeof(setRequests))
          await getRequestsByRequestState(setRequests,status)
          // ...
    
        }
       
       fetchData()
    
       
      },[status]) 

     // console.log(requestArray)

      const sortedArray = sortBy(requestArray, ['projectid'])

      console.log(sortedArray)

      const headers=["ID","Initial Request Made","User","View Details"]
   
      

    return (
      <ErrorBoundary>
        {/* <DisplayRequestsTable rows={requestArray} headers={headers} propertiesToDisplay={propertiesTodDisplay}/> */}
        <DisplayRequestsByRequestStatusTable headers={headers} data={sortedArray} />
     
        </ErrorBoundary>
    )
}

