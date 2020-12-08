import React from 'react';
import ListDisplay from './ListDisplay'
import { render, screen } from '@testing-library/react';

describe('ListDisplay', () => {
    test('renders list', async () => {
  
  
      //AddCard({titleText,placeholderTextForInput,listEmptyMsg, list, onSubmit, validateInput}) {
 
      const listEmptyMsg = "List is Empty"
      const list = ['israel','adonai']

         render(<ListDisplay   emptyMsg={listEmptyMsg} listArray={list}   />) 
  
        // queryBy tests for null
        expect(screen.queryByText('List is Empty')).toBeNull();

        //getBy tests to be in document
         expect(screen.getByText('israel')).toBeInTheDocument();
         expect(screen.getByText('adonai')).toBeInTheDocument();
  
    })

    test('renders empty list', async () => {
  
  
        //AddCard({titleText,placeholderTextForInput,listEmptyMsg, list, onSubmit, validateInput}) {
   
        const listEmptyMsg = "List is Empty"
        const list = []
  
           render(<ListDisplay   emptyMsg={listEmptyMsg} listArray={list}   />) 
    
          // queryBy tests for null
          expect(screen.getByText('List is Empty')).toBeInTheDocument();
  
  

    
      })
})