import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "carts",
    initialState: { cartItem: [] },
    reducers: {
        addCart: (state, action) => {
            const findProduct = state.cartItem.find((x) => x.id == action.payload.id)
            if (!findProduct) {
                state.cartItem.push(action.payload)
            }
        }
    }
});

export const { addCart } = cartSlice.actions
export default cartSlice.reducer