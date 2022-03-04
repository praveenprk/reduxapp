import { configureStore } from "@reduxjs/toolkit"
import authSlicer from "../features/Auth/authSlicer"
import counterSlice from "../features/Counter/counterSlice"
import  orderSlice from "../features/Orders/ordersSlice"

//creating store; this is like a box/container
//that stores all your state and reducer()s
//hence the name store

export const store = configureStore({
    reducer: {
        count: counterSlice,
        orders: orderSlice,
        auth: authSlicer,
    }
})