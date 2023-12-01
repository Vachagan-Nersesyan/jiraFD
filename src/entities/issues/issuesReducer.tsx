// import { InferActionsTypes } from "./redux-store";
import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { InitialStateType, IssuesType } from './issuesReducerTs.interface'
import { fetchIssues } from './issuesReducerThunk'


const initialState: InitialStateType = {

    filteredIssuesInitArr: [],
    filteredIssuesArr: [],

    filterIssueName: '',
    loading: false,
    error: false

}




export const issuesSlice = createSlice({
    name: 'issues',
    initialState,
    reducers: {



    },
    extraReducers: {

        [fetchIssues.pending as any]: (state) => {
            state.loading = true
            state.error = false

        },
        [fetchIssues.fulfilled as any]: (state, action) => {
            state.loading = false
            state.error = false

            debugger

            state.filteredIssuesInitArr = action.payload[0].filteredIssuesInitArr
            state.filteredIssuesArr = action.payload[0].filteredIssuesArr
            state.filterIssueName = action.payload[0].filterIssueName

        },
        [fetchIssues.rejected as any]: (state) => {
            state.loading = false
            state.error = true


        },

    }
})

export const { } = issuesSlice.actions
export default issuesSlice.reducer


