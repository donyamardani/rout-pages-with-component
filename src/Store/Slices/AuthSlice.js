import { createSlice } from "@reduxjs/toolkit";

const initialState={token:null}
const authSlice=createSlice({
    name:'authSlice',
    initialState,
    reducer:{
        login(state,action){
            state.token=action.payload
        },
        logout(state){
            state.token=null
        }
    }
})
export const {login,logout}=authSlice.actions;
export default authSlice.reducer;