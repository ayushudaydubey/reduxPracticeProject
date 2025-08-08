import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducer: {
        loadProducts: (state,actions)=>{
            state.data = actions.payload
        }
    }
})

export default productSlice.reducer;
export const {loadProducts} = productSlice.actions;