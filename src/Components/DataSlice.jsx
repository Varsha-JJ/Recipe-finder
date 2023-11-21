import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchdatas:[]
  }
  

const DataSlice = createSlice({
    name: 'datastore',
    initialState,
    reducers: {
        setsearchdatas:(state,actions)=>{
        state.searchdatas=actions.payload
      }
    },
  })
  
  
  
  
export const { setsearchdatas } =DataSlice.actions
  
  

  
export default DataSlice.reducer
