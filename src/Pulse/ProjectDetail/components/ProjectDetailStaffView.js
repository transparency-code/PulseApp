import React from "react";
import getDateStringFromID from 'Pulse/utilfunctions/getDateDisplayStringFromID'
import DisplayFiles from 'Pulse/components/DisplayFiles'
import DisplayText from 'Pulse/components/DisplayText'

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
  //console.log(checkedItems)
  // console.log(txtItems)

  //a filter function whose output that will be used as a parameter to map. cant use assignmnets inside map
  const checkedItemsList = checkedItems.map((item, index) => (
    <DisplayText key={index} datatext={item}></DisplayText>
    // <li className="list-group-item list-group-item-info" key={index}>
    //   {item}
    // </li>
  ));

  const txtItemsList = txtItems.map((item, index) => {

    const { label, value } = item

    // console.log(label)
    // console.log(value)

    return (
      <DisplayText key={index} lbltext={label} datatext={value} />


    )

  }
  );

  //   console.log(txtItems)
 // console.log(checkedItemsList)


  return (
    <React.Fragment>

      <DisplayText lbltext={rowlabels.initialDate} datatext={getDateStringFromID(projectid.toString())} />
      <DisplayText lbltext={rowlabels.id} datatext={projectid} />
      <DisplayText lbltext={rowlabels.email} datatext={email} />
      <DisplayText lbltext={rowlabels.status} datatext={status} />
      

    
      {checkedItems.length > 0 ? <div>
        <DisplayText lbltext={rowlabels.optionsLabel} />
        {checkedItemsList}
      </div> : null}

      {txtItems.length > 0 ? txtItemsList : null}


      {txtItemsList}


      <DisplayFiles files={files} />

    </React.Fragment>

  );
}
