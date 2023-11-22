// import { InferActionsTypes } from "./redux-store";
import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { InitialStateType, IssuesType } from './issuesReducerTs.interface'


const initialState: InitialStateType = {

    filteredIssuesInitArr: [],
    filteredIssuesArr: [],

    filterIssueName: '',


}




export const issuesSlice = createSlice({
    name: 'issues',
    initialState,
    reducers: {
        addIssueFilterNameFunc(state: InitialStateType, action: PayloadAction<string>) {

            state.filterIssueName = action.payload
        },
        changeActualFilterdIssuesArrFunc(state: InitialStateType, action: PayloadAction<Array<IssuesType>>) {
            state.filteredIssuesInitArr = action.payload
        },
        changeActualFilterdCloneIssueArrFunc(state: InitialStateType, action: PayloadAction<Array<IssuesType>>) {
            state.filteredIssuesArr = action.payload
        },


    }
})

export const { addIssueFilterNameFunc, changeActualFilterdCloneIssueArrFunc, changeActualFilterdIssuesArrFunc } = issuesSlice.actions
export default issuesSlice.reducer


