import React from 'react';
import ListAddDelete from 'Pulse/SystemAndProcess/containers/ListAddDelete'
import getStaffListFunction from './getStaffList'
import addStaffFunction from './addStaffFunc'
import deleteStaffFunction from './deleteStaffFunc'
import validateEmail from 'Pulse/utilfunctions/validateEmail'


function AddStaff(props) {
    return (
       <ListAddDelete 
         getListFunc={getStaffListFunction}
         addToListFunc={addStaffFunction}
         deleteFromListFunc={deleteStaffFunction}
         cardTitle={'Alottment Staff'}
         inputPlaceHolderText={"Add Staff Email here."}
         listemptyMsg={"No Staff Added"}
         validateFunc={validateEmail}
         deleteDialogTitle={"Delete Staff"}
       />
    );
}

export default AddStaff;