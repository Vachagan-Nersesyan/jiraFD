// import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
// import { IssuesType } from './issuesReducer'

import { createSlice } from "@reduxjs/toolkit"


// export const boardExample = {
//     // boardItem: {
//     boardArr: [
//         {
//             id: 0,
//             title: 'TO DO',
//             uniqText: 'todo',
//             boardIssue: [],
//             boardLimit: 1000
//         },
//         {
//             id: 1,
//             title: 'IN PROGRESS',
//             uniqText: 'inprogress',
//             boardIssue: [],
//             boardLimit: 1000,

//         },
//         {
//             id: 2,
//             title: 'DONE',
//             uniqText: 'done',
//             boardIssue: [],
//             boardLimit: 1000

//         },
//     ],

//     boardUniqName: '',

//     getBoardIssueItem: {
//         id: 0,
//         uniqId: '',
//         issuesProject: '',
//         issueTypeName: 'Task',
//         issueTypePic: '',
//         issueStatus: '',
//         currentDate: '',
//         summary: '',
//         descriptionText: '',
//         description: [],
//         doneRecently: '',
//         assignee: '',
//         storyPoint: 0,
//         reporter: 'Vachagan',
//         issueShortName: '',
//         issueComments: [],
//         issuesChilds: [],
//         flag: false,
//         issueLabel: [],
//     },
//     count: false

//     // }

// }

// export const getBoardIssueItemExample: IssuesType = {
//     id: 0,
//     uniqId: '',
//     issuesProject: '',
//     issueTypeName: 'Task',
//     issueTypePic: '',
//     issueStatus: '',
//     currentDate: '',
//     summary: '',
//     descriptionText: '',
//     description: [],
//     doneRecently: '',
//     assignee: '',
//     storyPoint: 0,
//     reporter: 'Vachagan',
//     issueShortName: '',
//     issueComments: [],
//     issuesChilds: [],
//     flag: false,
//     issueLabel: [],
// }


// const initialState: InitialStateBoardType = {
//     boardItem: {
//         boardArr: [
//             {
//                 id: 0,
//                 title: 'TO DO',
//                 uniqText: 'todo',
//                 boardIssue: [],
//                 boardLimit: 1000
//             },
//             {
//                 id: 1,
//                 title: 'IN PROGRESS',
//                 uniqText: 'inprogress',
//                 boardIssue: [],
//                 boardLimit: 1000,

//             },
//             {
//                 id: 2,
//                 title: 'DONE',
//                 uniqText: 'done',
//                 boardIssue: [],
//                 boardLimit: 1000

//             },
//         ],

//         boardUniqName: '',

//         getBoardIssueItem: {
//             id: 0,
//             uniqId: '',
//             issuesProject: '',
//             issueTypeName: 'Task',
//             issueTypePic: '',
//             issueStatus: '',
//             summary: '',
//             descriptionText: '',
//             description: [],
//             assignee: '',
//             doneRecently: '',
//             storyPoint: 0,
//             currentDate: '',
//             reporter: 'Vachagan',
//             issueShortName: '',
//             issueComments: [],
//             issuesChilds: [],
//             flag: false,
//             issueLabel: [],
//         },
//         count: false
//     }
// }
// {
//     boardArr: [
//         {
//             id: 0,
//             title: 'TO DO',
//             uniqText: 'todo',
//             boardIssue: [],
//             boardLimit: 1000
//         },
//         {
//             id: 1,
//             title: 'IN PROGRESS',
//             uniqText: 'inprogress',
//             boardIssue: [],
//             boardLimit: 1000,

//         },
//         {
//             id: 2,
//             title: 'DONE',
//             uniqText: 'done',
//             boardIssue: [],
//             boardLimit: 1000

//         },
//     ],

//     boardUniqName: '',

//     getBoardIssueItem: {
//         id: 0,
//         uniqId: '',
//         issuesProject: '',
//         issueTypeName: 'Task',
//         issueTypePic: '',
//         issueStatus: '',
//         summary: '',
//         descriptionText: '',
//         description: [],
//         assignee: '',
//         storyPoint: 0,
//         reporter: 'Vachagan',
//         issueShortName: '',
//         issueComments: [],
//         issuesChilds: [],
//         flag: false,
//         issueLabel: [],
//     }
// }

// export type InitialStateBoardType = {
//     boardItem: InitialStateBoardOverlayType

// }

// export type InitialStateBoardOverlayType = {
//     boardArr: Array<BoardArrType>,
//     getBoardIssueItem: IssuesType,
//     boardUniqName: string,
//     count: boolean
// }

// export const boardSlice = createSlice({
//     name: 'boards',
//     initialState,
//     reducers: {

//         changeBoardUniqName(state: InitialStateBoardType, action: PayloadAction<string>) {


//             state.boardItem.boardUniqName = action.payload
//             console.log(state.boardItem.boardUniqName)
//         },

//         addIssueToBoardsFunc(state: InitialStateBoardType, action: PayloadAction<{ obj: IssuesType, uniqtext: string }>) {
//             debugger
//             for (let i in state.boardItem.boardArr) {

//                 if (state.boardItem.boardArr[i].uniqText === action.payload.uniqtext) {
//                     state.boardItem.boardArr[i].boardIssue.push(action.payload.obj)

//                     break
//                 }
//             }
//             console.log(current(state))
//         },

//         changeIssNameFunc(state: InitialStateBoardType, action: PayloadAction<{ str: string, id: number, boardName: string }>) {

//             for (let i in state.boardItem.boardArr) {
//                 if (state.boardItem.boardArr[i].uniqText === action.payload.boardName) {
//                     state.boardItem.boardArr[i].boardIssue.map((val) => {
//                         if (val.id === action.payload.id) {
//                             val.summary = action.payload.str
//                             state.boardItem.getBoardIssueItem.summary = action.payload.str
//                         }
//                     })
//                 }
//             }
//         },
//         addDesctiptionIssFunc(state: InitialStateBoardType, action: PayloadAction<{ arr: Array<string>, id: number, boardName: string }>) {


//             for (let i in state.boardItem.boardArr) {
//                 if (state.boardItem.boardArr[i].uniqText === action.payload.boardName) {
//                     state.boardItem.boardArr[i].boardIssue.map((val) => {
//                         if (val.id === action.payload.id) {
//                             if (val.description && state.boardItem.getBoardIssueItem.description) {

//                                 for (let t in action.payload.arr) {
//                                     if (!val.description.includes(action.payload.arr[t]) && !state.boardItem.getBoardIssueItem.description.includes(action.payload.arr[t]))
//                                         val.description.push(action.payload.arr[t])
//                                     state.boardItem.getBoardIssueItem.description.push(action.payload.arr[t])
//                                 }


//                             }

//                         }
//                     })
//                 }

//             }

//         },


//         addBoardFunc(state: InitialStateBoardType, action: PayloadAction<string>) {
//             let boardObj = {
//                 id: state.boardItem.boardArr.length,
//                 title: action.payload,
//                 uniqText: action.payload.toLowerCase().split(' ').join(''),
//                 boardIssue: [],
//                 boardLimit: 1000
//             }
//             state.boardItem.boardArr.push(boardObj)
//             console.log(state.boardItem.boardArr, 'state.boardArr')
//         },

//         updateChangedBoardArrFunc(state: InitialStateBoardType, action: PayloadAction<{ str: string, arr: Array<IssuesType> }>) {

//             let fastArr = []

//             for (let i in state.boardItem.boardArr) {

//                 if (state.boardItem.boardArr[i].uniqText === action.payload.str) {
//                     state.boardItem.boardArr[i].boardIssue = []


//                     for (let j in action.payload.arr) {
//                         let o = { ...action.payload.arr[j] }
//                         o.issueStatus = action.payload.str
//                         o.id = Number(j) + 1
//                         fastArr.push(o)
//                     }

//                     state.boardItem.boardArr[i].boardIssue = fastArr

//                     break
//                 }
//             }
//             console.log(current(state), 'current(state)')
//         },

//         addIssueFlagFunc(state: InitialStateBoardType, action: PayloadAction<{ id: number, boardName: string }>) {
//             for (let i in state.boardItem.boardArr) {

//                 if (state.boardItem.boardArr[i].uniqText === action.payload.boardName) {
//                     for (let j in state.boardItem.boardArr[i].boardIssue) {

//                         if (state.boardItem.boardArr[i].boardIssue[j].id === action.payload.id) {

//                             state.boardItem.boardArr[i].boardIssue[j].flag = !state.boardItem.boardArr[i].boardIssue[j].flag
//                             state.boardItem.getBoardIssueItem.flag = !state.boardItem.getBoardIssueItem.flag

//                         }
//                     }
//                 }

//             }
//         },

//         deleteIssueFunc(state: InitialStateBoardType, action: PayloadAction<{ id: number, boardName: string }>) {


//             let fastArr = []

//             for (let i in state.boardItem.boardArr) {
//                 if (state.boardItem.boardArr[i].uniqText === action.payload.boardName) {

//                     for (let j in state.boardItem.boardArr[i].boardIssue) {
//                         if (state.boardItem.boardArr[i].boardIssue[j].id === action.payload.id) {
//                             state.boardItem.boardArr[i].boardIssue.splice(Number(j), 1)
//                         }
//                     }

//                 }
//             }

//             for (let t in state.boardItem.boardArr) {

//                 if (state.boardItem.boardArr[t].uniqText === action.payload.boardName) {

//                     for (let j in state.boardItem.boardArr[t].boardIssue) {
//                         let o = { ...state.boardItem.boardArr[t].boardIssue[j] }
//                         o.id = Number(j) + 1
//                         fastArr.push(o)
//                     }

//                     state.boardItem.boardArr[t].boardIssue = fastArr

//                     break
//                 }
//             }
//             console.log(current(state.boardItem.boardArr), 'state.boardArr[i].boardIssuestate.boardArr[i].boardIssue')
//         },

//         deleteBoardFunc(state: InitialStateBoardType, action: PayloadAction<string>) {

//             let deletedBoardIssuesArr: Array<IssuesType> = []

//             for (let i in state.boardItem.boardArr) {
//                 if (state.boardItem.boardArr[i].uniqText === action.payload) {

//                     state.boardItem.boardArr[0].boardIssue = [...state.boardItem.boardArr[0].boardIssue, ...state.boardItem.boardArr[i].boardIssue]

//                     state.boardItem.boardArr.splice(Number(i), 1)
//                 }
//             }

//             console.log(deletedBoardIssuesArr)
//             for (let j in state.boardItem.boardArr) {
//                 state.boardItem.boardArr[j].id = Number(j)
//             }

//             console.log(current(state.boardItem.boardArr))
//         },

//         changeBoardLimitFunc(state: InitialStateBoardType, action: PayloadAction<{ num: string, boardName: string }>) {
//             for (let i in state.boardItem.boardArr) {

//                 if (state.boardItem.boardArr[i].uniqText === action.payload.boardName) {

//                     state.boardItem.boardArr[i].boardLimit = Number(action.payload.num)
//                 }
//             }
//             console.log(current(state.boardItem.boardArr))
//         },

//         getBoardIssueFunc(state: InitialStateBoardType, action: PayloadAction<{ id: number, boardName: string }>) {
//             for (let i in state.boardItem.boardArr) {
//                 if (state.boardItem.boardArr[i].uniqText === action.payload.boardName) {
//                     for (let j in state.boardItem.boardArr[i].boardIssue) {
//                         if (state.boardItem.boardArr[i].boardIssue[j].id === action.payload.id) {
//                             state.boardItem.getBoardIssueItem = { ...state.boardItem.boardArr[i].boardIssue[j] }
//                         }
//                     }
//                 }
//             }
//             console.log(state.boardItem.getBoardIssueItem, 'state.getBoardIssueItem')
//         },

//         // issue modal  function



//         changeIssDescriptionFunc(state: InitialStateBoardType, action: PayloadAction<{ str: string, id: number, boardName: string }>) {

//             for (let i in state.boardItem.boardArr) {
//                 if (state.boardItem.boardArr[i].uniqText === action.payload.boardName) {
//                     state.boardItem.boardArr[i].boardIssue.map((val) => {
//                         if (val.id === action.payload.id) {
//                             val.descriptionText = action.payload.str

//                             state.boardItem.getBoardIssueItem.descriptionText = action.payload.str

//                         }
//                     })
//                 }
//             }
//         },

//         addCommentIssueFunc(state: InitialStateBoardType, action: PayloadAction<{ str: string, id: number, boardName: string }>) {

//             const getDate: () => string = () => {
//                 const newDate = new Date();
//                 const year = newDate.getFullYear();
//                 const month = newDate.getMonth() + 1;
//                 const d = newDate.getDate();

//                 return `${month.toString().padStart(2, '0')}/${d.toString().padStart(2, '0')}/${year}`;
//             }

//             for (let i in state.boardItem.boardArr) {
//                 if (state.boardItem.boardArr[i].uniqText === action.payload.boardName) {
//                     state.boardItem.boardArr[i].boardIssue.map((val) => {
//                         if (val.id === action.payload.id) {

//                             let commentObj = {
//                                 id: val.issueComments.length,
//                                 text: action.payload.str,
//                                 name: val.reporter,
//                                 date: getDate(),
//                                 picture: ''
//                             }

//                             val.issueComments.push(commentObj)
//                             state.boardItem.getBoardIssueItem.issueComments.push(commentObj)

//                         }
//                     })
//                 }
//             }

//             console.log(current(state.boardItem.getBoardIssueItem), 'current(state.getBoardIssueItem)')

//         },

//         changeCommentIssueFunc(state: InitialStateBoardType, action: PayloadAction<{ str: string, id: number, boardName: string, commId: number }>) {
//             for (let i in state.boardItem.boardArr) {
//                 if (state.boardItem.boardArr[i].uniqText === action.payload.boardName) {
//                     state.boardItem.boardArr[i].boardIssue.map((val) => {
//                         if (val.id === action.payload.id) {
//                             val.issueComments.map((val2, ind2) => {
//                                 if (val2.id === action.payload.commId) {
//                                     val2.text = action.payload.str

//                                     state.boardItem.getBoardIssueItem.issueComments[ind2].text = action.payload.str
//                                 }
//                             })

//                         }
//                     })
//                 }
//             }

//         },

//         deleteCommentIssueFunc(state: InitialStateBoardType, action: PayloadAction<{ str: string, id: number, boardName: string, commId: number }>) {
//             for (let i in state.boardItem.boardArr) {
//                 if (state.boardItem.boardArr[i].uniqText === action.payload.boardName) {
//                     state.boardItem.boardArr[i].boardIssue.map((val) => {
//                         if (val.id === action.payload.id) {
//                             val.issueComments.map((val2, ind2) => {
//                                 if (val2.id === action.payload.commId) {

//                                     val.issueComments.splice(ind2, 1)
//                                     state.boardItem.getBoardIssueItem.issueComments.splice(ind2, 1)
//                                 }
//                             })

//                             val.issueComments.map((val2, ind2) => {
//                                 val2.id = Number(ind2) + 1

//                                 state.boardItem.getBoardIssueItem.issueComments[ind2].id = Number(ind2) + 1
//                             })

//                         }
//                     })
//                 }
//             }

//         },

//         changeIssueBoardFunc(state: InitialStateBoardType, action: PayloadAction<{ id: number, boardName: string }>) {


//             for (let i in state.boardItem.boardArr) {

//                 if (state.boardItem.boardArr[i].uniqText === state.boardItem.getBoardIssueItem.issueStatus) {

//                     state.boardItem.boardArr[i].boardIssue.map((val, ind) => {

//                         if (val.id === action.payload.id) {



//                             val.issueStatus = action.payload.boardName

//                             state.boardItem.boardArr.filter((valboard) => valboard.uniqText === action.payload.boardName ? valboard.boardIssue.push(val) : null)
//                             state.boardItem.boardArr[i].boardIssue.splice(ind, 1)



//                             state.boardItem.boardArr.map((valboard) => {
//                                 if (valboard.uniqText === action.payload.boardName || valboard.uniqText === state.boardItem.getBoardIssueItem.issueStatus) {
//                                     valboard.boardIssue.map((val2board, ind2board) => {
//                                         val2board.id = Number(ind2board) + 1

//                                     })
//                                 }
//                             })

//                             state.boardItem.getBoardIssueItem.issueStatus = action.payload.boardName

//                         }


//                     })



//                     console.log(current(state.boardItem.getBoardIssueItem), '222')
//                     console.log(current(state.boardItem.boardArr), 'boards')
//                 }
//             }
//         },

//         changeGetBoardIssueItemFunc(state: InitialStateBoardType, action: PayloadAction<IssuesType>) {
//             state.boardItem.getBoardIssueItem = action.payload
//         },

//         changeAllBoardItems(state: InitialStateBoardType, action: PayloadAction<InitialStateBoardOverlayType>) {

//             console.log(action.payload.boardUniqName, current(state))

//             // if (!state.boardItem.count) {
//             state.boardItem = { ...action.payload }
//             state.boardItem.count = true
//             // state.boardItem.boardArr = [...action.payload.boardArr]
//             // state.boardItem.count = true

//             // }
//             console.log(action.payload.boardUniqName, current(state))


//         }
//     }
// })

// export const { changeAllBoardItems, changeBoardUniqName, addIssueToBoardsFunc, addBoardFunc, updateChangedBoardArrFunc, changeIssNameFunc } = boardSlice.actions
// export default boardSlice.reducer




// export type BoardArrType = {
//     id: number,
//     title: string,
//     uniqText: string,
//     boardIssue: Array<IssuesType>,
//     boardLimit: number
// }


const initialState = {}



export const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {}
})