import React from 'react'
import CheckBoxBootstrap from "Pulse/components/CheckBoxBootstrap"
import HorizontalFormGroup from "Pulse/components/HorizontalFormGroup"
import Box from '@material-ui/core/Box';

export default function index(submitFunc,UIObj) {

   // console.log(submitRequest)

   const chkBoxItems =     [
               {
                   id : "lined",
                   label : "Lined"
               },

               {
                id : "calcRequired",
                label : "Calculation Required"
            },

            {
                id : " openAwning",
                label : "Open Awning"
            },

            {
                id : "enclosedAwning",
                label : "Enclosed Awning"
            },

            {
                id : "garaport",
                label : "Garaport"
            },

            {
                id : "lintelDesign",
                label : "Lintel Design Required"
            },

            {
                id : "buildingEnvelope",
                label : "Building Envelope"
            }]


  const textBoxItems = [
      {
          id : 'length',
          label : 'Length(mm)',
          type : "number"
      },

      {
        id : 'Width',
        label : 'Width(mm)',
        type : "number"
    },

    {
        id : 'Height',
        label : 'Height(mm)',
        type : "number"
    },

    {
        id : 'roofPitch',
        label : 'Roof Pitch (deg)',
        type : "number"
    },

    {
        id : 'bayNumber',
        label : 'Bay Number',
        type : "number"
    },

    {
        id : 'baySize',
        label : 'Bay Size',
        type : "number"
    },

    {
        id : 'mezzanineFloor',
        label : 'Mezzanine Floor',
        type : "number"
    },


    {
        id : 'foundation',
        label : 'Foundation',
    },

    {
        id : 'latlong',
        label : 'Latitude Longitude',
    },

  ]
            
            
            
           
 

    return (
        <form>
         {chkBoxItems.map( (chkBoxItem) => 
             CheckBoxBootstrap(chkBoxItem.id,chkBoxItem.label)
         )}

<Box mt={5}>
{textBoxItems.map( (textBoxItem) => 
             HorizontalFormGroup(textBoxItem.id,textBoxItem.label)
         )}
         </Box>
</form>
    )
}
