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
         titleText={titleText}  
         listEmptyMsg={listEmptyMsg}
         list={list} 
         placeholderTextForInput={placeholderTextForInput}
         listEmptyMsg={listEmptyMsg}
         list={list}
         onSubmit={onSubmit}
         validateInput={validateInput}
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
         titleText={titleText}  
         listEmptyMsg={listEmptyMsg}
         list={list} 
         placeholderTextForInput={placeholderTextForInput}
         listEmptyMsg={listEmptyMsg}
         list={list}
         onSubmit={onSubmit}
         validateInput={validateEmail}
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
         titleText={titleText}  
         listEmptyMsg={listEmptyMsg}
         list={list} 
         placeholderTextForInput={placeholderTextForInput}
         listEmptyMsg={listEmptyMsg}
         list={list}
         onSubmit={onSubmit}
         validateInput={validateEmail}
         />) 

         await userEvent.type(screen.getByRole('textbox'), 'aaa@wer');
      // screen.debug()
       expect(screen.getByRole('button')).toBeEnabled();

  });
});

