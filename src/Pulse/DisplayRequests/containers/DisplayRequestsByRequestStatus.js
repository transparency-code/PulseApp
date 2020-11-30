import React, { useState, useEffect } from 'react'
import { getRequestsByRequestState } from '../getRequests'
import ErrorBoundary from 'Pulse/components/ErrorBoundary'
import { sortBy } from 'lodash'
import Grid from '@material-ui/core/Grid';
import getDateStringFromID from 'Pulse/utilfunctions/getDateTImeDisplayStringFromID'
import MUITable from 'Pulse/Table/MUITable'
import { navigate } from "@reach/router"

// import CircularIndeterminate from 'Pulse/components/CircularIndeterminate';

export default function DisplayRequestsByRequestStatus({ status }) {

  // console.log(status)
  const [requestArray, setRequests] = useState([]);

 // const [loading, setLoading] = useState(true)

  useEffect(() => {


    async function fetchData() {
      // You can await here
      // console.log(typeof(setRequests))
      await getRequestsByRequestState(setRequests, status)
      // ...

    }

    fetchData()

    //setLoading(false)

  }, [status])

  // console.log(requestArray)

  const sortedArray = sortBy(requestArray, ['projectid'])

  //console.log(sortedArray)

  const headers = ["ID", "Initial Request Made", "User"]


  //return mapped array
  const dataTodisplay = sortedArray.map(row => {
    return {
      projectid: row.projectid,
      date: getDateStringFromID(row.projectid.toString()),
      user: row.email
    }
  })


  function onRowClick(arrayPair) {
    // console.log(arrayPair)
    // console.log(arrayPair[0][1])
    //https://reach.tech/router/api/navigate
    // navigate("/todos", { state: { newId: id } })
    //need email and projectid to retrive project info . primary and sort key
    navigate('/projectdetail', { state: { projectid: arrayPair[0][1], email: arrayPair[2][1] } })

  }



  //  console.log(headers)
  //  console.log(dataTodisplay)
//console.log(loading)

  // if (loading) {
  //   return (
  //     <CircularIndeterminate />
  //   )
  // }

  return (
    <ErrorBoundary>
      <Grid container>
        <Grid item xs={12} >
          {/* <DisplayRequestsTable rows={requestArray} headers={headers} propertiesToDisplay={propertiesTodDisplay}/> */}
          <MUITable headers={headers} rows={dataTodisplay} rowsPerPage={5} onRowClick={onRowClick} />
          
        </Grid>
      </Grid>
    </ErrorBoundary>
  )
}


