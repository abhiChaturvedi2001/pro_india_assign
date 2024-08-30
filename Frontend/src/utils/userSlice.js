import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'useSlice',
    initialState: {
        toggle: false,
        userName: ""
    },
    reducers: {
        handleLoginToggle: (state, action) => {
            state.toggle = action.payload
        },
        handleUserName: (state, action) => {
            state.userName = action.payload
        }
    },
})

export const { handleLoginToggle, handleUserName } = counterSlice.actions

export default counterSlice.reducer