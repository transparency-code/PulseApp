import React, { useEffect, useState } from "react";
import AddCard from 'Pulse/components/AddCard'
import useNotification from "Pulse/hooks/useNotification";

//import handleUIListAdd from 'Pulse/Functional/UIListAdd'
//https://medium.com/better-programming/understanding-the-useeffect-dependency-array-2913da504c44
export default function AddStaff({ notificationFunc, addStaffFunc, getStaffListFunc }) {

   // console.log(getStaffListFunc)

    const [loading, setLoading] = useState(false)

    const [currentStaff, setCurrentStaff] = useState([])

    //console.log(currentStaff)


   //if currentStaffList is  empty,  this is first staff, addTOList should be false
           const addToList =  currentStaff.length === 0 ?   false : true

    const { addNotification } = useNotification();

    useEffect(() => {

        //https://medium.com/javascript-in-plain-english/how-to-use-async-function-in-react-hook-useeffect-typescript-js-6204a788a435
        // Create an scoped async function in the hook
        async function fetchData() {
            //await should be inside
            const list = await getStaffListFunc(setCurrentStaff)
            //console.log(list)
            //setCurrentStaff(list)
        }
        fetchData();

        //removing the dependency aray causes unlimited rerender
    }, [getStaffListFunc]);

    async function handleStaffAdd(newStaffEmail) {

        setLoading(true)
        //   console.log(addToList)
         const responseCode = await addStaffFunc(newStaffEmail, addToList,addNotification)

        //https://stackoverflow.com/a/63821006/669577
        if (responseCode === 200) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(getStaffListFunc(setCurrentStaff))
                }, 1000)
            })
        }
        setLoading(false)
    }

   // console.log(loading)
   
    return (
        <AddCard 
        titleText={'Alottment Staff'} 
        placeholderTextForInput={"Add Staff here."} 
        listEmptyMsg={"No Staff Added"} 
        list={currentStaff} 
        handleAdd={handleStaffAdd}
        loading={loading}
        />
      
     
    );
}

