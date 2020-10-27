import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash'

export default function ListDisplay({ emptyMsg, listArray = [] }) {

    const UITree = listArray.map((listItem) => {

        return (
            <li className="list-group-item">{listItem}</li>
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
            {UITree}
        </ul>
    );
}

ListDisplay.propTypes = {
    emptyMsg: PropTypes.string.isRequired,
    listArray: PropTypes.array.isRequired
};