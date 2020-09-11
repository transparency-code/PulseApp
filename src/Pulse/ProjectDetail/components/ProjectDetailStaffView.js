import React from "react";
import getDateStringFromID from 'Pulse/utilfunctions/getDateDisplayStringFromID'
import DisplayFiles from 'Pulse/components/DisplayFiles'

export default function ProjectDetailStaffView({
  email,
  projectid,
  status,
  rowlabels,
  checkedItems,
  txtItems,
  files,
}) {

  // console.log(email)
  // console.log(projectid)
  // console.log(checkedItems)
  // console.log(txtItems)

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
<React.Fragment>
      <ul className="list-group">
      <div class="p-3 mb-1 bg-primary text-black">{rowlabels.initialDate + " : "+ getDateStringFromID(projectid.toString())}</div>
      <div class="p-3 mb-1 bg-primary text-black">{rowlabels.id + " : " + projectid}</div>
      <div class="p-3 mb-1 bg-primary text-black">{rowlabels.email + " : " + email}</div>
      <div class="p-3 mb-1 bg-primary text-white">{rowlabels.status + " : " + status}</div>
      <div class="p-3 mb-1 bg-primary text-black">{rowlabels.optionsLabel}</div>
      
      {/* <li className="list-group-item list-group-item-primary">{rowlabels.id + " : " + projectid}</li>
      <li className="list-group-item list-group-item-primary">{rowlabels.email + " : " + email}</li>
      <li className="list-group-item list-group-item-secondary">{rowlabels.status + " : " + status}</li>
      <li className="list-group-item list-group-item-primary">{rowlabels.optionsLabel}</li> */}
     
      {checkedItemsList}
      {txtItemsList }
      </ul>

      <DisplayFiles files={files} />

      </React.Fragment>
     
  );
}
