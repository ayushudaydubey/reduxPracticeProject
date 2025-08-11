import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    data: []
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        loaduser: (state,actions)=>{
            state.data = actions.payload
        },
        removeuser: (state,actions)=>{
            state.data = null;
        }
    }
})

export default userSlice.reducer;
export const {loaduser,removeuser} = userSlice.actions;