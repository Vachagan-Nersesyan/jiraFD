// import { InferActionsTypes } from "./redux-store";
import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'


const initialState: InitialStateType = {

    filteredIssuesInitArr: [],
    filteredIssuesArr: [],

    filterIssueName: '',


}


export type InitialStateType = {
    filteredIssuesInitArr: Array<IssuesType>,
    filteredIssuesArr: Array<IssuesType>,
    filterIssueName: string
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


export type IssuesType = {
    id: number,
    uniqId: string,
    issuesProject: string,
    issueTypeName: string,
    issueTypePic: any,
    issueStatus: string,
    summary: string,
    descriptionText: string,
    description?: Array<string>,
    reporter: string,
    assignee: string,
    storyPoint: number,
    issueComments: Array<IssuesCommentsType>,
    issuesChilds: Array<IssuesType>,
    flag: boolean,
    issueLabel: Array<IssuesLabelType>,
    issueShortName: string,
    doneRecently : string
    currentDate: string
}

export type IssuesCommentsType = {
    id: number,
    text: string,
    name: string,
    date: string,
    picture: string
}

type IssuesLabelType = {
    id: number,
    text: string
}
