
export const CustomRequestUIData = {
  lined: {
    label: "Lined"
  },

  calcRequired: {
    label: "Calculation Required"
  },

  openAwning : {
    label: "Open Awning"
  },

  enclosedAwning : {
    label: "Enclosed Awning"
  },

  garaport : {
    label : "Garaport"
  },

  lintelDesign : {
     label : "Lintel Design Required"
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
  },

  bayNumber : {
    label : "Bay Number",
    type: "number"
  },

  baySize : {
    label : "Bay Size",
    type: "number"
  },

  mezzanineFloor : {
    label : "Mezzanine Floor",
  },

  foundation : {
    label : "Foundation",
  },

  latlong : {
    label : "Latitude Longitude",
  },

  fileUploads : {
    label : "File Uploads",
    type : "file"
  }
}


export const initalCustomRequestState = {
  lined: false,
  calcRequired: false,
  openAwning: false,
  enclosedAwning: false,
  garaport : false,
  lintelDesign : false,
  buildingEnvelope: "",
  length: "",
  width : "",
  height : "",
  roofPitch : "",
  bayNumber: "",
  baySize : "",
  mezzanineFloor : "",
  foundation : "",
  latlong : "",
  fileUploads : []
};