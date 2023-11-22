import { IssuesType } from "entities/issues/issuesReducerTs.interface"
import { BoardArrType, InitialStateBoardOverlayType, ProjectType } from "entities/project/projectReducerTs.interface"
import { AddDesctiptionIssFuncType, AddIssueFlagFuncArgsType, DeleteIssueFuncArgsType } from "pages/BoardComp/ui/BoardTs.interface"

export interface OwnProps { }


export interface MapStateToPropsType {
    getBoardIssueItem: IssuesType,
    boardArr: Array<BoardArrType>,
    currentBoard: InitialStateBoardOverlayType,
    allProjectsIssueArr: Array<IssuesType>,
    currentProjectCm: ProjectType
}

export interface MapDispatchToPropsType {
    changeIssueBoardFunc: ({ id, boardName }: ChangeIssueBoardFuncArgsType) => void,
    deleteIssueFunc: ({ id, boardName }: DeleteIssueFuncArgsType) => void,
    addIssueFlagFunc: ({ id, boardName }: AddIssueFlagFuncArgsType) => void,
    addDesctiptionIssFunc: ({ arr, id, boardName }: AddDesctiptionIssFuncType) => void,
    changeBoardIssueProjectFunc: ({ board, status, project, id }: ChangeBoardIssueProjectFuncArgsType) => void,
    changeAllBoardItems: (board: InitialStateBoardOverlayType) => void

}

export interface ChangeBoardIssueProjectFuncArgsType {
    board: string,
    status: string,
    project: string,
    id: number
}

export interface ChangeIssueBoardFuncArgsType {
    id: number,
    boardName: string
}

export interface FilterRightBarThirdSecItemCompType {
    getBoardIssueItem: IssuesType,
    currentProjectCm: ProjectType
}