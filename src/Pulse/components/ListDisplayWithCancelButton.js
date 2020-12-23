import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


export default function ListDisplayWithCancelButton({ emptyMsg, listArray = [] , dialogOpen, setItemStateForDelete}) {

 

    function onDeleteClick(name, index) {
        // console.log(name)
        // console.log(index)
        setItemStateForDelete({name, index})
        dialogOpen(true)
    }

    // function onDeleteConfirm() {
    //     dialogOpen(true)
    //     deleteFunc(listItem,index)
    // }
    // console.log(emptyMsg)
    // console.log(listArray)

    const liTree = listArray.map((listItem,index) => {

        // console.log(listItem)
        // console.log(index)
        return (
            <li className="list-group-item" key={index}>{listItem}

            <div className="float-right">
            <DeleteForeverIcon onClick={ (event)=> {onDeleteClick(listItem,index)}}/>
            {/* <DeleteForeverIcon onClick={ (event)=> {dialogOpen(true)} } /> */}
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