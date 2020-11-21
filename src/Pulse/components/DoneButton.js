import React from 'react';

export default function DoneButton({label, execFunc, StyleObject={}}) {
    return (
        <button type="button" className="my-4 btn btn-secondary"  style={StyleObject} onClick={() => execFunc()}>{label}</button>
    );
}

