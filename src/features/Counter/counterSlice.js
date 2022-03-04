import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        add: (state) => {
            state.count+=1
        },

        subtract: (state) => {
            state.count-=1
        }
    }
})

export const { add, subtract } = counterSlice.actions
export default counterSlice.reducer