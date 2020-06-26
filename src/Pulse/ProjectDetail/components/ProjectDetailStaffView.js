import React from 'react'

export default function ProjectDetailStaffView({checkedItems}) {

    //a filter function whose output that will be used as a parameter to map. cant use assignmnets inside map
    const checkedItemsList = checkedItems.map( (item,index) =>   <li className="list-group-item" key={index}>{item}</li> )
            

    return (
        <div>
            <ul className="list-group">
                {checkedItemsList}
            </ul>
        </div>
    )
}
