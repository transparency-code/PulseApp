//https://material-ui.com/components/selects/
import React from "react";
import NativeSelect from "Pulse/components/NativeSelect";
import GetSelectedRequest from './GetSelectedRequest'
import Box from '@material-ui/core/Box';
import {requestFieldProps, requestTypeList} from './constants.js'

export default function Request() {


  const [selection, setSelection] = React.useState(requestTypeList[1].value);


  return (
    <Box mx={10}>
        <NativeSelect {...requestFieldProps} selectList={requestTypeList} currentSelectionProp={selection} onSelectionChange={ (newValue) => setSelection(newValue) }/>
        <GetSelectedRequest selection={selection} />
    </Box>
  );
}

//https://medium.com/yld-blog/handling-global-notifications-with-reacts-context-api-7d8135510d50