import React from 'react'

export default function StaffViewList({chkedData}) {

    const chkedItems = chkedData.map( (item,index) => 
    <li className="list-group-item" key={index}>{item}</li>
    )
    return (
        <div>
            <ul className="list-group">
                {chkedItems}
            </ul>
        </div>
    )
}
