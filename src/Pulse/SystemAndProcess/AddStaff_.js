import React, { useEffect, useState } from "react";
import AddCard from 'Pulse/components/AddCard'
import useNotification from "Pulse/hooks/useNotification";
import Spinner from 'Pulse/components/CircularIndeterminate'
import validateEmail from 'Pulse/utilfunctions/validateEmail'
import AlertDialogSlide from 'Pulse/components/AlertDialogSlide'


//import handleUIListAdd from 'Pulse/Functional/UIListAdd'
//https://medium.com/better-programming/understanding-the-useeffect-dependency-array-2913da504c44
export default function AddStaff({ getStaffListFunc , addStaffFunc, deleteStaffFunc }) {

   // console.log(getStaffListFunc)

    const deleteStaffDefault = {name:'',index:undefined}

    //https://github.com/facebook/react/issues/7204
    //If state is undefined it will default to an empty object and this would log undefined, but if state is null it doesn't use default params and this would throw an error.
    //storing staff list
    const [currentStaff, setCurrentStaff] = useState(undefined)


    //sotring the name and index of staff for alert dialof
    const [staffToDelete, setStaffToDelete] = useState(deleteStaffDefault)

    //state of dialog box. open or closed
    const [dialog, dialogOpen] = React.useState(false);


   

    const { addNotification } = useNotification();

    useEffect(() => {
        //https://medium.com/javascript-in-plain-english/how-to-use-async-function-in-react-hook-useeffect-typescript-js-6204a788a435
        // Create an scoped async function in the hook
        async function fetchData() {
            //await should be inside
            await getStaffListFunc(setCurrentStaff)
            //console.log(list)
            //setCurrentStaff(list)
        }
        fetchData();
        //removing the dependency aray causes unlimited rerender
    }, [getStaffListFunc]);

    async function handleStaffAdd(newStaffEmail) {

    //     disableButton(true)
        console.log(newStaffEmail) 
        //if currentStaffList is  empty,  this is first staff, addTOList should be false
        const addToList =  currentStaff.length === 0 ?   false : true
         const responseCode = await addStaffFunc(newStaffEmail, addToList,addNotification)

        //https://stackoverflow.com/a/63821006/669577
        if (responseCode === 200) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(getStaffListFunc(setCurrentStaff))
                }, 1000)
            })
          
        }

        //this is for disbaling button
        return responseCode

    }

    async function handleStaffDelete() {
        const responseCode = await deleteStaffFunc(staffToDelete.name,staffToDelete.index,addNotification)

        //https://stackoverflow.com/a/63821006/669577
        if (responseCode === 200) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(getStaffListFunc(setCurrentStaff))
                }, 1000)
            })
          
        }

    }


    // function validateInput(input) {
    //   const trimmed = trim(input)
    //   if( trimmed === '' || !/^\S+@\S+$/.test(trimmed)) return false

    //   //else
    //   return true

    // }

  console.log(staffToDelete)

   if ( currentStaff === undefined ) return <Spinner/> 

    return (
        <React.Fragment>

        <AddCard 
        titleText={'Alottment Staff'} 
        placeholderTextForInput={"Add Staff Email."} 
        listEmptyMsg={"No Staff Added"} 
        list={currentStaff}
        onSubmit={handleStaffAdd}
        validateInput={validateEmail}
        dialogOpen={dialogOpen}
        setStaffToDelete={setStaffToDelete}
        />
      
        {staffToDelete.name !== '' && <AlertDialogSlide dialog={dialog} dialogOpen={dialogOpen}  execFunc={handleStaffDelete} dialogTitle={"Delete Staff"} dialogContent={`Are you sure you want to delete ${staffToDelete.name}`}/>}

        </React.Fragment>
     
    );
}


