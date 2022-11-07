import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const addBasketFetch = createAsyncThunk('checkTypeAdmin', async (payload)=> {
    return await fetch('https://phonemarketf.herokuapp.com/api/addToBasket', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-type":"application/json",
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify({
            productId: payload.id
        })
    }).then((res)=> res.json())
})

const addBasket = createSlice({
    name: 'addProperty',
    initialState: {
        status: null,
    },
    extraReducers: {
        [addBasketFetch.pending]: (state, action)=> {
            state.status = 'loading'
        },
        [addBasketFetch.fulfilled]: (state, action)=> {
            state.data = action.payload
            state.status = 'success'
        },
        [addBasketFetch.rejected]: (state, action)=> {
            state.status = 'Error'
        }
    },
})

export default addBasket.reducer