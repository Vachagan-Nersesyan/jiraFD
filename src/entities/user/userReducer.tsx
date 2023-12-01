import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { InitialStateType } from './userReducerTs.interface'
import { fetchUser } from './userReducerThunks'

const initialState: InitialStateType = {

    info: {
        picture: '',
        name: '',
        email: '',


        itSupportManager: '',
        department: '',
        organization: '',
        location: '',
    },
    loading: false,
    error: false



}






export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       
    },
    extraReducers: {
        [fetchUser.pending as any]: (state) => {
            state.loading = true
            state.error = false

        },
        [fetchUser.fulfilled as any]: (state, action) => {
            state.loading = false
            state.error = false



            state.info = { ...action.payload[0].info }
            state.loading = action.payload[0].loading
            state.error = action.payload[0].error

        },
        [fetchUser.rejected as any]: (state) => {
            state.loading = false
            state.error = true


        },
    }
})

export const {  } = userSlice.actions


export default userSlice.reducer



