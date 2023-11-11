// import { BoardArrType, InitialStateBoardOverlayType, InitialStateBoardType, getBoardIssueItemExample } from "./boardsReducer";
import { IssuesType } from "./issuesReducer";
// import { AppStateType, InferActionsTypes } from "./redux-store";
import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'

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
}


const initialState: InitialStateType = {
    projectArr: [
        {
            id: 0,
            picture: '',
            name: 'Sprint 1',
            projectType: 'Software project',
            key: 'P1',
            lead: 'Vachagan',
            backlogSecIssueArr: [],
            defaultAssignee: 'Unissagned',
            board: { ...boardExample, boardUniqName: "Sprint 1 board" },
            boardUniqName: "Sprint 1 board"
        },
        {
            id: 1,
            picture: '',
            name: 'Sprint 2',
            projectType: 'Software project',
            key: 'P2',
            backlogSecIssueArr: [],
            lead: 'Karlen',
            defaultAssignee: 'Unissagned',
            board: { ...boardExample, boardUniqName: "Sprint 2 board" },
            boardUniqName: "Sprint 2 board"

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
    },

    currentProjectNumber: 0,

    allProjectsIssueArr: [],

    backlogIssueArr: [],


}

export type InitialStateType = {
    projectArr: Array<ProjectType>,
    currentProject: string,
    currentBoard: InitialStateBoardOverlayType,
    getBoardIssueItem: IssuesType,
    currentProjectNumber: number,
    allProjectsIssueArr: Array<IssuesType>,
    backlogIssueArr: Array<IssuesType>,
}


export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {

        setAllProjectsIssuesArr(state: InitialStateType, action: PayloadAction<Array<IssuesType>>) {
            state.allProjectsIssueArr = action.payload
        },

        setCurrentProject(state: InitialStateType, action: PayloadAction<number>) {
            state.currentProjectNumber = action.payload

            console.log(state.currentProjectNumber)
        },
        changeBoardToProject(state: InitialStateType, action: PayloadAction<string>) {
            // state.currentProject = action.payload
        },

        setBacklogIssueArr(state: InitialStateType, action: PayloadAction<Array<IssuesType>>) {
            state.backlogIssueArr = action.payload
        },


        addingBoardToProject(state: InitialStateType, action: PayloadAction<{ projectName: string, board: InitialStateBoardOverlayType }>) {

            // console.log(action.payload.board)
            // debugger



            // // if (state.currentProject === action.payload.projectName || state.currentProject !== '') {
            // console.log(state.currentProject, 'state.currentProject')


            // for (let i in state.projectArr) {

            //     if (state.projectArr[i].boardUniqName === state.currentProject) {

            //         // state.currentProject = action.payload.projectName
            //         state.projectArr[i].board = { ...action.payload.board }
            //         break
            //     }
            // }
            // console.log(current(state))


            // // yssttexic

            // for (let j in state.projectArr) {
            //     if (state.projectArr[j].boardUniqName === action.payload.projectName) {

            //         state.currentBoard = { ...state.projectArr[j].board }
            //         // console.log(current(state.projectArr[j].board))

            //     }
            // }



            console.log(current(state), 'state.projectArr')
            // }

            //     if (!state.count) {


            //     } else {
            //         state.count = false
            //     }

            // } else {

            //     for (let j in state.projectArr) {
            //         if (state.projectArr[j].boardUniqName === action.payload.projectName) {
            //             state.currentProject = action.payload.projectName

            //             state.currentBoard = { ...state.projectArr[j].board }
            //             // console.log(current(state.projectArr[j].board))

            //         }
            //     }

            //     state.count = false
            // }




            // state.count = false

        },

        addingCurrentBoardToProject(state: InitialStateType, action: PayloadAction<{ projectName: string, board: InitialStateBoardOverlayType }>) {
            // jnjel
            // for (let i in state.projectArr) {

            //     if (state.projectArr[i].boardUniqName === state.currentProject) {

            //         // state.currentProject = action.payload.projectName
            //         state.projectArr[i].board = { ...action.payload.board }
            //         break
            //     }
            // }

        },
        addingIssueToCurrentBoard(state: InitialStateType, action: PayloadAction<{ obj: IssuesType, str: string, projectName: string }>) {


            for (let i in state.projectArr) {
                if (state.projectArr[i].name === action.payload.projectName) {
                    for (let j in state.projectArr[i].board.boardArr) {
                        if (state.projectArr[i].board.boardArr[j].uniqText === action.payload.str) {
                            state.projectArr[i].board.boardArr[j].boardIssue.push(action.payload.obj)

                        }
                    }

                }
            }


            console.log(current(state))
        },
        changeBoardIssueProjectFunc(state: InitialStateType, action: PayloadAction<{ board: string, status: string, project: string, id: number }>) {
            // for (let i in state.projectArr) {
            //     if (state.projectArr[i].name === action.payload.project) {

            //         let issueObj: IssuesType = { ...getBoardIssueItemExample }
            //         state.projectArr[i].board.boardArr.map((val) => {

            //             if (val.uniqText === action.payload.status) {

            //                 val.boardIssue.map((val2, ind2) => {

            //                     if (val2.id === action.payload.id) {

            //                         issueObj = { ...val2 }
            //                         val.boardIssue.splice(ind2, 1)
            //                         console.log(current(state))

            //                     }
            //                 })
            //             }
            //         })
            //         state.projectArr[i].board.boardArr.map((val) => {

            //             if (val.uniqText === action.payload.board) {
            //                 val.boardIssue.push(issueObj)
            //             }
            //         })
            //         state.currentBoard = { ...state.projectArr[i].board }

            //     }
            // }

            // debugger

            // console.log(current(state))
        },


        addIssueBacklogToBoardFunc(state: InitialStateType, action: PayloadAction<{ obj: IssuesType, projectName: string }>) {
            for (let i in state.projectArr) {
                if (state.projectArr[i].name === action.payload.projectName) {
                    state.projectArr[i].board.boardArr[0].boardIssue.push(action.payload.obj)
                    state.projectArr[i].backlogSecIssueArr.map((val, ind) => {

                        if (val.uniqId === action.payload.obj.uniqId) {

                            state.projectArr[i].backlogSecIssueArr.splice(ind, 1)
                        }
                    })
                }
            }

        },

        addFlagToBacklogIssueFunc(state: InitialStateType, action: PayloadAction<string>) {
            for (let i in state.projectArr) {
                if (state.projectArr[i].name === state.getBoardIssueItem.issuesProject) {
                    state.projectArr[i].backlogSecIssueArr.map((val, ind) => {

                        if (val.uniqId === state.getBoardIssueItem.uniqId) {
                            val.flag = !val.flag
                            state.getBoardIssueItem.flag = !state.getBoardIssueItem.flag
                        }
                    })
                }
            }
        },

        deleteFlagToBacklogIssueFunc(state: InitialStateType, action: PayloadAction) {
            for (let i in state.projectArr) {
                if (state.projectArr[i].name === state.getBoardIssueItem.issuesProject) {
                    state.projectArr[i].backlogSecIssueArr.map((val, ind) => {
                        if (val.uniqId === state.getBoardIssueItem.uniqId) {

                            state.projectArr[i].backlogSecIssueArr.splice(ind, 1)
                        }
                    })
                }
            }
        },



        // boards functions start



        changeBoardUniqName(state: InitialStateType, action: PayloadAction<string>) {


            // state.boardItem.boardUniqName = action.payload
            // console.log(state.boardItem.boardUniqName)
        },

        addIssueToBoardsFunc(state: InitialStateType, action: PayloadAction<{ obj: IssuesType, uniqtext: string }>) {


            let currentBoard = state.projectArr[state.currentProjectNumber].board.boardArr

            for (let i in currentBoard) {

                if (currentBoard[i].uniqText === action.payload.uniqtext) {
                    currentBoard[i].boardIssue.push(action.payload.obj)

                    currentBoard[i].boardIssue.map((val, ind) => {
                        val.id = Number(ind) + 1
                    })

                    break
                }
            }

            console.log(current(state))
        },

        changeIssNameFunc(state: InitialStateType, action: PayloadAction<{ str: string, id: number, boardName: string }>) {

            let currentBoard = state.projectArr[state.currentProjectNumber].board.boardArr


            for (let i in currentBoard) {
                if (currentBoard[i].uniqText === action.payload.boardName) {
                    currentBoard[i].boardIssue.map((val) => {
                        if (val.id === action.payload.id) {
                            val.summary = action.payload.str
                            state.getBoardIssueItem.summary = action.payload.str
                        }
                    })
                }
            }
        },
        addDesctiptionIssFunc(state: InitialStateType, action: PayloadAction<{ arr: Array<string>, id: number, boardName: string }>) {

            let currentBoard = state.projectArr[state.currentProjectNumber].board.boardArr


            for (let i in currentBoard) {
                if (currentBoard[i].uniqText === action.payload.boardName) {
                    currentBoard[i].boardIssue.map((val) => {
                        if (val.id === action.payload.id) {
                            if (val.description && state.getBoardIssueItem.description) {

                                for (let t in action.payload.arr) {
                                    if (!val.description.includes(action.payload.arr[t]) && !state.getBoardIssueItem.description.includes(action.payload.arr[t])) {
                                        val.description.push(action.payload.arr[t])
                                        state.getBoardIssueItem.description.push(action.payload.arr[t])
                                    }

                                }


                            }

                        }
                    })
                }

            }

        },


        addBoardFunc(state: InitialStateType, action: PayloadAction<string>) {

            let currentBoard = state.projectArr[state.currentProjectNumber].board.boardArr

            let boardObj = {
                id: currentBoard.length,
                title: action.payload,
                uniqText: action.payload.toLowerCase().split(' ').join(''),
                boardIssue: [],
                boardLimit: 1000
            }
            currentBoard.push(boardObj)
        },

        updateChangedBoardArrFunc(state: InitialStateType, action: PayloadAction<{ str: string, arr: Array<IssuesType> }>) {


            let currentBoard = state.projectArr[state.currentProjectNumber].board.boardArr


            let fastArr = []

            for (let i in currentBoard) {

                if (currentBoard[i].uniqText === action.payload.str) {
                    currentBoard[i].boardIssue = []


                    for (let j in action.payload.arr) {
                        let o = { ...action.payload.arr[j] }
                        o.issueStatus = action.payload.str
                        o.id = Number(j) + 1
                        fastArr.push(o)
                    }

                    currentBoard[i].boardIssue = fastArr

                    break
                }
            }
            console.log(current(state), 'current(state)')
        },

        addIssueFlagFunc(state: InitialStateType, action: PayloadAction<{ id: number, boardName: string }>) {

            let currentBoard = state.projectArr[state.currentProjectNumber].board.boardArr

            for (let i in currentBoard) {

                if (currentBoard[i].uniqText === action.payload.boardName) {
                    for (let j in currentBoard[i].boardIssue) {

                        if (currentBoard[i].boardIssue[j].id === action.payload.id) {

                            currentBoard[i].boardIssue[j].flag = !currentBoard[i].boardIssue[j].flag
                            state.getBoardIssueItem.flag = !state.getBoardIssueItem.flag

                        }
                    }
                }

            }
        },

        deleteIssueFunc(state: InitialStateType, action: PayloadAction<{ id: number, boardName: string }>) {

            let currentBoard = state.projectArr[state.currentProjectNumber].board.boardArr


            let fastArr = []

            for (let i in currentBoard) {
                if (currentBoard[i].uniqText === action.payload.boardName) {

                    for (let j in currentBoard[i].boardIssue) {
                        if (currentBoard[i].boardIssue[j].id === action.payload.id) {
                            currentBoard[i].boardIssue.splice(Number(j), 1)
                        }
                    }

                }
            }

            for (let t in currentBoard) {

                if (currentBoard[t].uniqText === action.payload.boardName) {

                    for (let j in currentBoard[t].boardIssue) {
                        let o = { ...currentBoard[t].boardIssue[j] }
                        o.id = Number(j) + 1
                        fastArr.push(o)
                    }

                    currentBoard[t].boardIssue = fastArr

                    break
                }
            }
        },

        deleteBoardFunc(state: InitialStateType, action: PayloadAction<string>) {

            let currentBoard = state.projectArr[state.currentProjectNumber].board.boardArr


            let deletedBoardIssuesArr: Array<IssuesType> = []

            for (let i in currentBoard) {
                if (currentBoard[i].uniqText === action.payload) {

                    currentBoard[0].boardIssue = [...currentBoard[0].boardIssue, ...currentBoard[i].boardIssue]

                    currentBoard.splice(Number(i), 1)
                }
            }

            console.log(deletedBoardIssuesArr)
            for (let j in currentBoard) {
                currentBoard[j].id = Number(j)
            }

        },

        changeBoardLimitFunc(state: InitialStateType, action: PayloadAction<{ num: string, boardName: string }>) {

            let currentBoard = state.projectArr[state.currentProjectNumber].board.boardArr

            for (let i in currentBoard) {

                if (currentBoard[i].uniqText === action.payload.boardName) {

                    currentBoard[i].boardLimit = Number(action.payload.num)
                }
            }
        },

        getBoardIssueFunc(state: InitialStateType, action: PayloadAction<{ id: number, boardName: string }>) {

            let currentBoard = state.projectArr[state.currentProjectNumber].board.boardArr


            for (let i in currentBoard) {
                if (currentBoard[i].uniqText === action.payload.boardName) {
                    for (let j in currentBoard[i].boardIssue) {
                        if (currentBoard[i].boardIssue[j].id === action.payload.id) {
                            state.getBoardIssueItem = { ...currentBoard[i].boardIssue[j] }
                        }
                    }
                }
            }
        },

        // issue modal  function



        changeIssDescriptionFunc(state: InitialStateType, action: PayloadAction<{ str: string, id: number, boardName: string }>) {
            let currentBoard = state.projectArr[state.currentProjectNumber].board.boardArr


            for (let i in currentBoard) {
                if (currentBoard[i].uniqText === action.payload.boardName) {
                    currentBoard[i].boardIssue.map((val) => {
                        if (val.id === action.payload.id) {
                            val.descriptionText = action.payload.str

                            state.getBoardIssueItem.descriptionText = action.payload.str

                        }
                    })
                }
            }
        },

        addCommentIssueFunc(state: InitialStateType, action: PayloadAction<{ str: string, id: number, boardName: string }>) {


            let currentBoard = state.projectArr[state.currentProjectNumber].board.boardArr

            const getDate: () => string = () => {
                const newDate = new Date();
                const year = newDate.getFullYear();
                const month = newDate.getMonth() + 1;
                const d = newDate.getDate();

                return `${month.toString().padStart(2, '0')}/${d.toString().padStart(2, '0')}/${year}`;
            }

            for (let i in currentBoard) {
                if (currentBoard[i].uniqText === action.payload.boardName) {
                    currentBoard[i].boardIssue.map((val) => {
                        if (val.id === action.payload.id) {

                            let commentObj = {
                                id: val.issueComments.length,
                                text: action.payload.str,
                                name: val.reporter,
                                date: getDate(),
                                picture: ''
                            }

                            val.issueComments.push(commentObj)
                            state.getBoardIssueItem.issueComments.push(commentObj)

                        }
                    })
                }
            }


        },

        changeCommentIssueFunc(state: InitialStateType, action: PayloadAction<{ str: string, id: number, boardName: string, commId: number }>) {

            let currentBoard = state.projectArr[state.currentProjectNumber].board.boardArr

            for (let i in currentBoard) {
                if (currentBoard[i].uniqText === action.payload.boardName) {
                    currentBoard[i].boardIssue.map((val) => {
                        if (val.id === action.payload.id) {
                            val.issueComments.map((val2, ind2) => {
                                if (val2.id === action.payload.commId) {
                                    val2.text = action.payload.str

                                    state.getBoardIssueItem.issueComments[ind2].text = action.payload.str
                                }
                            })

                        }
                    })
                }
            }

        },

        deleteCommentIssueFunc(state: InitialStateType, action: PayloadAction<{ str: string, id: number, boardName: string, commId: number }>) {

            let currentBoard = state.projectArr[state.currentProjectNumber].board.boardArr

            for (let i in currentBoard) {
                if (currentBoard[i].uniqText === action.payload.boardName) {
                    currentBoard[i].boardIssue.map((val) => {
                        if (val.id === action.payload.id) {
                            val.issueComments.map((val2, ind2) => {
                                if (val2.id === action.payload.commId) {

                                    val.issueComments.splice(ind2, 1)
                                    state.getBoardIssueItem.issueComments.splice(ind2, 1)
                                }
                            })

                            val.issueComments.map((val2, ind2) => {
                                val2.id = Number(ind2) + 1

                                state.getBoardIssueItem.issueComments[ind2].id = Number(ind2) + 1
                            })

                        }
                    })
                }
            }

        },

        changeIssueBoardFunc(state: InitialStateType, action: PayloadAction<{ id: number, boardName: string }>) {



            let currentBoard = state.projectArr[state.currentProjectNumber].board.boardArr


            for (let i in currentBoard) {

                if (currentBoard[i].uniqText === state.getBoardIssueItem.issueStatus) {

                    currentBoard[i].boardIssue.map((val, ind) => {

                        if (val.id === action.payload.id) {



                            val.issueStatus = action.payload.boardName

                            currentBoard.filter((valboard) => valboard.uniqText === action.payload.boardName ? valboard.boardIssue.push(val) : null)
                            currentBoard[i].boardIssue.splice(ind, 1)



                            currentBoard.map((valboard) => {
                                if (valboard.uniqText === action.payload.boardName || valboard.uniqText === state.getBoardIssueItem.issueStatus) {
                                    valboard.boardIssue.map((val2board, ind2board) => {
                                        val2board.id = Number(ind2board) + 1

                                    })
                                }
                            })

                            state.getBoardIssueItem.issueStatus = action.payload.boardName

                        }


                    })

                }
            }
        },

        changeGetBoardIssueItemFunc(state: InitialStateType, action: PayloadAction<IssuesType>) {

            console.log(current(state), 'state.getBoardIssueItem')
            state.getBoardIssueItem = action.payload
        },

        addingIssueInBacklogFunc(state: InitialStateType, action: PayloadAction<IssuesType>) {

            for (let i in state.projectArr) {
                if (state.projectArr[i].name === action.payload.issuesProject) {
                    state.projectArr[i].board.boardArr.map((val) => {

                        if (val.uniqText === action.payload.issueStatus) {

                            val.boardIssue.push(action.payload)
                            val.boardIssue.map((val1, ind1) => {
                                val1.id = Number(ind1) + 1
                            })

                        }
                    })
                }
            }

        },
        addIssueToBacklogArr(state: InitialStateType, action: PayloadAction<{ str: string, obj: IssuesType }>) {
            for (let i in state.projectArr) {
                if (state.projectArr[i].name === action.payload.str) {
                    state.projectArr[i].backlogSecIssueArr.push(action.payload.obj)

                    state.projectArr[i].backlogSecIssueArr.map((val1, ind1) => {
                        val1.id = Number(ind1) + 1
                    })
                }
            }

            console.log(current(state))
        },

        changeAllBoardItems(state: InitialStateType, action: PayloadAction<InitialStateBoardOverlayType>) {

            // console.log(action.payload.boardUniqName, current(state))

            // // if (!state.boardItem.count) {
            // state.boardItem = { ...action.payload }
            // state.boardItem.count = true
            // // state.boardItem.boardArr = [...action.payload.boardArr]
            // // state.boardItem.count = true

            // // }
            // console.log(action.payload.boardUniqName, current(state))


        }

    }
})


export const { changeGetBoardIssueItemFunc, setAllProjectsIssuesArr, changeAllBoardItems, changeBoardUniqName, setCurrentProject, addingCurrentBoardToProject, changeBoardToProject, addingIssueToCurrentBoard, addingBoardToProject } = projectSlice.actions
export default projectSlice.reducer

export type ProjectType = {
    id: number,
    picture: string,
    name: string,
    key: string,
    projectType: string,
    lead: string,
    board: InitialStateBoardOverlayType,
    defaultAssignee: string,
    backlogSecIssueArr: Array<IssuesType>,
    boardUniqName: string
}



export type BoardArrType = {
    id: number,
    title: string,
    uniqText: string,
    boardIssue: Array<IssuesType>,
    boardLimit: number
}

export type InitialStateBoardType = {
    boardItem: InitialStateBoardOverlayType

}

export type InitialStateBoardOverlayType = {
    boardArr: Array<BoardArrType>,
    getBoardIssueItem: IssuesType,
    boardUniqName: string,
}

