import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const addPropertyFetch = createAsyncThunk('checkTypeAdmin', async (payload)=> {
    return await fetch('https://phonemarketf.herokuapp.com/api/addProduct', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-type":"application/json",
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(payload)
    }).then((res)=> res.json())
})

const addNewProduct = createSlice({
    name: 'addProperty',
    initialState: null,
    extraReducers: {
        [addPropertyFetch.pending]: (state, action)=> state = 'loading',
        [addPropertyFetch.fulfilled]: (state, action)=> state = 'successfully saved',
        [addPropertyFetch.rejected]: (state, action)=> state = 'Error',
    },
})

export default addNewProduct.reducer