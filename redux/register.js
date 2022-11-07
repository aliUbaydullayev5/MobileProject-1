import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const registerFetch = createAsyncThunk('register', async (payload)=> {
    return await fetch('https://phonemarketf.herokuapp.com/api/register', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-type":"application/json",
        },
        body:JSON.stringify({
            email: payload?.email,
            password: payload?.password
        })
    }).then((res)=> res.json())
})

const register = createSlice({
    name: 'register',
    initialState: null,
    extraReducers: {
        [registerFetch.pending]: (state, action)=> state = 'loading',
        [registerFetch.fulfilled]: (state, action)=> state = 'successfully',
        [registerFetch.rejected]: (state, action)=> state = 'Error',
    },
})

export default register.reducer