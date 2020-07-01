import React from "react";
import getDateStringFromID from 'Pulse/utilfunctions/getDateStringFromID'

//https://getbootstrap.com/docs/4.4/content/tables/
export default function DisplayRequestsByUserTable({headers,data}) {

  //console.log(headers)

  return (
    <React.Fragment>
    <table className="table">
    <thead className="thead-dark">
      <tr>
        <th scope="col">{headers[0]}</th>
        <th scope="col">{headers[1]}</th>
        <th scope="col">{headers[2]}</th>
      </tr>
    </thead>
    <tbody>

    {data.map((row,index) => (
       <tr key={index}>
       <th scope="row">  {getDateStringFromID(row.sortId.toString())}</th>
       <td>{row.requeststatus}</td>
       <td><button type="button" className="btn btn-link">View Project Details</button></td>
 
     </tr>
    ))}

    </tbody>
  </table>
  </React.Fragment>
  );
}