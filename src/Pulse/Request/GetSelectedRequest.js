import React from 'react'

import  StandardPS1Request from 'Pulse/Request/StandardPS1Request'
import  CustomRequest from 'Pulse/Request/CustomRequest'
import {STANDARD_REQUEST, CUSTOM_REQUEST} from './constants.js'

export default function GetSelectedRequest({selection}) {

  // console.log(selection)

  let Component;

  switch (selection) {
    case STANDARD_REQUEST:
      Component = () => <StandardPS1Request />;
      break;
    case CUSTOM_REQUEST:
      Component = () => <CustomRequest />;
      break;
    default:
      Component = () => <div>Type of Request not Found</div>
  }

  return <Component/>
}
