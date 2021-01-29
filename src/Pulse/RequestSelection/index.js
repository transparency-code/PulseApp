//https://material-ui.com/components/selects/
import React from "react";
import Box from '@material-ui/core/Box';
import NativeSelect from "Pulse/components/NativeSelectParent";
import GetSelectedRequest from './GetSelectedRequest'
import {requestFieldProps, requestTypeList} from './constants.js'

export default function Request() {


  const [selection, setSelection] = React.useState(requestTypeList[1].value);


  return (
    <React.Fragment>
        <NativeSelect {...requestFieldProps} selectList={requestTypeList} currentSelectionProp={selection} onSelectionChange={ (newValue) => setSelection(newValue) }/>
        <Box component="div" mt={4}>
        <GetSelectedRequest selection={selection} />
        </Box>
    </React.Fragment>
  );
}

//https://medium.com/yld-blog/handling-global-notifications-with-reacts-context-api-7d8135510d50