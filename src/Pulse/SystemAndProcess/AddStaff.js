import React, { useEffect, useState } from "react";
import AddCard from 'Pulse/components/AddCard'
import useNotification from "Pulse/hooks/useNotification";
import Spinner from 'Pulse/components/CircularIndeterminate'
import trim from 'lodash/trim'








//import handleUIListAdd from 'Pulse/Functional/UIListAdd'
//https://medium.com/better-programming/understanding-the-useeffect-dependency-array-2913da504c44
export default function AddStaff({ notificationFunc, addStaffFunc, getStaffListFunc }) {

   // console.log(getStaffListFunc)

    const [button, disableButton] = useState(true)

    //https://github.com/facebook/react/issues/7204
    //If state is undefined it will default to an empty object and this would log undefined, but if state is null it doesn't use default params and this would throw an error.
    const [currentStaff, setCurrentStaff] = useState(undefined)

    const [txtValue, settxtValue] = useState('')

    //console.log(currentStaff)

   

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

         disableButton(true)
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
            settxtValue('')
          
        }
        disableButton(false)
       

    }


    //this only deals will disbaling button
    //will have to pass onSubmit also to child component
   function handleOnChange ( newTextValue ) {
       
   // console.log(newTextValue)
       settxtValue(newTextValue)

       const trimmed = trim(newTextValue)
      // console.log(trimmed)

      //  let re = /^\S+@\S+$/
       if( trimmed === '' || !/^\S+@\S+$/.test(trimmed)) {
        disableButton(true)
       }

       else {
        disableButton(false)
       }

   }

   if ( currentStaff === undefined ) return <Spinner/> 

  // console.log(button)
   
// const Form = 
    return (
        <AddCard 
        titleText={'Alottment Staff'} 
        placeholderTextForInput={"Add Staff Email here."} 
        listEmptyMsg={"No Staff Added"} 
        list={currentStaff}
        txtValue={txtValue}
        settxtValue={settxtValue}   
        handleOnChange={handleOnChange}
        onSubmit={handleStaffAdd}
        buttonState ={button}
        />
      
     
    );
}


