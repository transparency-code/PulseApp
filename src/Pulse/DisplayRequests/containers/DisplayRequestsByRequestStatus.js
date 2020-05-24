import React,{ useState, useEffect } from 'react'
import {getRequestsByRequestState} from '../getRequests'
import DisplayRequestsByRequestStatusTable from '../components/DisplayRequestsByRequestStatusTable'
import ErrorBoundary from '../../components/ErrorBoundary'

export default function DisplayRequestsByRequestStatus({status ="InitialRequest" }) {

    //console.log(status)
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

      //console.log(requestArray)

      const headers=["Initial Request Data","User","View Details"]
   
      

    return (
      <ErrorBoundary>
        {/* <DisplayRequestsTable rows={requestArray} headers={headers} propertiesToDisplay={propertiesTodDisplay}/> */}
        <DisplayRequestsByRequestStatusTable headers={headers} data={requestArray}/>
     
        </ErrorBoundary>
    )
}

