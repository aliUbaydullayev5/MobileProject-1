import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getAllFetch = createAsyncThunk('checkTypeAdmin', async (payload)=> {
    return await fetch('https://phonemarketf.herokuapp.com/api').then((res)=> res.json())
})

const getAllProduct = createSlice({
    name: 'getAll',
    initialState: {
        data: [],
        getAllStatus: null
    },
    extraReducers: {
        [getAllFetch.pending]: (state) => {
            state.getAllStatus = 'loading'
        },
        [getAllFetch.fulfilled]: (state, action) => {
            state.data = action.payload
            state.getAllStatus = 'success'
        },
        [getAllFetch.rejected]: (state) => {
            state.getAllStatus = 'error'
        },
    }

})
export default getAllProduct.reducer