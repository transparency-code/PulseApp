//https://material-ui.com/components/text-fields/

import React from "react";
import BasicTextField from "../BasicTextField";
import renderer from "react-test-renderer";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("snapshot testing  - default type text", () => {

    const aTextField = {
        label: "aLabel",
      }

  const mockCallback = jest.fn();

  const tree = renderer
    // {label,checkedProp,onCheckedChange}
    .create(<BasicTextField {...aTextField} valueProp={"hello"} handleChangeProp={mockCallback} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("snapshot testing  - type number", () => {
  const aTextField = {
    label: "aLabel",
    type: "number"
  };

  const mockCallback = jest.fn();

  const tree = renderer
    // {label,checkedProp,onCheckedChange}
    .create(
      <BasicTextField
        {...aTextField}
        valueProp={"hello"}
        handleChangeProp={mockCallback}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("fire a change - type text - text change success", () => {
  const aTextField = {
    label: "aLabel",
  };

  const mockCallback = jest.fn();

  const { getByLabelText } = render(
    <BasicTextField
      {...aTextField}
      checkedProp={true}
      handleChangeProp={mockCallback}
    />
  );

  const selectNode = getByLabelText("aLabel");

  ////do a fireEvent.change
  fireEvent.change(selectNode, { target: { value: "newValue" } });

  expect(mockCallback.mock.calls).toHaveLength(1);
  expect(mockCallback).toHaveBeenCalledWith("newValue");
});

it("fire a change - type number - number change success", () => {
    const aTextField = {
      label: "aLabel",
    };
  
    const mockCallback = jest.fn();
  
    const { getByLabelText } = render(
      <BasicTextField
        {...aTextField}
        checkedProp={true}
        handleChangeProp={mockCallback}
      />
    );
  
    const selectNode = getByLabelText("aLabel");
  
    ////do a fireEvent.change
    fireEvent.change(selectNode, { target: { value: "20" } });
  
    expect(mockCallback.mock.calls).toHaveLength(1);
    expect(mockCallback).toHaveBeenCalledWith("20");
  });
  
  it("fire a change - type number - text change fails", () => {
    const aTextField = {
      label: "aLabel",
      type : "number"
    };
  
    const mockCallback = jest.fn();
  
    const { getByLabelText } = render(
      <BasicTextField
        {...aTextField}
        checkedProp={true}
        handleChangeProp={mockCallback}
      />
    );
  
    const selectNode = getByLabelText("aLabel");
  
    ////do a fireEvent.change
    fireEvent.change(selectNode, { target: { value: "new" } });
  
    expect(mockCallback.mock.calls).toHaveLength(0);
    
  });
  
