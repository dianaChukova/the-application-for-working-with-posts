import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user= null
        },
    }
})

export const {login, logout, registerUser} = authSlice.actions

export default authSlice.reducer