import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash'


export default function ListDisplay({ emptyMsg, listArray = [] }) {


    // console.log(emptyMsg)
    // console.log(listArray)

    const liTree = listArray.map((listItem,index) => {

        return (
            <li className="list-group-item" key={index}>{listItem}</li>
        )
       
    })

   

    if (isEmpty(listArray)) {
    
            return (
                <ul className="list-group my-2">
                    <li className="list-group-item">{emptyMsg}</li>
                </ul>
            )
        
    }

    //else, if not empty
    return (
        <ul className="list-group">
            {liTree}
        </ul>
    );
}

ListDisplay.propTypes = {
   // emptyMsg: PropTypes.string.isRequired,
    listArray: PropTypes.array.isRequired
};