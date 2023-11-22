import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchdatas:[],
    fav : []
  }
  

const DataSlice = createSlice({
    name: 'datastore',
    initialState,
    reducers: {
        setsearchdatas:(state,actions)=>{
        state.searchdatas=actions.payload
      },
      setfav : (state,actions)=>{
      const newItem = actions.payload;

      // Check if the item already exists based on the id
      const isDuplicate = state.fav.find((item) => item.id === newItem.id);

      // Add the item only if it's not a duplicate
      if (!isDuplicate) {
        state.fav.push(newItem);
      }
      },
      removefav : (state,action) =>{
        const remove = action.payload;
        state.fav = state.fav.filter((item)=>item.id !== remove)
      }
    },
  })
  
  
  
  
export const { setsearchdatas,setfav,removefav } =DataSlice.actions
  
  

  
export default DataSlice.reducer
