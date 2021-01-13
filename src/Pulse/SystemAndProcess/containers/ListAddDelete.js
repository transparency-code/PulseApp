import React, { useEffect, useState } from "react";
import useNotification from "Pulse/hooks/useNotification";
import Spinner from 'Pulse/components/CircularIndeterminate'
import AddCard from 'Pulse/components/AddCard'
import AlertDialogSlide from 'Pulse/components/AlertDialogSlide'

export default function ListAddDelete({getListFunc , addToListFunc, deleteFromListFunc, cardTitle,inputPlaceHolderText, listemptyMsg,validateFunc , deleteDialogtitle}) {

   // console.log(inputPlaceHolderText)

    const deleteStateDefault = {name:'',index:undefined}

    const [currentList, setCurrentList] = useState(undefined)

    const [itemStateForDelete, setItemStateForDelete] = useState(deleteStateDefault)

    const [dialog, dialogOpen] = React.useState(false);

    const { addNotification } = useNotification();

    // console.log(itemStateForDelete)
    // console.log(dialog)

    useEffect(() => {
       
        async function fetchData() {
           
            await getListFunc(setCurrentList)
            
        }
        fetchData();
        
    }, [getListFunc]);


    async function handleItemAdd(newItem) {

      
            const addToList =  currentList.length === 0 ?   false : true
             const responseCode = await addToListFunc(newItem, addToList,addNotification)
    

            if (responseCode === 200) {
                await refreshList()
              
            }
    
            return responseCode
    
        }


        async function handleItemDelete() {
            const responseCode = await deleteFromListFunc(itemStateForDelete.name,itemStateForDelete.index,addNotification)
    
    
            if (responseCode === 200) {
                await refreshList()
              
            }
    
        }
    

        async function refreshList() {
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(getListFunc(setCurrentList))
                }, 1000)
            })
        }

        if ( currentList === undefined ) return <Spinner/> 


    return (
        <React.Fragment>

        <AddCard 
        cardTitle={cardTitle} 
        inputPlaceHolderText={inputPlaceHolderText} 
        listEmptyMsg={listemptyMsg} 
        listArray={currentList}
        onSubmit={handleItemAdd}
        validateInput={validateFunc}
        dialogOpen={dialogOpen}
        setItemStateForDelete={setItemStateForDelete}
        />
      
        {itemStateForDelete.name !== '' && <AlertDialogSlide dialog={dialog} dialogOpen={dialogOpen}  execFunc={handleItemDelete} dialogTitle={deleteDialogtitle} dialogContent={`Are you sure you want to delete ${itemStateForDelete.name}`}/>}

        </React.Fragment>
     
    );
}


ListAddDelete.defaultProps = {
    validateFunc : () => { return true }
}
