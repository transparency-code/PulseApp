import React from "react";
import getDateStringFromID from 'Pulse/utilfunctions/getDateStringFromID'

export default function ProjectDetailStaffView({
  email,
  projectid,
  rowlabels,
  checkedItems,
  txtItems
}) {
  //a filter function whose output that will be used as a parameter to map. cant use assignmnets inside map
  const checkedItemsList = checkedItems.map((item, index) => (
    <li className="list-group-item list-group-item-info" key={index}>
      {item}
    </li>
  ));

  const txtItemsList = txtItems.map((item, index) => {
     
    const {label,value} = item

    // console.log(label)
    // console.log(value)
    
    return(
    <li className="list-group-item list-group-item-info" key={index}>
        <div className="row">
        <div className="col-6">{label + ": "}</div>
        <div className="col-6">{value}</div>
        </div>   
    </li>
  )

}
  );

//   console.log(txtItems)

  return (
    <div className="row">
      <div className="col-4">
      <ul className="list-group">
      <li className="list-group-item list-group-item-primary">{rowlabels.initialDate + " : "+ getDateStringFromID(projectid.toString())}</li>
      <li className="list-group-item list-group-item-primary">{rowlabels.id + " : " + projectid}</li>
      <li className="list-group-item list-group-item-primary">{rowlabels.email + " : " + email}</li>
      <li className="list-group-item list-group-item-primary">{rowlabels.optionsLabel}</li>
     
      {checkedItemsList}
      {txtItemsList }
      </ul>

      </div>
    </div>
  );
}
