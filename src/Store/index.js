import authSliceReducer from './Slices/AuthSlice';
import { configureStore } from '@reduxjs/toolkit';

const Store=configureStore({
    reducer:{
        auth:authSliceReducer
    }
})
export default Store