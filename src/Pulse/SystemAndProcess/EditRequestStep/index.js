import React from 'react';
import ListAddDelete from 'Pulse/SystemAndProcess/containers/ListAddDelete'
import getProcessListFunction from './getProcessList'
import addProcessFunction from './addProcessFunc'
import deleteProcessFunction from './deleteProcessFunc'



export default  function EditRequestStep(props) {
    return (
       <ListAddDelete 
         getListFunc={getProcessListFunction}
         addToListFunc={addProcessFunction}
         deleteFromListFunc={deleteProcessFunction}
         cardTitle={'Request Status'}
         inputPlaceHolderText={"Add Process"}
         listemptyMsg={"No Process other than Initial Request"}
         firstItemAlwaysOn={true}
         //validateFunc={validateEmail}
         deleteDialogTitle={"Delete Process"}
       />
    );
}

