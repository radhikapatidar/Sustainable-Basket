import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/user/userSlice';
import productReducer from '../features/product/productSlice';
import blogReducer from '../features/blogs/blogSlice'
import contactReducer from '../features/contact/contactSlice';
import vendorReducer from '../features/vendor/vendorSlice'
export const store = configureStore({
    reducer:{
        auth : authReducer,
        product : productReducer,
        blog : blogReducer,
        contact : contactReducer,
        vendor : vendorReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: true,
    }),
})