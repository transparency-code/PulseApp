import React from 'react'
import CheckBoxWithLabel from 'Pulse/util/CheckBoxWithLabel'

const customRequestOptions = {
    lined : {
        label : "Lined",
        value : true
    }
}



export default function CustomRequest() {

    const {lined} = customRequestOptions

    const [customRequestState, setCustomRequestState] = React.useState(lined.value);

    // const setCustomRequestState = value => {
    //         setState(event.target.checked);
    //       };

    console.log(customRequestState)

    // console.log(lined)
    return (
        <div>
            <CheckBoxWithLabel {...lined} value={customRequestState} onCheckedChange={setCustomRequestState}/>
        </div>
    )
}
