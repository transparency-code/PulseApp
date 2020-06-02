import React from "react";

//default is text. if none provided
export default function HorizontalFormGroup(id, label,type="text", onTypeChange,) {

  //console.log(type)

    const handleChange = event => {
        let changedValue = event.target.value
        changedValue = ( type === "number" ? Number(changedValue) : changedValue )
        onTypeChange(changedValue)
      };
      
  return (
    <div key={id} className="form-group row">
      <label  className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-10">
        <input type={type} className="form-control" id={id} onChange={handleChange} />
      </div>
    </div>
  );
}
