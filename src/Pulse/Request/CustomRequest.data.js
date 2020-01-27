
export const CustomRequestUIData = {
  lined: {
    label: "Lined"
  },

  calcRequired: {
    label: "Calculation Required"
  },

  buildingEnvelope: {
    label: "Building Envelope",
  },

  length: {
    label: "Length(mm)",
    type: "number"
  },

  width: {
    label: "Width(mm)",
    type: "number"
  },

  height : {
    label : "Height(mm)",
    type: "number"
  },

  roofPitch : {
    label : "Roof Pitch (deg)",
    type: "number"
  }
}


export const initalCustomRequestState = {
  lined: false,
  calcRequired: false,
  buildingEnvelope: "",
  length: "",
  width : "",
  height : "",
  roofPitch : 15
};