export default function addDefaultBooleanKeys(obj) {


    const defaultBooleans = {
        lined: false,
        calcRequired: false,
        openAwning: false,
        enclosedAwning: false,
        garaport: false,
        lintelDesign: false,
        buildingEnvelope: false,
      };


      const objWithRequiredDefaults = {...defaultBooleans , ...obj}

      return objWithRequiredDefaults
    }


