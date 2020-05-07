import React from 'react'

import  StandardPS1Request from 'Pulse/StandardRequest/StandardPS1Request'
import  CustomRequest from 'Pulse/CustomRequest'
import {STANDARD_REQUEST, CUSTOM_REQUEST} from './constants.js'
import submitRequest from 'Pulse/utilfunctions/submitRequest'
  

export default function GetSelectedRequest({selection}) {

  // console.log(selection)

  let Component;

  switch (selection) {
    case STANDARD_REQUEST:
      Component = () => <StandardPS1Request />;
      break;
    case CUSTOM_REQUEST:
      Component = () => CustomRequest(submitRequest)
      break;
    default:
      Component = () => <div>Type of Request not Found</div>
  }

  return <Component/>
}
