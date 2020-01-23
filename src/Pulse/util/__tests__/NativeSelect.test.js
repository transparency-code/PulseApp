import React from 'react';
import NativeSelect from '../NativeSelect';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from '@testing-library/react'

afterEach(cleanup)

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
    
     const mockCallback = jest.fn();
    
    const tree = renderer
    // {selectId, selectLabel, selectOptions, currentSelection, onSelectionChange}
      .create(<NativeSelect {...fieldProps} selectOptions={options} currentSelection={"value1"} onSelectionChange={mockCallback} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('fire a change', () => {

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
    
     const mockCallback = jest.fn();
    
     const { getByLabelText } = render(<NativeSelect {...fieldProps} selectOptions={options} currentSelection={"value1"} onSelectionChange={mockCallback} />)
  
    
     const selectNode = getByLabelText('Select Label')
    //  console.log(selectNode);

      ////do a fireEvent.change
     fireEvent.change(selectNode, { target: { value: "value2" } })

     //not working
    expect(mockCallback.mock.calls).toHaveLength(1);
  });