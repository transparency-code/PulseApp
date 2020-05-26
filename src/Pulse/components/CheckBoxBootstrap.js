import React from 'react'

export default function CheckBoxBootstrap(id,label) {
    return (
        <div  key={id} className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id={id}/>
        <label className="form-check-label" >{label}</label>
      </div>
    )
}
