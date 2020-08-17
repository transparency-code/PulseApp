import React from 'react'
import Box from '@material-ui/core/Box';
import NativeSelect from 'Pulse/components/NativeSelect'
import DisplayRequestsByRequestStatus from 'Pulse/DisplayRequests/containers/DisplayRequestsByRequestStatus'
import {requestFieldProps, requestTypeList} from '../constants.js'

export default function DisplayRequestByStatusDropdown() {

    const [selection, setSelection] = React.useState(requestTypeList[0].value);

    // console.log(selection)
    return (
        <React.Fragment>
             <NativeSelect {...requestFieldProps} 
             selectList={requestTypeList} 
             currentSelectionProp={selection}
              onSelectionChange={ (newSelection) => setSelection(parseInt(newSelection)) }
              />

            <Box component="div" mt={4}>
                {/* selection is array based at 0, status starts from 1 */}
             <DisplayRequestsByRequestStatus status={selection + 1}/>
             </Box>

        </React.Fragment>
    )
}

