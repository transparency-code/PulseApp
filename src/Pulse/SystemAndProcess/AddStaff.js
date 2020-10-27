import React, {useState, useEffect} from 'react';
import AddCard from 'Pulse/components/AddCard'
import useNotification from "Pulse/hooks/useNotification";

//https://medium.com/better-programming/understanding-the-useeffect-dependency-array-2913da504c44
export default function AddStaff({notificationFunc, addStaffFunc, getStaffListFunc}) {


    const [currentStaffList, setCurrentStaffList] = useState([]);

    const { addNotification } = useNotification();

    //get current staff list
  useEffect(() => {
    async function fetchData() {
      await getStaffListFunc(setCurrentStaffList);
    }


    //reducing re-render
        fetchData();

        console.log(currentStaffList)

    
  }, []);


 

    async function handleSubmit(event) {

        const addToList = true

        const newStaffEmail = "d"

        const responseCode = await addStaffFunc(newStaffEmail, addNotification)

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
            <AddCard titleText={'Alottment Staff'} placeholderTextForInput={"Add Staff here."} listEmptyMsg={"No Staff Added"} list={currentStaffList}></AddCard>
    );
}

