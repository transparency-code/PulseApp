import React,{ useState, useEffect } from 'react'
import {getRequestsByRequestState} from '../getRequests'
import ErrorBoundary from 'Pulse/components/ErrorBoundary'
import { sortBy } from 'lodash'
import Grid from '@material-ui/core/Grid';
import getDateStringFromID from 'Pulse/utilfunctions/getDateDisplayStringFromID'
import MUITable from 'Pulse/Table/MUITable'

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

      //console.log(sortedArray)

      const headers=["ID","Initial Request Made","User"]


      const dataTodisplay = sortedArray.map( row => {
        return {
          projectid: row.projectid,
          date : getDateStringFromID(row.projectid.toString()),
          user : row.email
        }
      })


        
 
  //  console.log(headers)
  //  console.log(dataTodisplay)
      
      

    return (
      <ErrorBoundary>
        <Grid container>
        <Grid item xs={12} >
        {/* <DisplayRequestsTable rows={requestArray} headers={headers} propertiesToDisplay={propertiesTodDisplay}/> */}
        <MUITable headers={headers} rows={dataTodisplay} rowsPerPage={5} />
        </Grid>
        </Grid>
        </ErrorBoundary>
    )
}

