import React from 'react';

export default function DoneButton({label, DoneFunc, StyleObject={}}) {
    return (
        <button type="button" className="my-4 btn btn-secondary"  style={StyleObject} onClick={() => DoneFunc()}>{label}</button>
    );
}

