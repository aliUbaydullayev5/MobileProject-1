import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const deleteBasketFetch = createAsyncThunk('deleteBasketProperty', async (payload)=> {
    return await fetch('https://phonemarketf.herokuapp.com/api/delete', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-type":"application/json",
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify({
            productId: payload
        })
    }).then((res)=> res.json())
})