import React from 'react';
import AddCard from 'Pulse/components/AddCard'
import useNotification from "Pulse/hooks/useNotification";
import useGetList from "Pulse/hooks/useGetList";
import handleUIListAdd from 'Pulse/Functional/UIListAdd'
//https://medium.com/better-programming/understanding-the-useeffect-dependency-array-2913da504c44
export default function AddStaff({ notificationFunc, addStaffFunc, getStaffListFunc }) {


    const currentStaffList = useGetList(getStaffListFunc)

   //if currentStaffList is  empty,  this is first staff, addTOList should be false
           const addToList =  currentStaffList.length === 0 ?   false : true

    const { addNotification } = useNotification();

   // const handleStaffAdd = handleAdd(addStaffFunc, addNotification)

    //console.log(handleStaffAdd)

    //get current staff list
    // useEffect(() => {
    //     async function fetchData() {
    //         //await should be inside
    //         setCurrentStaffList(await getStaffListFunc())
    //     }
    //     fetchData();

    //     //removing the dependency aray causes unlimited rerender
    // },[getStaffListFunc]);

    //this return a function that can take a new value
   // const composedFunc = handleUIListAdd(addStaffFunc, addNotification)


    // function handleStaffAdd(value) {
    //    const response = composedFunc(value)
    // //    console.log(response)

    // }

    async function handleStaffAdd(newStaffEmail) {


     
          

        //   console.log(addToList)

         const responseCode = await addStaffFunc(newStaffEmail, addToList,addNotification)

        //https://stackoverflow.com/a/63821006/669577
        if (responseCode === 200) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(getStaffListFunc())
                }, 1000)
            })

        }

        // setLoading(false)




    }
    return (
        <AddCard 
        titleText={'Alottment Staff'} 
        placeholderTextForInput={"Add Staff here."} 
        listEmptyMsg={"No Staff Added"} 
        list={currentStaffList} 
        handleAdd={handleStaffAdd}
        />
      
     
    );
}

