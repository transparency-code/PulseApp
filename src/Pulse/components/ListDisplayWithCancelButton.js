import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


export default function ListDisplayWithCancelButton({ emptyMsg, listArray = [] ,deleteFunc}) {


    // console.log(emptyMsg)
    // console.log(listArray)

    const liTree = listArray.map((listItem,index) => {

        console.log(listItem)
        console.log(index)
        return (
            <li className="list-group-item" key={index}>{listItem} 

            <div className="float-right">  
            <DeleteForeverIcon onClick={ (event)=> {deleteFunc(listItem,index)}}/>
            </div>

            </li>
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

ListDisplayWithCancelButton.propTypes = {
    emptyMsg: PropTypes.string.isRequired,
    listArray: PropTypes.array.isRequired
};