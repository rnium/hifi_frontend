import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
    name: 'homepage',
    initialState: {
        quickviewProduct: 'asus-vivobook-15-m1505ya-amd-ryzen-5-7430u-16gb-ram-512gb-ssd-156-inch-fhd-oled-display-indie-black-laptop',
    },
    reducers: {
        setQuickviewProduct: (state, action) => {
            state.quickviewProduct = action.payload;
        }
    }
})

export const { setQuickviewProduct } = homepageSlice.actions;
export default homepageSlice.reducer;