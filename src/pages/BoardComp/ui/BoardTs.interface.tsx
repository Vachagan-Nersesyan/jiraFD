import { IssuesType } from "entities/issues/issuesReducerTs.interface"
import { BoardArrType, InitialStateBoardOverlayType, ProjectType } from "entities/project/projectReducerTs.interface"
import { NavigateFunction, Params } from "react-router-dom"

export interface OwnProps {
    router: any
}

export interface AddingBoardToProjectArgsType {
    projectName: string,
    board: InitialStateBoardOverlayType
}

export interface ChangeBoardLimitFuncArgsType {
    num: string,
    boardName: string
}

export interface GetBoardIssueFuncType {
    id: number,
    boardName: string
}

export interface DeleteIssueFuncArgsType {
    id: number,
    boardName: string
}

export interface AddIssueFlagFuncArgsType {
    id: number,
    boardName: string
}

export interface UpdateChangedBoardArrFuncArgsType {
    str: string,
    arr: Array<IssuesType>
}


export interface IssueToBoardsFuncArgsType {
    obj: IssuesType,
    uniqtext: string
}


export interface AddDesctiptionIssFuncType {
    arr: Array<string>,
    id: number,
    boardName: string
}

export interface ChangeIssNameFuncType {
    str: string,
    id: number,
    boardName: string
}

export interface Router {
    location: Location
    navigate: NavigateFunction
    params: Readonly<Params<string>>
}

export interface PropsWithRouter {
    router: Router
}



export interface MapStateToPropsType {
    projectsArr: Array<ProjectType>,
    // issuesArr: Array<IssuesType>,
    boardArr: Array<BoardArrType>,
    getBoardIssueItem: IssuesType,
    // boardAllItem: InitialStateBoardOverlayType
}

export interface MapDispatchToPropsType {
    addDesctiptionIssFunc: ({ arr, id, boardName }: AddDesctiptionIssFuncType) => void,
    changeIssNameFunc: ({ str, id, boardName }: ChangeIssNameFuncType) => void,
    addIssueToBoardsFunc: ({ obj, uniqtext }: IssueToBoardsFuncArgsType) => void,
    addBoardFunc: (str: string) => void,
    updateChangedBoardArrFunc: ({ str, arr }: UpdateChangedBoardArrFuncArgsType) => void,
    addIssueFlagFunc: ({ id, boardName }: AddIssueFlagFuncArgsType) => void,
    deleteIssueFunc: ({ id, boardName }: DeleteIssueFuncArgsType) => void,
    deleteBoardFunc: (str: string) => void,
    changeBoardLimitFunc: ({ num, boardName }: ChangeBoardLimitFuncArgsType) => void,
    getBoardIssueFunc: ({ id, boardName }: GetBoardIssueFuncType) => void,
    addingBoardToProject: ({ projectName, board }: AddingBoardToProjectArgsType) => void
}
