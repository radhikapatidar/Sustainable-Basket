import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { vendorService } from "./vendorService";

export const registerVendor = createAsyncThunk(
    "auth/vendor/register",
    async (vendorData, thunkAPI) => {
        try{
            return await vendorService.registerVendor(vendorData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const initialState = {
    // You should initialize all the required fields here
    // For example:
    vendor: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    //createdVendor: null,
};
export const vendorSlice = createSlice({
    name: "vendor",
   initialState: initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(registerVendor.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(registerVendor.fulfilled, (state,action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.createdVendor = action.payload;
            if(state.isSuccess===true){
                toast.info("User Created Successfully")
            }
        })
        .addCase(registerVendor.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isSuccess===false){
                toast.error("Somthing Went Wrong!")
            }
        });
    }
})
export default vendorSlice.reducer;