import React from 'react'

import  StandardPS1Request from 'Pulse/Request/StandardPS1Request'
import  CustomRequest from 'Pulse/Request/CustomRequest'

export const STANDARD_REQUEST = "Standard PS1"
export const CUSTOM_REQUEST = "Custom"

export function getRequestComponent(selection) {
  let RequestTypeComponent;

  switch (selection) {
    case STANDARD_REQUEST:
      RequestTypeComponent = () => <StandardPS1Request />;
      break;
    case CUSTOM_REQUEST:
      RequestTypeComponent = () => <CustomRequest />;
      break;
    default:
      RequestTypeComponent = () => null;
  }
}
