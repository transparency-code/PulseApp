import React from 'react';

export default function DoneButton({label, execFunc, StyleObject={}, loading, }) {

   // console.log(loading)
    return (
        <button type="button" disabled={loading} className="my-4 btn btn-secondary"  style={StyleObject} onClick={() => execFunc()}>{label}</button>
    );
}

