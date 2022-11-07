import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const checkAdminFetch = createAsyncThunk('checkTypeAdmin', async (payload)=> {
    return await fetch('https://phonemarketf.herokuapp.com/api/login', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
    }).then((res)=> res.json())
})

const adminClear = createSlice({
    name: 'clearAdmin',
    initialState: {
        state: false,
        user: '',
        status: null
    },
    reducers: {
        changeAdmin(state, action){
            if(localStorage.getItem("token") ? true : false){
                state.state = true
            }
            if(localStorage.getItem("user")){
                state.user = localStorage.getItem("user")
            }
        },
        offAdmin(state, action){
            state.state = false
            state.user = ''
        }
    },
    extraReducers: {
        [checkAdminFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [checkAdminFetch.fulfilled]: (state, action) => {
            if(action.payload?.token){
                state.status = 'success'
                state.state = true
                state.user = action.payload.user
                localStorage.setItem('token', action.payload.token)
                localStorage.setItem('user', action.payload.user)
            }
        },
        [checkAdminFetch.rejected]: (state) => {
            state.status = 'error'
        },
    }

})


export const {changeAdmin, checkAdmin, offAdmin} = adminClear.actions
export default adminClear.reducer