import steps from 'Pulse/Data/ProcessStates'

//for the dropdown, id and label
export const requestFieldProps = {
    selectId: "statustypeDropdown_id",
    selectLabel: "Status Type"
  };
  
//https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
export const requestTypeList = steps.map( (step,index) => ({ 
    value : index,
    label : step
})
)

// export const requestTypeList = [
//     {
//       value: STANDARD_REQUEST,
//       label: STANDARD_REQUEST
//     },
//     {
//       value: CUSTOM_REQUEST,
//       label: CUSTOM_REQUEST
//     }
//   ];
  