import React, {useEffect, useState} from 'react'
import Box from '@material-ui/core/Box';
import NativeSelect from 'Pulse/components/NativeSelectParent'
import DisplayRequestsByRequestStatus from 'Pulse/DisplayRequests/containers/DisplayRequestsByRequestStatus'
import {requestFieldProps} from '../constants.js'
import getProcessList from 'Pulse/SystemAndProcess/EditRequestStep/getProcessList'
import {isEmpty} from 'lodash'
import processStates from 'Pulse/Data/ProcessStates.js';


export default function DisplayRequestByStatusDropdown() {

  

    const [state, setState] = useState({
        processStates : [],
        selected: ''
    });


   // let selectList

    useEffect(() => {

        async function fetchData() {
             try {
                const response = await getProcessList()
                setState(prevState => ({...prevState, processStates: response }) )   
             }
             catch (error) {
                console.error(error);
              }
            
             // set selected to first item to propaget doen to child along with selectList defined down
             if(!isEmpty(processStates))  { 
                 setState(prevState => ({...prevState, selected: 0 }) ) 
             }       
         }

         fetchData()

        }, []);

     //   console.log(state)
     
     const selectList =  state.processStates.map( (step,index) => ({ 
        value : index,
        label : step
     })
     )
   

  //  console.log(state.selected)
    return (
        <React.Fragment>
             <NativeSelect {...requestFieldProps} 
             selectList={selectList} 
             currentSelection={state.selected}
              onSelectionChange={ (newSelection) => { setState(prevState => ({...prevState, selected: newSelection }) )   }}
              />

            <Box component="div" mt={4}>
                {/* selection is array based at 0, status starts from 1 */}
                {/* dont display before setting selected */}
                {/* + concateneated strings */}
               { state.selected !== '' && <DisplayRequestsByRequestStatus status={state.selected + 1}/> }
             </Box> 

             <div></div>

        </React.Fragment>
    )
}


