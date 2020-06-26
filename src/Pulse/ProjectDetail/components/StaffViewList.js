import React from 'react'
import { chkBoxItems } from "Pulse/CustomRequest/CustomRequest.data";

export default function StaffViewList({chkedData}) {

    //a filter function whose output that will be used as a parameter to map. cant use assignmnets inside map
 
       
    
    

    const chkedItems = chkedData.map( (item,index) => {

        // console.log(item)
        // console.log(chkBoxItems)
        const filteredarr = chkBoxItems.filter((chkBoxItem) =>  chkBoxItem.id === item )
        //console.log(arr)
        
        //destructure array to first object
        const [chkBoxItemObj] = filteredarr;
        // console.log(chkBoxItemObj)
        return <li className="list-group-item" key={index}>{chkBoxItemObj.label}</li>
    } ) 
   

    return (
        <div>
            <ul className="list-group">
                {chkedItems}
            </ul>
        </div>
    )
}
