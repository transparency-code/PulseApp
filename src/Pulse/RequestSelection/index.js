//https://material-ui.com/components/selects/
import React from "react";
import NativeSelect from "Pulse/components/NativeSelect";
import GetSelectedRequest from './GetSelectedRequest'
import Layout from 'Pulse/components/layout'
import {requestFieldProps, requestTypeList} from './constants.js'

export default function Request() {


  const [selection, setSelection] = React.useState(requestTypeList[1].value);


  return (
    <Layout>
        <NativeSelect {...requestFieldProps} selectList={requestTypeList} currentSelectionProp={selection} onSelectionChange={ (newValue) => setSelection(newValue) }/>
        <GetSelectedRequest selection={selection} />
      </Layout>
  );
}

//https://medium.com/yld-blog/handling-global-notifications-with-reacts-context-api-7d8135510d50