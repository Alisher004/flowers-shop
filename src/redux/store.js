import { configureStore } from "@reduxjs/toolkit";
import wishReducer from "./wish/wishSlice"
import cartReducer from "./cart/cartSlice"

const myStore = configureStore({
    reducer: {
        wishlist: wishReducer,
        carts: cartReducer
    }
})

export default myStore