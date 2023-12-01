// import { BoardArrType, InitialStateBoardOverlayType, InitialStateBoardType, getBoardIssueItemExample } from "./boardsReducer";
import { IssuesType } from "../issues/issuesReducerTs.interface";
// import { AppStateType, InferActionsTypes } from "./redux-store";
import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { v4 as uuid } from "uuid";

import { createAvatar } from '@dicebear/core';
import { shapes, avataaars } from '@dicebear/collection';

import { DeveloperInfoType, InitialStateBoardOverlayType, InitialStateType, TeamType } from "./projectReducerTs.interface";
import { fetchProjects } from "./projectReducerThunks";

export const boardExample = {
    // boardItem: {
    boardArr: [
        {
            id: 0,
            title: 'TO DO',
            uniqText: 'todo',
            boardIssue: [],
            boardLimit: 1000
        },
        {
            id: 1,
            title: 'IN PROGRESS',
            uniqText: 'inprogress',
            boardIssue: [],
            boardLimit: 1000,

        },
        {
            id: 2,
            title: 'DONE',
            uniqText: 'done',
            boardIssue: [],
            boardLimit: 1000

        },
    ],

    boardUniqName: '',

    getBoardIssueItem: {
        id: 0,
        uniqId: '',
        issuesProject: '',
        issueTypeName: 'Task',
        issueTypePic: '',
        issueStatus: '',
        currentDate: '',
        summary: '',
        descriptionText: '',
        description: [],
        doneRecently: '',
        assignee: '',
        storyPoint: 0,
        reporter: 'Vachagan',
        issueShortName: '',
        issueComments: [],
        issuesChilds: [],
        flag: false,
        issueLabel: [],

        issuesInnerItems: [],


        isSubIssue: false


    },

    // }

}

export const getBoardIssueItemExample: IssuesType = {
    id: 0,
    uniqId: '',
    issuesProject: '',
    issueTypeName: 'Task',
    issueTypePic: '',
    issueStatus: '',
    currentDate: '',
    summary: '',
    descriptionText: '',
    description: [],
    doneRecently: '',
    assignee: '',
    storyPoint: 0,
    reporter: 'Vachagan',
    issueShortName: '',
    issueComments: [],
    issuesChilds: [],
    flag: false,
    issueLabel: [],
    issuesInnerItems: [],
    isSubIssue: false


}

export const projectExample = {
    id: 0,
    picture: '',
    name: 'Sprint 1',
    projectType: 'Software project',
    key: 'P1',
    lead: 'Vachagan',
    backlogSecIssueArr: [],
    defaultAssignee: 'Unissagned',
    board: { ...boardExample, boardUniqName: "" },
    boardUniqName: ""
}


const initialState: InitialStateType = {
    projectArr: [
        {
            id: 0,
            picture: 'https://tse1.mm.bing.net/th?id=OIP.6Jvo4mwZ9zGQCvjwr_xKSwHaE7&pid=Api&rs=1&c=1&qlt=95&w=144&h=95',
            name: 'Sprint 1',
            projectType: 'Software project',
            key: 'P1',
            lead: 'Vachagan',
            backlogSecIssueArr: [],
            defaultAssignee: 'Unissagned',
            board: { ...boardExample, boardUniqName: "" },
            boardUniqName: ""
        }
    ],

    currentProject: '',
    currentBoard: { ...boardExample },

    getBoardIssueItem: {
        id: 0,
        uniqId: '',
        issuesProject: '',
        issueTypeName: 'Task',
        issueTypePic: '',
        issueStatus: '',
        currentDate: '',
        issuesInnerItems: [],

        summary: '',
        descriptionText: '',
        description: [],
        doneRecently: '',
        assignee: '',
        storyPoint: 0,
        reporter: 'Vachagan',
        issueShortName: '',
        issueComments: [],
        issuesChilds: [],
        flag: false,
        issueLabel: [],

        isSubIssue: false

    },

    currentProjectNumber: 0,

    allProjectsIssueArr: [],

    backlogIssueArr: [],

    error: false,
    loading: false



}




export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},

    extraReducers: {

        // fetchProjects function

        [fetchProjects.pending as any]: (state) => {
            state.loading = true
            state.error = false

        },
        [fetchProjects.fulfilled as any]: (state, action) => {
            state.loading = false
            state.error = false



            state.projectArr = action.payload[0].projectArr
            state.getBoardIssueItem = action.payload[0].getBoardIssueItem
            state.currentProjectNumber = action.payload[0].currentProjectNumber
            state.currentProject = action.payload[0].currentProject
            state.allProjectsIssueArr = action.payload[0].allProjectsIssueArr
            state.backlogIssueArr = action.payload[0].backlogIssueArr
            state.currentBoard = action.payload[0].currentBoard

        },
        [fetchProjects.rejected as any]: (state) => {
            state.loading = false
            state.error = true


        },



    }
})


// export const { changeIssueAssigneeFunc, addDeveloperFunc, chooseProjectForTeamFunc, changeProjectInfoFunc, createProjectFunc, changeGetBoardIssueItemFunc, setAllProjectsIssuesArr, changeAllBoardItems, changeBoardUniqName, setCurrentProject, addingCurrentBoardToProject, changeBoardToProject, addingIssueToCurrentBoard, addingBoardToProject } = projectSlice.actions

export const { } = projectSlice.actions



export default projectSlice.reducer

