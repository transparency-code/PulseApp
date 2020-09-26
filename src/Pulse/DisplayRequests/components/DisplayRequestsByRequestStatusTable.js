import React from "react";
import getDateStringFromID from 'Pulse/utilfunctions/getDateDisplayStringFromID'
import { Link } from '@reach/router'

//https://getbootstrap.com/docs/4.4/content/tables/
export default function DisplayRequestsByRequestStatusTable({headers,data}) {

 //console.log(data)

  return (
    <React.Fragment>
    <table className="table  table-striped table-sm table-responsive-sm ">
    <thead className="thead-dark">
      <tr>
        <th scope="col">{headers[0]}</th>
        <th scope="col">{headers[1]}</th>
        <th scope="col">{headers[2]}</th>
        <th scope="col">{headers[3]}</th>
      </tr>
    </thead>
    <tbody>

    {data.map((row,index) => (
       <tr key={index}>
       <th scope="row">  {row.projectid}</th>
       <td>  {getDateStringFromID(row.projectid.toString())}</td>
       <td>{row.email}</td>

       {/* using reach router link. can set state in redirect */}
       {/* https://stackoverflow.com/questions/54925804/how-to-hide-parameters-from-route-after-accessing-parameters-in-reactjs */}
       {/* <td><button type="button" className="btn btn-link">View Project Details</button></td> */}
       <td><Link to="/projectdetail" state={{email:row.email, projectid : row.projectid}}>View Project Details</Link></td>
 
     </tr>
    ))}

    </tbody>
  </table>
  </React.Fragment>
  );
}
