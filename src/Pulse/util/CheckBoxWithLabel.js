//https://material-ui.com/components/checkboxes/
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function CheckBoxWithLabel({label,checkedProp,onCheckedChange}) {

  // console.log(label)
  //  console.log(checkedProp)

    const [checked, setChecked] = React.useState(checkedProp)

      const handleChange = event => {
        const changedState = event.target.checked
        setChecked(changedState)
        onCheckedChange(changedState);
      };

//  console.log(checked)
      return (
        <FormControlLabel
        control={
          <Checkbox value={label} checked={checked}  onChange={handleChange}  color="primary"/>
        }
        label={label}
      />
      )
}

//value	any		The value of the component. The DOM API casts this to a string. 
//Label is used as value
//https://material-ui.com/api/checkbox/
//checked	bool		If true, the component is checked.