//https://material-ui.com/components/checkboxes/
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function CheckBoxWithLabel({label,value,checked,onCheckedChange}) {

  // console.log(label)
  // console.log(value)

    // const [state, setState] = React.useState(true)

      const handleChange = event => {
        onCheckedChange(event.target.checked);
      };

      // console.log(state)

      return (
        <FormControlLabel
        control={
          <Checkbox checked={value} onChange={handleChange}  color="primary"/>
        }
        label={label}
      />
      )
}