import authSliceReducer from './Slices/AuthSlice';
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Slices/CartSlice'

const Store=configureStore({
    reducer:{
        auth:authSliceReducer,
        cart:cartSlice
    }
})
export default Store