import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLogged: false
}

export const authSlicer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state) => {
            state.isLogged = true
        },

        logout: (state) => {
            state.isLogged = false
        }
    }

})

export const {login, logout} = authSlicer.actions
export default authSlicer.reducer