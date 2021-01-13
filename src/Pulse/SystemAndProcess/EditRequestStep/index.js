import React from 'react';
import ListAddDelete from 'Pulse/SystemAndProcess/containers/ListAddDelete'
import getProcessListFunction from './getProcessList'
import addProcessFunction from './addProcessFunc'
import deleteProcessFunction from './deleteProcessFunc'



function AddStaff(props) {
    return (
       <ListAddDelete 
         getListFunc={getProcessListFunction}
         addToListFunc={addProcessFunction}
         deleteFromListFunc={deleteProcessFunction}
         cardTitle={'Request Status'}
         inputPlaceHolderText={"Add Process"}
         listemptyMsg={"No Process other than Initial Request"}
         //validateFunc={validateEmail}
         deleteDialogTitle={"Delete Process"}
       />
    );
}

export default AddStaff;