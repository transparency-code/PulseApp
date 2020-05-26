import React from "react";

export default function HorizontalFormGroup(id, label, type) {
  return (
    <div key={id} className="form-group row">
      <label  className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-10">
        <input type={type} className="form-control" id={id} />
      </div>
    </div>
  );
}
