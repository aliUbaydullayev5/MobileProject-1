import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getBasketFetch = createAsyncThunk('checkTypeAdmin', async ()=> {
    return await fetch('https://phonemarketf.herokuapp.com/api/basket', {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-type":"application/json",
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
    }).then((res)=> res.json())
})

const getAllBasketProduct = createSlice({
    name: 'basketPropertys',
    initialState: {
        status: null,
        data: []
    },
    extraReducers: {
        [getBasketFetch.pending]: (state, action)=> {
            state.status = 'loading'
        },
        [getBasketFetch.fulfilled]: (state, action)=> {
            state.data = action.payload
            state.status = 'success'
        },
        [getBasketFetch.rejected]: (state, action)=> {
            state.status = 'Error'
        }
    },
})

export default getAllBasketProduct.reducer