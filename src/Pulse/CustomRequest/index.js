import React from 'react'
import CheckBoxBootstrap from "Pulse/components/CheckBoxBootstrap"
import HorizontalFormGroup from "Pulse/components/HorizontalFormGroup"
import Box from '@material-ui/core/Box';
import {textBoxItems,chkBoxItems, chkedState, txtinputState} from './CustomRequest.data'

export default function CustomRequestForm(submitFunc) {

   // console.log(submitRequest)

   
          

  
            
            const [requestState, setState] = React.useState({...chkedState,...txtinputState});        
            
            const handleChange = (name) => (newValue) => {
                // console.log(name)
                // console.log(newValue);
                setState({ ...requestState, [name]: newValue });
              };
 
     console.log(requestState)
    return (
        <form>
         {chkBoxItems.map( (chkBoxItem) => 
             CheckBoxBootstrap(chkBoxItem.id,chkBoxItem.label,handleChange(chkBoxItem.id))
         )}

<Box mt={5}>
{textBoxItems.map( (textBoxItem) => 
             HorizontalFormGroup(textBoxItem.id,textBoxItem.label,handleChange(textBoxItem.id))
         )}
         </Box>
</form>
    )
}
