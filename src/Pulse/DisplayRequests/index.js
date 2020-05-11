////https://material-ui.com/components/expansion-panels/
import { useState, useEffect } from 'react';
import getInitialRequests from './getRequests'
import SimpleExpansionPanel from 'Pulse/components/SimpleExpansionPanel'


export default function DisplayRequests() {


  // Declare a new state variable, which we'll call "count"
  const [requestArray, setRequests] = useState([]);

  //https://reactjs.org/docs/hooks-effect.html
   //Effect callbacks are synchronous to prevent race conditions. Put the async function inside:
   //https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {

 
    async function fetchData() {
      // You can await here
     // console.log(typeof(setRequests))
      await getInitialRequests(setRequests)
      // ...

    }
   
   fetchData()

   
  },[]);  // Or [] if effect doesn't need props or state

  //console.log(requestArray)


  return SimpleExpansionPanel(requestArray)
}
