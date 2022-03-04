import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    bag: [],
    total: 0,
}

export const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        addToCart: (state, action) => {
           const {cart, qty, price} = action.payload
            state.bag.push(action.payload)
            state.total += qty * price
        }
    }
})

export const { addToCart } = orderSlice.actions
export default orderSlice.reducer