import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
    name: 'homepage',
    initialState: {
        quickviewProduct: null,
    },
    reducers: {
        setQuickviewProduct: (state, action) => {
            state.quickviewProduct = action.payload;
        }
    }
})

export const { setQuickviewProduct } = homepageSlice.actions;
export default homepageSlice.reducer;