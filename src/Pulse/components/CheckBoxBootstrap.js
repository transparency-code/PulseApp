import React from 'react'

export default function CheckBoxBootstrap(id,label,onCheckedChange) {


  const handleChange = event => {
    const changedState = event.target.checked
    //console.log(changedState)
    onCheckedChange(changedState);
  };

    return (
        <div  key={id} className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id={id} onChange={handleChange} />
        <label className="form-check-label" >{label}</label>
      </div>
    )
}
