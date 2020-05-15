import React,{ useState, useEffect } from 'react'
import {getRequestsByRequestState} from './getRequests'
import DisplayRequestsTable from './DisplayRequestsTable'

export default function DisplayRequestsByRequestStatus({status}) {

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

    return (
        <DisplayRequestsTable rows={requestArray}/>
    )
}
