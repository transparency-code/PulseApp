import React from "react";
import CheckBoxWithLabel from "../CheckBoxWithLabel";
import renderer from "react-test-renderer";
import { render, fireEvent, cleanup } from '@testing-library/react'

afterEach(cleanup)

it("snapshot testing", () => {
  const labelObject = {
    label: "Lined"
  };


  const mockCallback = jest.fn();

  const tree = renderer
    // {label,checkedProp,onCheckedChange}
    .create(<CheckBoxWithLabel {...labelObject} checkedProp={true} onCheckedChange={mockCallback} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


it("fire a change", () => {
    const labelObject = {
      label: "Lined"
    };
  
  
    const mockCallback = jest.fn();

    
    const { getByLabelText } = render(<CheckBoxWithLabel {...labelObject} checkedProp={true} onCheckedChange={mockCallback} />)

    const selectNode = getByLabelText('Lined')

       ////do a fireEvent.change
       fireEvent.click(selectNode)

      expect(mockCallback.mock.calls).toHaveLength(1);
  
      
  });
  