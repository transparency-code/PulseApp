import React from 'react';
import NativeSelect from '../NativeSelect';
import renderer from 'react-test-renderer';

it('snapshot testing', () => {

    const fieldProps = {
        selectId: "select-id",
        selectLabel: "Select Label"
      };
      
      const options = [
        {
          value: "value1",
          label: "label1"
        },
        {
          value: "value2",
          label: "label2"
        }
      ]; 
    
     const mockOnSelectionChange = jest.fn();
    
    const tree = renderer
    // {...requestFieldProps} selectOptions={requestOptions}
      .create(<NativeSelect {...fieldProps} selectOptions={options} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });