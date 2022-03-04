import { configureStore } from "@reduxjs/toolkit"
import authSlicer from "../features/Auth/authSlicer"
import counterSlice from "../features/Counter/counterSlice"
import  orderSlice from "../features/Orders/ordersSlice"

export const store = configureStore({
    reducer: {
        count: counterSlice,
        orders: orderSlice,
        auth: authSlicer,
    }
})