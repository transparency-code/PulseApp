import React,{ useState, useEffect } from 'react'
import {getRequestsForUserEmail } from '../getRequests'
import ErrorBoundary from 'Pulse/components/ErrorBoundary'
import processStates from 'Pulse/Data/ProcessStates'
import Grid from '@material-ui/core/Grid';
import MUITable from 'Pulse/Table/MUITable'
import { sortBy } from 'lodash'
import getDateStringFromID from 'Pulse/utilfunctions/getDateTImeDisplayStringFromID'
import { navigate } from "@reach/router"


export default function DisplayRequestsByUser({user}) {


  // console.log(user)
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

      const sortedArray = sortBy(requestArray, ['projectid'])

      //console.log(requestArray)

      const headers=["ID","Initial Request Made","Request Status"]


         //return mapped array
         const dataTodisplay = sortedArray.map( row => {
           //console.log(row)
          return {
            projectid: row.projectid,
            date : getDateStringFromID(row.projectid.toString()),
            status : processStates[row.requeststatus]
          }
        })

        function onRowClick(arrayPair) {
          //https://reach.tech/router/api/navigate
          // navigate("/todos", { state: { newId: id } })
          //need email and projectid to retrive project info . primary and sort key
          navigate('/projectdetail', {state : { projectid : arrayPair[0][1] , email : user }}  )
  
    }
    return (
      <ErrorBoundary>
        {/* <DisplayRequestsByUserTable data={requestArray} headers={headers} processStates={processStates}/> */}
        <Grid container>
        <Grid item xs={12} >
        {/* <DisplayRequestsTable rows={requestArray} headers={headers} propertiesToDisplay={propertiesTodDisplay}/> */}
        <MUITable headers={headers} rows={dataTodisplay} rowsPerPage={5} onRowClick={onRowClick}/>
        </Grid>
        </Grid>

      </ErrorBoundary>
        
    )
}
