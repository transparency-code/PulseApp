import React from 'react';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import AddCard from './AddCard'
import validateEmail from 'Pulse/utilfunctions/validateEmail'

describe('AddCard', () => {
  test('renders tiitle test', async () => {


    //AddCard({titleText,placeholderTextForInput,listEmptyMsg, list, onSubmit, validateInput}) {

    const titleText = "Tracken"
    const placeholderTextForInput = "Kracken"
    const listEmptyMsg = "List is Empty"
    const list = ['israel']
    const onSubmit = jest.fn();
    const validateInput = jest.fn(true);
       render(<AddCard
         cardTitle={titleText} 
         inputPlaceHolderText={placeholderTextForInput}
         listEmptyMsg={listEmptyMsg}
         listArray={list} 
         listEmptyMsg={listEmptyMsg}
         firstItemAlwaysOn={false}
         onSubmit={onSubmit}
         validateInput={validateInput}
         dialogOpen={false}
         setItemStateForDelete={{}}
         />) 

      // screen.debug()
       expect(screen.getByText(titleText)).toBeInTheDocument();

  });

  test('add button is diabled on non email text', async () => {


    //AddCard({titleText,placeholderTextForInput,listEmptyMsg, list, onSubmit, validateInput}) {

    const titleText = "Tracken"
    const placeholderTextForInput = "Kracken"
    const listEmptyMsg = "List is Empty"
    const list = ['israel']
    const onSubmit = jest.fn();

       render(<AddCard
        cardTitle={titleText}  
         listEmptyMsg={listEmptyMsg}
         listArray={list} 
         firstItemAlwaysOn={false}
         inputPlaceHolderText={placeholderTextForInput}
         listEmptyMsg={listEmptyMsg}
         list={list}
         onSubmit={onSubmit}
         validateInput={validateEmail}
         dialogOpen={false}
         setItemStateForDelete={{}}
         />) 

         await userEvent.type(screen.getByRole('textbox'), 'aaa');
      // screen.debug()
       expect(screen.getByRole('button')).toBeDisabled();

  });

  test('add button is enabled on email text', async () => {


    //AddCard({titleText,placeholderTextForInput,listEmptyMsg, list, onSubmit, validateInput}) {

    const titleText = "Tracken"
    const placeholderTextForInput = "Kracken"
    const listEmptyMsg = "List is Empty"
    const list = ['israel']
    const onSubmit = jest.fn();

       render(<AddCard
        cardTitle={titleText}  
         listEmptyMsg={listEmptyMsg}
         listArray={list}
         firstItemAlwaysOn={false} 
         inputPlaceHolderText={placeholderTextForInput}
         listEmptyMsg={listEmptyMsg}
         onSubmit={onSubmit}
         validateInput={validateEmail}
         dialogOpen={false}
         setItemStateForDelete={{}}
         />) 

         await userEvent.type(screen.getByRole('textbox'), 'aaa@wer');
      // screen.debug()
       expect(screen.getByRole('button')).toBeEnabled();

  });
});


test('test firstItemAlwaysOn - first item has no sibling element', async () => {

  const titleText = "Godzilla"
  const placeholderTextForInput = "Kong"
  const listEmptyMsg = "List is Empty"
  const list = ['israel','Saudi']
  const onSubmit = jest.fn();

  render(<AddCard
    cardTitle={titleText}  
     listEmptyMsg={listEmptyMsg}
     listArray={list}
     //this is been tested in this unit
     firstItemAlwaysOn={true} 
     inputPlaceHolderText={placeholderTextForInput}
     listEmptyMsg={listEmptyMsg}
     onSubmit={onSubmit}
     validateInput={validateEmail}
     dialogOpen={false}
     setItemStateForDelete={{}}
     />) 


   // screen.debug()
    const domNode = screen.getByText('israel');
    //https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors
    //https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/querySelectorAll
    //https://stackoverflow.com/questions/53133125/react-testing-library-test-if-children-are-passed-rendered-correctly
    // const parent = domNode.parentNode
    // console.log(parent)
    //the parent of nodelete item has only one children
    expect(domNode.children.length).toBe(0);

})

test('test firstItemAlwaysOn - second item has sibling element', async () => {

  const titleText = "Godzilla"
  const placeholderTextForInput = "Kong"
  const listEmptyMsg = "List is Empty"
  const list = ['israel','Saudi']
  const onSubmit = jest.fn();

  render(<AddCard
    cardTitle={titleText}  
     listEmptyMsg={listEmptyMsg}
     listArray={list}
     //this is been tested in this unit
     firstItemAlwaysOn={true} 
     inputPlaceHolderText={placeholderTextForInput}
     listEmptyMsg={listEmptyMsg}
     onSubmit={onSubmit}
     validateInput={validateEmail}
     dialogOpen={false}
     setItemStateForDelete={{}}
     />) 

    const domNode = screen.getByText('Saudi');
    expect(domNode.children.length).toBe(1);

})
